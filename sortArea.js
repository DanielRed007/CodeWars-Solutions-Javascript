function sortByArea(array = []) {
    
    const list = array.slice();

    const calculateArea = (value) => {
        let total = [];

        if(Array.isArray(value)){
            total = value[0] * value[1];
        } else {
            total = (3.14159) * Math.pow(value,2);
        }

        return total;
    };

    return list.sort((a,b) => {
        if(calculateArea(a) < calculateArea(b)){
            return -1;
        }

        if(calculateArea(b) < calculateArea(a)){
            return 1;
        }
    });
}

sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]); //, [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ] );
sortByArea([ [2, 5], 6 ]); // , [ [2, 5], 6 ]);