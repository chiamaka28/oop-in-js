class Book {
    constructor (tittle ,author ,ISBN ,numCopies) {
      this.tittle = tittle;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    } 
    get availibility () {
        return this.getAvailibility
    }
    getAvailibility = function() {
        if (this.numCopies === 0){
           return 'out of stock';
        }else if (this.numCopies > 10){
            return 'low stock';
        }
        return "in stock";
    }

    sell = function(numCopiesSold = 1){
        this.numCopies -= numCopiesSold;
}
    restock = function(numCopiesStocked = 5) {
         this.numCopies += numCopiesStocked;
}


}
