let moviesList=require('./moviesInfo');

let objectArr=Object.entries(moviesList);

let arrayOfObjects=objectArr.map(([name, details]) =>({name , ...details}))

let sortedArr=arrayOfObjects.sort((a,b) => {
    let aIMDB=a.imdbRating;
    let bIMDB=b.imdbRating;

    if(aIMDB!=bIMDB){
        return bIMDB-aIMDB;
        
    }
    else{
    
        return  b.totalEarnings-a.totalEarnings ;
    }
})

console.log(sortedArr);