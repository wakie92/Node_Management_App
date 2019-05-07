import { getById, getMovies, addMovie, deleteMovie } from "../db/db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => {
      const { id } = args;
      return getById(id);
    }
  },
  Mutation: {
    addMovie: (_, args) => {
      const { name, score } = args;
      return addMovie(name, score);
    },
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
