'use client';

interface ConversationMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export class OpenRouterService {
  private apiKey: string;
  private baseUrl: string;
  private defaultModel: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';
    this.baseUrl = 'https://openrouter.ai/api/v1';
    this.defaultModel = 'google/gemini-2.5-flash-preview-05-20';
    
    if (!this.apiKey) {
      console.error('OpenRouter API Key is not set in environment variables');
    }
  }

  /**
   * Carga el system prompt desde el archivo público
   */
  private async loadSystemPrompt(): Promise<string> {
    try {
      const response = await fetch('/prompts/system_prompt.txt');
      if (!response.ok) {
        throw new Error(`Failed to load system prompt: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading system prompt:', error);
      return 'Eres un asistente útil que ayuda a conocer el portafolio de Enrique Ríos Flores.';
    }
  }

  /**
   * Envía un mensaje a OpenRouter y devuelve la respuesta
   */
  async sendMessage(
    message: string, 
    conversationHistory: ConversationMessage[] = [],
    model: string = this.defaultModel,
    customSystemPrompt?: string
  ): Promise<string> {
    try {
      // Usar system prompt personalizado o cargar desde archivo
      const systemPrompt = customSystemPrompt || await this.loadSystemPrompt();

      // Construir el array de mensajes
      const messages: ConversationMessage[] = [
        {
          role: 'system',
          content: systemPrompt
        },
        // Agregar historial previo de conversación
        ...conversationHistory,
        // Agregar el mensaje actual
        {
          role: 'user',
          content: `<${message}>`
        }
      ];

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : '',
          'X-Title': 'Portfolio ChatBot'
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          temperature: 0.7,
          max_tokens: 1000,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenRouter API Error: ${response.status} - ${errorText}`);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from OpenRouter API');
      }

      return data.choices[0].message.content;

    } catch (error) {
      console.error('Error calling OpenRouter API:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('API Error: 401')) {
          return 'Error de autenticación. Verifica la configuración de la API key.';
        } else if (error.message.includes('API Error: 429')) {
          return 'Límite de solicitudes alcanzado. Inténtalo más tarde.';
        } else if (error.message.includes('API Error: 500')) {
          return 'Error del servidor. Inténtalo más tarde.';
        }
      }
      
      return 'Lo siento, hubo un error procesando tu mensaje. Por favor, inténtalo de nuevo.';
    }
  }

  /**
   * Obtiene la lista de modelos disponibles
   */
  async getAvailableModels(): Promise<any[]> {
    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching models:', error);
      return [];
    }
  }

  /**
   * Verifica si la API key es válida
   */
  async validateApiKey(): Promise<boolean> {
    try {
      const models = await this.getAvailableModels();
      return models.length > 0;
    } catch (error) {
      return false;
    }
  }

  /**
   * Obtiene información sobre el uso de la API
   */
  async getUsageInfo(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/key`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching usage info:', error);
      return null;
    }
  }

  /**
   * Cambia el modelo por defecto
   */
  setDefaultModel(model: string): void {
    this.defaultModel = model;
  }

  /**
   * Obtiene el modelo actual
   */
  getCurrentModel(): string {
    return this.defaultModel;
  }
}
