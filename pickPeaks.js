function pickPeaks(numList){
    const data = { pos:[],peaks:[] };

    for(let i = 0; i < numList.length; i++){
        const prevVal = numList[i - 1];
        const val = numList[i];
        const nextVal = numList[i + 1];

        if(val > prevVal && val > nextVal){
            data.peaks.push(val);
            data.pos.push(i);
        }

        if(val > prevVal && val === nextVal){
            data.peaks.push(val);
            data.pos.push(i);
        }

        if((val === nextVal && i === numList.length - 2)){
            data.peaks.pop();
            data.pos.pop();
        }

        if((val === prevVal && val < nextVal && data.peaks.some(peak => peak === val))){
            data.peaks.pop();
            data.pos.pop();
        }
    }

    console.log(data);
    return data;
}

// pickPeaks([1,2,3,6,4,1,2,3,2,1]) // {pos:[3,7], peaks:[6,3]});
// pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) // {pos:[3,7], peaks:[6,3]});
// pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]) // {pos:[3,7,10], peaks:[6,3,2]});
// pickPeaks([2,1,3,1,2,2,2,2,1]) // {pos:[2,4], peaks:[3,2]});
// pickPeaks([2,1,3,1,2,2,2,2]) // {pos:[2], peaks:[3]});
pickPeaks([2,1,3,2,2,2,2,5,6]) // {pos:[2], peaks:[3]});
// pickPeaks([2,1,3,2,2,2,2,1]) // {pos:[2], peaks:[3]});
pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]) // {pos:[2,7,14,20], peaks:[5,6,5,5]});
// pickPeaks([]) // {pos:[],peaks:[]});
// pickPeaks([1,1,1,1]) // {pos:[],peaks:[]});