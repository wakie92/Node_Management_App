import { getById, getMovies, addMovie } from "../db/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => {
      const { id } = args;
      return getById(id);
    }
  },
  Mutation: {
    addMovies: (_, args) => {
      const { name, score } = args;
      return addMovie(name, score);
    }
  }
};

export default resolvers;
