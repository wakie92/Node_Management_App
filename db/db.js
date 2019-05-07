export let movies = [
  {
    id: 0,
    name: "star wars",
    score: 1
  },
  {
    id: 1,
    name: "해리포터",
    score: 5
  },
  {
    id: 2,
    name: "마블",
    score: 9
  },
  {
    id: 3,
    name: "짱구",
    score: 5
  },
  {
    id: 4,
    name: "도라에몽",
    score: 3
  }
];

export const getById = id => {
  const filteredPeople = people.filter(
    person => Number(person.id) === Number(id)
  );
  return filteredPeople[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
