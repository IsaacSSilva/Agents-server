# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Descrição

Sistema backend para gerenciamento de salas (rooms), utilizando Node.js, TypeScript e Drizzle ORM.

## Tecnologias e Bibliotecas Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Drizzle ORM**: ORM para manipulação de banco de dados relacional.
- **Docker**: Utilizado para orquestração de containers e banco de dados.

## Padrões de Projeto

- Estrutura modular de pastas (`src/db`, `src/http/routes`).
- Separação de responsabilidades (conexão, schema, rotas).
- Uso de variáveis de ambiente para configuração.

## Setup e Configuração

1. **Clone o repositório:**

   ```sh
   git clone <url-do-repo>
   cd agents
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` baseado no exemplo em `src/env.ts`.

4. **Suba o banco de dados com Docker:**

   ```sh
   docker-compose up -d
   ```

5. **Execute as migrações e seeds:**

   ```sh
   npm run db:migrate
   npm run db:seed
   ```

6. **Inicie o servidor:**
   ```sh
   npm run dev
   ```

---

Desenvolvido durante o NLW da Rocketseat.
