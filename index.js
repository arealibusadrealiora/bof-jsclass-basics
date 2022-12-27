/* Question 1 */
/* give the logic to calculate price  
based on cost and profit (profit is counted on price) 
for example: cost 14, profit 30% => expected price is  20 */ 

class Book {
    constructor(name, cost, profit) {
        this.name = name;
        this.cost = cost;
        this.profit = profit;
    }
    get getPrice(){
        return "«" + this.name + "» costs " + (this.cost / (100 - this.profit) * 100);
    }
}
const book = new Book('Atlas Shrugged','14','30');
console.log(book.getPrice);

/* inherit Book, but have 1 more parameter in the constructor: taxRate */
/* overrride the getPrice method to add taxRate to the calculation. 
for example: cost 14, profit 30% , tax 24% => expected price is 30.43  */

class TaxableBook extends Book {
    constructor (name, cost, profit, tax) {
        super(name, cost, profit);
        this.taxRate = tax;
    }
    get getPrice() {
        return "«" + this.name + "» costs "+ (this.cost / (100 - this.profit - this.taxRate) * 100) + " after taxes.";
    }
}
const taxedbook = new TaxableBook('Fight Club','14','30','24');
console.log(taxedbook.getPrice);

/* Question 2: Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.*/
/* expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)'] */

function generateNewFolderName(existingFolders) {
    const newfolder = "New Folder";
    if (existingFolders.length == 0) {
      existingFolders.push(newfolder);
    } 
    else {
      existingFolders.push(newfolder + " (" + (existingFolders.length) + ")");
    }
}

let folder = [];
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
console.log(folder);