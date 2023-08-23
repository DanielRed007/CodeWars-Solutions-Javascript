
class ArrayRotation{
    constructor(data = []){
        this.data = data;
    }

    simpleRotation1(){
        const list = this.data;
        console.log(list.slice(0,-1));
        return;
    }
}

const testRotation = new ArrayRotation([1,2,3,4,5,6,7]);

testRotation.simpleRotation1();

