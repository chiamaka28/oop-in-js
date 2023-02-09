class Movie {
    constructor (tittle, director, Genre, ReleaseYear,Rating ){
        this.tittle = tittle;
        this.director = director;
        this.genre = genre;
        this.ReleaseYear = ReleaseYear;
        this.Rating
    }

    Movie.prototype.getOverview () {
        console.log(`${this.tittle} a ${this.genre} film directed by ${this.director} was released in ${this.ReleaseYear}. It recieved a rating of ${this.}` )
    }
}