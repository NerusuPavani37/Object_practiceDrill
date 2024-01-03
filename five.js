let moviesList=require('./moviesInfo');

let genreLevel={
    "drama" : 5,
    "sci-fi" :4,
    "adventure" : 3,
    "thriller" : 2,
    "crime" :1
}


let objectArr=Object.entries(moviesList);

let arrayOfObjects=objectArr.map(([name,details]) => ({name, ...details}));

let sortedGenre=arrayOfObjects.sort((a,b) =>{
    const genreA=a.genre.find(genre => genreLevel[genre]);
    const genreB=b.genre.find(genre => genreLevel[genre]);

    return genreLevel[genreB] - genreLevel[genreA];
});

let group=sortedGenre.reduce(function(acc ,curr){
        curr.genre.forEach(genre =>{
            if(acc[genre]){
                acc[genre].push(curr.name);
            }
        });
        return acc;
},{
    "drama" : [],
    "sci-fi" :[],
    "adventure" : [],
    "thriller" : [],
    "crime" :[]
});

console.log(group);