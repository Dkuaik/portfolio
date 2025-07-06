// Exportaciones principales del módulo ChatBot
export { default as ChatBot } from './ChatBotWrapper';
export { EmbeddingService } from './EmbeddingService';

// Tipos compartidos
export interface ConversationMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}
