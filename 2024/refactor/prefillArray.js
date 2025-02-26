function prefill(n = null, v = null) {
    const toNum = parseInt(n);
  
    if(toNum === 0){
      return [];
    }
  
    if(Number.isFinite(n) && !Number.isInteger(n)){
      throw new TypeError(`${n} is invalid`);
    }
  
    if(n < 0){
      throw new TypeError(`${n} is invalid`);
    }

    if(Number.isInteger(toNum) && v === null){
        return Array(n).fill(undefined);
    }

    if(Number.isInteger(toNum)){
        return Array(n).fill(v);
    } else {
        throw new TypeError(`${n} is invalid`);
    }

}

prefill(3,1); // [1,1,1]);
prefill(2,'abc'); // ['abc','abc']);
prefill('1',1); // [1]);
prefill(3, prefill(2,'2d')); // [['2d','2d'],['2d','2d'],['2d','2d']]);
prefill('xyz', 1); // "TypeError"
prefill(); // 