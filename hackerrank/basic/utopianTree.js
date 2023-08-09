
function utopianTree(n) {
    let height = 0;

    for(let i = 0; i <= n + 1; i++){
        if(i % 2){
            height++;
        }

        if(i % 2 === 0){           
            height = (height * 2)
        }
    }

    return height;
}

console.log(utopianTree(5));