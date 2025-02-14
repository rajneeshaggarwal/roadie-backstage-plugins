import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama';
import {
  DefaultVectorAugmentationIndexer,
  RoadieEmbeddingsConfig,
} from '@roadiehq/rag-ai-backend-retrieval-augmenter';

export type OllamaConfig = {
  model?: string;
  baseUrl?: string;
  requestTimeout?: number;
  embeddingsDimensions?: number;
};

export class JioOllamaAugmenter extends DefaultVectorAugmentationIndexer {
  constructor(
    config: RoadieEmbeddingsConfig & {
      config: OllamaConfig;
    },
  ) {
    const embeddings = new OllamaEmbeddings({
      baseUrl: config.config.baseUrl ? config.config.baseUrl : 'http://localhost:11434', // Optional: defaults to http://localhost:11434
      model: config.config.model ? config.config.model : 'llama3.2-latest', // Default to llama2 if not specified
      requestTimeout: config.config.requestTimeout, // Optional timeout in milliseconds
      dimensions: config.config.embeddingsDimensions, // Optional: specify embedding dimensions
    });
    super({ ...config, embeddings });
  }
}