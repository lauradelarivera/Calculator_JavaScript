function calculateMean(list) {
    
    const sumList = list.reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;

        }
    )
    const averageList = sumList / list.length;

    return averageList;
}


// const list1 = [
//     100,
//     500,
//     200,
//     5,
//     800,
//     400000000
];

    // list1.sort();
    // console.log(list1);

function getMedian(mo){

    if (isEven(mo.length)){

        const mitadList1 = parseInt(mo.length / 2);
        const mitadList2 = mitadList1 - 1;
        const average1 = parseInt((mitadList1 + mitadList2) /2);
        return mo[average1];

    } else if(!isEven(mo.length)) {

        const mitadList1 = parseInt(mo.length / 2);
        return mo[mitadList1];

    } else {
        console.log(mo.length);
    }
}

function listaOrdenada(listU){

    var liO = listU.sort();
    return liO;

}


function isEven(numbeR){
    
    if (numbeR % 2 ===0) {
        return true;
    }   else {
        return false;
    }
}

// //Medians
// list_richard= [2,3,4,5,2,3,4,56];
// median_richard = getMedian(list_richard);
// console.log(median_richard);



// //Sorting
// ordered_richard = listaOrdenada(list_richard);
// console.log(ordered_richard);


/*
var median; 

if (isEven(list1.length)){
 const element1 = mitad(list1)
 const element2 = list1[mitadList1];

 const meanElement1and2 = calculateMean([
     element1,
     element2
 ]);
 median = meanElement1and2; 

}   else{
    median = list1[mitadList1];

}
*/






