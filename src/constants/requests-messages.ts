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
    uploadImage: {
      success: null,
      error: 'Erro ao fazer upload da imagem. Tente novamente mais tarde.',
    },
    createMovie: {
      success: 'Filme criado com sucesso!',
      error: 'Erro ao criar filme. Tente novamente mais tarde.',
    },
    updateMovie: {
      success: 'Filme atualizado com sucesso!',
      error: 'Erro ao atualizar filme. Tente novamente mais tarde.',
    },
    deleteMovie: {
      success: 'Filme foi excluído com sucesso!',
      error: 'Erro ao excluir filme. Tente novamente mais tarde.',
    },
  },
};

export { requestsMessages };
