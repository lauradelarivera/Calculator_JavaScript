//const list1 = [ NO TAKE IN TO CONSIDERATION
    //100,NO TAKE IN TO CONSIDERATION
    //200,NO TAKE IN TO CONSIDERATION
    //300,NO TAKE IN TO CONSIDERATION
    //400,NO TAKE IN TO CONSIDERATION
    //500,NO TAKE IN TO CONSIDERATION
//];NO TAKE IN TO CONSIDERATION

// var sumList1 = 0; NO TAKE IN TO CONSIDERATION
//     for (var i = 0; i < list1.length; i++){ NO TAKE IN TO CONSIDERATION
//         sumList1 = sumList1 + list1[i]; NO TAKE IN TO CONSIDERATION
//     } NO TAKE IN TO CONSIDERATION

// const averageList1 = sumList1 / list1.length;

// function calculateMean(list) {
    
//     //var sumList = 0; NO TAKE IN TO CONSIDERATION
//         // for (var i = 0; i < list.length; i++){  NO TAKE IN TO CONSIDERATION
//         //     sumList = sumList + list[i];NO TAKE IN TO CONSIDERATION
//         // }NO TAKE IN TO CONSIDERATION
    
//     const sumList = list.reduce(
//         function (acumulateValue = 0, newElement) {
//             return acumulateValue + newElement;

//         }
//     )

//     const averageList = sumList / list.length;

//     return averageList;
// }


function calculateMean (a,b,c){
    return ((a+b+c)/3);
}



function averageT(){
    const inputNumber1 = document.getElementById("inputNumber1");
    const valueNumber1 = parseInt(inputNumber1.value);

    const inputNumber2 = document.getElementById("inputNumber2");
    const valueNumber2 = parseInt(inputNumber2.value);

    const inputNumber3 = document.getElementById("inputNumber3");
    const valueNumber3 = parseInt(inputNumber3.value);

    const averangeF = calculateMean (valueNumber1,valueNumber2,valueNumber3);
    
    const finalAverange = document.getElementById("finalAverange");
    finalAverange.innerText = "The Averange of your numbers is: " + averangeF;

}
