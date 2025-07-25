'use client';

// Petición para chat con contexto de embeddings
interface ChatRequest {
  query: string;
  context_query?: string;
  max_context_results?: number;
  similarity_threshold?: number;
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

// Respuesta del endpoint de chat
interface ChatResponse {
  query: string;
  response: string;
  context_used: Record<string, any>;
  execution_time: number;
  success: boolean;
  error?: string;
}

export class EmbeddingService {
  private baseUrl: string;

  constructor() {
    // Priorizar variables de .env.dokploy, luego Next.js, finalmente localhost
    this.baseUrl = 
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
      'http://localhost:8000';
  }

  /**
   * Realiza una consulta al endpoint /api/v1/embeddings/chat
   * @param query Consulta del usuario (obligatorio)
   * @param opts Opciones adicionales para la petición ChatRequest
   */
  async chat(
    query: string,
    opts: Omit<Partial<ChatRequest>, 'query'> = {}
  ): Promise<ChatResponse> {
    // Valores por defecto según el esquema
    const body: ChatRequest = {
      query,
      context_query: opts.context_query || query,
      max_context_results: opts.max_context_results ?? 5,
      similarity_threshold: opts.similarity_threshold ?? 0.3,
      model: opts.model || 'google/gemini-2.5-flash-lite-preview-06-17',
      temperature: opts.temperature ?? 0.7,
      max_tokens: opts.max_tokens ?? 1000
    };

    try {
      const res = await fetch(
        `${this.baseUrl}/api/v1/embeddings/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }

      const data: ChatResponse = await res.json();
      return data;
    } catch (err) {
      console.error('Error en EmbeddingService.chat:', err);
      return {
        query,
        response: '',
        context_used: {},
        execution_time: 0,
        success: false,
        error: err instanceof Error ? err.message : String(err)
      };
    }
  }
}