
function pageCount(numberOfPages, toPage) {
    let frontFlip = 0;
    let backFlip = 0;

    const book = Array.from({ length: numberOfPages }, (_, i) => i + 1);
    book.unshift("*");

    if(book.length % 2){
        book.push("*");
    }

    for(let i = 0; i < book.length; i += 2){
        if(toPage === 1 || toPage === 0) break;

        if(i > 0){
            frontFlip++;
            if((book[i] === toPage) || book[i + 1] === toPage){
                break;
            }
        }

    }

    book.reverse();

    for(let i = 0; i < book.length; i += 2){

        if((book[i] === toPage) || book[i + 1] === toPage){
            break;
        } else {
            backFlip++;
        }

    }

    return Math.min(frontFlip,backFlip);
}

console.log(pageCount(6,2)); // 1
console.log(pageCount(5,4)); // 0
console.log(pageCount(5,3)); // 1
console.log(pageCount(5,1)); // 0