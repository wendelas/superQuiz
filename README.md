# superQuiz
Sistema de quiz personalizado

# Arquitetura do projeto

quiz-backend/
│
├── src/
│   ├── controllers/
│   │   ├── quizController.ts
│   │   ├── authController.ts
│   │   ├── resultController.ts
│   │   └── rankingController.ts
│   │
│   ├── models/
│   │   ├── quizModel.ts
│   │   ├── userModel.ts
│   │   ├── resultModel.ts
│   │   └── rankingModel.ts
│   │
│   ├── services/
│   │   ├── quizService.ts
│   │   ├── authService.ts
│   │   ├── resultService.ts
│   │   ├── rankingService.ts
│   │   └── cacheService.ts
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   └── errorHandler.ts
│   │
│   ├── routes/
│   │   └── index.ts
│   │
│   ├── config/
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   ├── env.ts
│   │   └── tsoa.ts
│   │
│   ├── app.ts
│   ├── server.ts
│   └── swagger.json
│
├── dist/
│
├── node_modules/
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── tsoa.json

Descrição do projeto:

Descrição das Pastas e Arquivos
controllers/: Contém os controladores que lidam com as requisições HTTP e coordenam as operações entre serviços e modelos.

quizController.ts: Lida com as operações relacionadas a quizzes.
authController.ts: Lida com autenticação e autorização.
resultController.ts: Lida com os resultados dos quizzes.
rankingController.ts: Lida com a geração de rankings.
models/: Define os esquemas e interfaces dos dados usados na aplicação.

quizModel.ts: Esquema para quizzes e perguntas.
userModel.ts: Esquema para usuários.
resultModel.ts: Esquema para resultados dos quizzes.
rankingModel.ts: Esquema para rankings.
services/: Contém a lógica de negócios e operações de manipulação de dados.

quizService.ts: Lógica para criação e gerenciamento de quizzes.
authService.ts: Lógica para autenticação e autorização.
resultService.ts: Lógica para manipulação dos resultados dos quizzes.
rankingService.ts: Lógica para cálculo e atualização de rankings.
cacheService.ts: Lógica para interações com o cache (Redis).
middlewares/: Contém middlewares para manipulação de requisições.

authMiddleware.ts: Middleware para verificar autenticação e permissões.
errorHandler.ts: Middleware para manipulação de erros.
routes/: Define as rotas da API usando TSOA.

index.ts: Arquivo principal de rotas.
config/: Configurações gerais da aplicação.

database.ts: Configuração da conexão com o MongoDB.
redis.ts: Configuração da conexão com o Redis.
env.ts: Variáveis de ambiente.
tsoa.ts: Configuração do TSOA.
app.ts: Configuração inicial do aplicativo Express.

server.ts: Arquivo de inicialização do servidor.

swagger.json: Arquivo de configuração do Swagger.

.env: Arquivo para variáveis de ambiente.

.gitignore: Arquivo para ignorar arquivos e pastas no Git.

package.json: Dependências e scripts do Node.js.

tsconfig.json: Configuração do TypeScript.

tsoa.json: Configuração do TSOA.