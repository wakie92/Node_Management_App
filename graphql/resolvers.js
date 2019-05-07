const deock = {
  name: "seo",
  age: 27,
  gender: "male"
};

const resolvers = {
  Query: {
    people: () => deock
  }
};

export default resolvers;
