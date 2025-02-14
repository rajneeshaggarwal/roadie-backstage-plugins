import { Logger } from 'winston';
import { LoggerService } from '@backstage/backend-plugin-api';
import { AugmentationIndexer, RoadieVectorStore } from '@roadiehq/rag-ai-node';
import { OllamaConfig, JioOllamaAugmenter } from './JioOllamaAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import {
  PluginEndpointDiscovery,
  TokenManager,
} from '@backstage/backend-common';
import { Config } from '@backstage/config';
import { AugmentationOptions } from '@roadiehq/rag-ai-backend-retrieval-augmenter';

export interface JioOllamaEmbeddingsConfig {
  logger: Logger | LoggerService;
  tokenManager: TokenManager;
  vectorStore: RoadieVectorStore;
  catalogApi: CatalogApi;
  discovery: PluginEndpointDiscovery;
  config: Config;
}

export async function initializeOllamaEmbeddings({
  logger,
  tokenManager,
  vectorStore,
  catalogApi,
  discovery,
  config,
}: JioOllamaEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Roadie Ollama Embeddings');
  const ollamaConfig = config.get<OllamaConfig>('ai.embeddings.ollama');

  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const augmentationOptions: AugmentationOptions = {};
  if (embeddingsOptions) {
    augmentationOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    augmentationOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
    augmentationOptions.concurrencyLimit =
      embeddingsOptions.getOptionalNumber('concurrencyLimit');
  }
  return new JioOllamaAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    augmentationOptions,
    logger: logger.child({ label: 'roadie-ollama-embeddings' }),
    tokenManager,
    config: ollamaConfig,
  });
}