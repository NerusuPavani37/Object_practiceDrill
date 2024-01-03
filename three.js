let moviesList =require('./moviesInfo');

let objectArray = Object.entries(moviesList);

let ArrayOfObjects = objectArray.map(([name, details]) => ({name, ...details}));

let leonardoMovies=ArrayOfObjects.filter(movies => movies.actors.includes("Leonardo Dicaprio"));
console.log(leonardoMovies);