
function zipWith(fn,list1,list2) {
    let zip = [];

    for(let x = 0; x < loopList.length; x++){
        zip.push(fn(list1[x],list2[x]));
    }

    return zip;
}

const plus = (a,b) => a+b; 

zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]); //, [6,6,6,6,6,6]);
zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]); //, [6,6,6,6,6  ]);
zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2  ]); //, [6,6,6,6,6  ]);