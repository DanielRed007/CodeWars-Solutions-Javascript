function deepCount(list){
    let count = 0;

    for(let i = 0; i < list.length; i++){
        const val = list[i];

        if(!Array.isArray(val)){
            count++;
        } else {
            count += deepCount(val)
        }
    }

    return count;
}

// la definicion de chiqui
function iterarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Si el elemento es otro array, llamar recursivamente a la función
        iterarArray(arr[i]);
      } else {
        // Si el elemento no es otro array, hacer lo que necesites con ese elemento
        console.log(arr[i]);
      }
    }
  }

deepCount(["x", "y", ["z"]]); // 4
deepCount([1, 2, [3, 4, [5]]]); // 7
deepCount([[[[[[[[[]]]]]]]]]); // 8
