/*
 * Copyright 2024 
 * Rajneesh Kumar Aggarwal (rajneesh.aggarwal@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  /**
   * Ollama Embeddings configuration
   *
   */
  ai: {
    embeddings: {
      ollama: {
        /**
         * The base URL for the Ollama API endpoint. Defaults to http://localhost:11434
         */
        baseUrl?: string;

        /**
         * Name of the Ollama model to use to create Embeddings. Defaults to llama3.2
         */
        model?: string;

        /**
         * Timeout for requests to Ollama API in milliseconds
         */
        requestTimeout?: number;

        /**
         * The number of dimensions to generate. Defaults to use the default value from the chosen model
         */
        embeddingsDimensions?: number;
      };
    };
  };
}