import { people, getById } from "../db/db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, args) => {
      const { id } = args;
      return getById(id);
    }
  }
};

export default resolvers;
