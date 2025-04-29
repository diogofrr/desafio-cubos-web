# Desafio Cubos Front-End

Ambiente de produção [https://desafio-cubos-web-ashen.vercel.app/login](https://desafio-cubos-web-ashen.vercel.app/login)

## 🚀 Funcionalidades

- **Autenticação de usuários**
  - Login e registro de usuários
  - Proteção de rotas privadas
  - Gerenciamento de sessão
- **Lista de Filmes**
  - Visualização em cards
  - Paginação
  - Pesquisa por texto
- **Filtros Avançados**
  - Por gêneros
  - Por idiomas
  - Por duração
  - Por data de lançamento
- **Detalhes do Filme**
  - Informações básicas: poster, título, sinopse, gêneros
  - Informações técnicas: duração, data de lançamento, status, idioma
  - Informações financeiras: orçamento, receita, lucro
  - Avaliações: nota média, popularidade, total de votos
  - Visualização de trailer (YouTube embed)
- **Gerenciamento de Filmes**
  - Adicionar novos filmes
  - Editar filmes existentes
  - Excluir filmes
  - Upload de imagens de capa
- **Interface Responsiva**
  - Design adaptável para mobile, tablet e desktop
- **Tema Claro/Escuro**
  - Preferência de tema persistente
  - Detecção automática de tema do sistema

## 📦 Estrutura do Projeto

```
src/
├── app/               # Rotas e layouts da aplicação
│   ├── (auth)/        # Rotas de autenticação
│   └── (dashboard)/   # Rotas do painel principal
├── components/        # Componentes reutilizáveis
├── contexts/          # Contextos React para estado global
├── hooks/             # Custom hooks
├── lib/               # Utilitários e funções helpers
├── services/          # Serviços de API
├── styles/            # Estilos globais
├── types/             # Tipagens TypeScript
└── utils/             # Funções utilitárias
```

## 🔧 Instalação e Uso

### Especificações do sistema

- node.js v22.15.0
- npm v11.3.0

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/desafio-cubos-web.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
API_URL=http://localhost:8080
ENCRYPTION_SECRET=eecdb8c4e6622c59c898ab1fbd030aad
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador em [http://localhost:3000](http://localhost:3000)
