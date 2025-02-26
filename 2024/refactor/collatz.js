
// work delayed
function collatz(int){

    let sequence = [];
    let coll = 0;
    let subInt = int;

    if(subInt === 1) return "1";

    while(subInt >= 1){

        if(subInt % 2 === 0){
            coll = subInt / 2;
        } else {
            coll = (3 * subInt) + 1;
        }

        if(subInt === 1){
            sequence.push(subInt);
            break;
        } else {
            sequence.push(subInt,coll);
        }

        subInt = coll / 2;     
    }
    console.log(sequence);
    return sequence.join("->");
}

// test 2

collatz(1); // "1"
collatz(2); // "2->1"
collatz(3); // "3->10->5->16->8->4->2->1"
collatz(4); // "4->2->1"