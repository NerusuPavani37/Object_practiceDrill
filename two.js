let moviesList=require('./moviesInfo');

let objectArr=Object.entries(moviesList);

let arrayOfObjects=objectArr.map(([name, details]) => {
    return ({name, ...details});
})

// console.log(arrayOfObjects);

let oscarMovies = arrayOfObjects.filter(movie =>{
    return movie.oscarNominations > 3 && movie.totalEarnings > "$500M";
})

console.log(oscarMovies);