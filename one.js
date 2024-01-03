let moviesList=require('./moviesInfo');

let objectArr=Object.entries(moviesList);

// console.log(objectArr);

let ArrayOfObject=objectArr.map(([name, details]) =>  ({name, ...details}));

// console.log(ArrayOfObject);

let earningsTotal=ArrayOfObject.filter(movie => {
    return movie.totalEarnings > "$800M";
})


console.log(earningsTotal);