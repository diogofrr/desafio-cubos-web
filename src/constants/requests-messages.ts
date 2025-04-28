const requestsMessages = {
  auth: {
    login: {
      success: 'Login realizado com sucesso!',
      error: 'Erro ao realizar login. Tente novamente mais tarde.',
    },
    register: {
      success: 'Cadastro realizado com sucesso!',
      error: 'Erro ao realizar cadastro. Tente novamente mais tarde.',
    },
  },
  movies: {
    listMovies: {
      success: 'Filmes listados com sucesso!',
      error: 'Erro ao listar filmes. Tente novamente mais tarde.',
    },
    getMovie: {
      success: null,
      error: 'Erro ao obter informações do filme. Tente novamente mais tarde.',
    },
    getGenres: {
      success: null,
      error: 'Erro ao obter gêneros. Tente novamente mais tarde.',
    },
    getLanguages: {
      success: null,
      error: 'Erro ao obter idiomas. Tente novamente mais tarde.',
    },
  },
};

export { requestsMessages };
