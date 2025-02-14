# RAG AI Backend-embeddings Ollama submodule

This is a submodule for the `@roadiehq/rag-ai-backend` module, which provides functionality to use Ollama embeddings to generate a RAG AI Backend plugin for Backstage. It exposes configuration options to configure Ollama API endpoint, desired embeddings model, and the parameters for the model.

## Initialization

```typescript
const vectorStore = await createRoadiePgVectorStore({ logger, database });

const augmentationIndexer = await initializeOllamaEmbeddings({
  logger,
  catalogApi,
  vectorStore,
  discovery,
  config,
});
```

## Configuration Options

The module expects the configuration of the Ollama endpoint, the name of the embeddings model, and its configuration options to be configured via app-config.

Make sure you have Ollama running locally or have access to a remote Ollama instance.

```yaml
ai:
  embeddings:
    # Ollama Embeddings configuration
    ollama:
      # (Optional) The base URL for the Ollama API endpoint. Defaults to http://localhost:11434
      baseUrl: 'http://localhost:11434'

      # (Optional) Name of the Ollama model to use to create Embeddings. Defaults to llama3.2-latest
      model: 'llama3.2-latest'

      # (Optional) Timeout for requests to Ollama API in milliseconds
      requestTimeout: 30000

      # (Optional) The number of dimensions to generate. Defaults to use the default value from the chosen model
      embeddingsDimensions: 384
```

<details><summary>Example minimal configuration</summary>

```yaml
ai:
  embeddings:
    ollama: {} # uses default localhost endpoint and llama3.2 model
```

</details>

### Additional Notes

- Ensure you have Ollama installed and running before using this module
- Different Ollama models may have different embedding dimensions. Make sure to set the correct dimensions for your chosen model
- The model specified must be pulled and available in your Ollama instance

---

## Author

Rajneesh Kumar Aggarwal
(rajneesh.aggarwal@gmail.com)