class Book {
    constructor (tittle ,author ,ISBN ,numCopies) {
      this.tittle = tittle;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    }
    getAvailibility(){
        if (this.numCopies === 0){
            console.log('out of stock');
        }else if (this.numCopies > 10){
            console.log('in stock');
        }
    }
    
}

 class TechnicalBook extends book {
    constructor(edition){
        super (tittle ,author ,ISBN ,numCopies)
        this.edition = edition;

    }
    getEdition() {
    console.log(`Current version of this book is ${this.edition}`)
    }
   
 }
