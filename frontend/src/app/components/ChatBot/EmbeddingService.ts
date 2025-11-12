'use client';

// Petición para búsqueda de embeddings
interface SearchRequest {
  query: string;
  max_results?: number;
  threshold?: number;
}

// Respuesta del endpoint de búsqueda
interface SearchResponse {
  query: string;
  results: DocumentChunk[];
  total_results: number;
  execution_time: number;
}

interface DocumentChunk {
  content: string;
  metadata: {
    key: string;
    source: string;
    size?: number;
    last_modified?: string;
  };
  score: number;
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
   * Realiza una búsqueda en los embeddings
   * @param query Consulta del usuario (obligatorio)
   * @param opts Opciones adicionales para la petición SearchRequest
   */
  async search(
    query: string,
    opts: Omit<Partial<SearchRequest>, 'query'> = {}
  ): Promise<SearchResponse> {
    // Valores por defecto según el esquema
    const body: SearchRequest = {
      query,
      max_results: opts.max_results ?? 5,
      threshold: opts.threshold ?? 0.3
    };

    try {
      const res = await fetch(
        `${this.baseUrl}/api/v1/embeddings/search`,
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

      const data: SearchResponse = await res.json();
      return data;
    } catch (err) {
      console.error('Error en EmbeddingService.search:', err);
      return {
        query,
        results: [],
        total_results: 0,
        execution_time: 0
      };
    }
  }
}