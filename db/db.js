export const people = [
  {
    id: 1,
    name: "seo",
    age: 27,
    gender: "male"
  },
  {
    id: 2,
    name: "eun",
    age: 17,
    gender: "female"
  },
  {
    id: 3,
    name: "beom",
    age: 15,
    gender: "male"
  },
  {
    id: 4,
    name: "choi",
    age: 57,
    gender: "female"
  },
  {
    id: 5,
    name: "seo",
    age: 27,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(
    person => Number(person.id) === Number(id)
  );
  return filteredPeople[0];
};
