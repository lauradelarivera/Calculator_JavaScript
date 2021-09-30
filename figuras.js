
//Squares

//console.group("Square") 

    //const sideSquare = 5;
    //console.log("Side of the Square is: " 
    //+ sideSquare + "cm");

    //const perimeterSquare = sideSquare * 4;
    //console.log("Perimeter of the Square is: " + perimeterSquare + "cm");

    //const squareAerea = sideSquare * sideSquare;
    //console.log("Square Aerea is: " + squareAerea + "cm²");

//console.groupEnd();


//Triangles

//console.group("Triangle")

    //const sideTriangle1  = 6;
    //const sideTriangle2  = 6;
    //const baseTriangle   = 8;
    //const heightTriangle = 7.5;

    //console.log("Sides of Triangle are: "
    //+ sideTriangle1 + "cm, "
    //+ sideTriangle2 + "cm, "
    //+ baseTriangle + "cm"
    //);

    //console.log("The Heigh of Triangle is: " + heightTriangle + "cm");

    //const perimeterTriangle = sideTriangle2 + sideTriangle2 + baseTriangle;
    //console.log(
        //"Perimeter of the Triangle is: " 
        //+ perimeterTriangle + 
        //"cm"
    //);

    //const triangleAerea = ((baseTriangle * heightTriangle) / 2);
    //console.log("Triangle Aerea is: " + triangleAerea + "cm²");

//console.groupEnd();


//Circles

//console.group("Circles")

    //const radioCircle   = 5;
    //console.log("The Radio of Circle is: " + radioCircle + "cm")

    //const diametreCrcle = radioCircle * 2;
    //console.log("Diametre of Circle is: " + diametreCrcle + "cm");

    //const piCircle = Math.PI.toFixed(3);
    //console.log("Pi is: " + piCircle);

    //const perimeterCircle = (diametreCrcle * piCircle).toFixed(3);
    //console.log("The Perimeter of Circle is: " + perimeterCircle + "cm");


    //const circleAerea = ((radioCircle* radioCircle) * piCircle).toFixed(3);
    //console.log("The Aerea of Circle is: " + circleAerea + "cm²");

//console.groupEnd()

//Calculando con funciones:

//Square!

const sideSquare = 5;

function perimeterSquare(side) { 
    return side * 4 + "cm";
}
perimeterSquare();


function squareAerea(side) {
    return side * side + "cm²";
}
squareAerea();


//Triangle

const sideTriangle1  = 6;
const sideTriangle2  = 6;
const baseTriangle   = 8;
const heightTriangle = 7.5;

function perimeterTriangle(sideT1, sideT2, baseT){
    return sideT1 + sideT2 + baseT + "cm";
}
perimeterTriangle();

function triangleAerea(baseT,heightT){
    return (baseT*heightT)/2 + "cm²";
}
triangleAerea();

//Isosceles Triangle

function isoscelesH(sideT1, sideT2, baseT){
    if (sideT1 != sideT2) {
        console.error("The sides are not equal, this is not an Isosceles Triangle")
    }
    return (Math.sqrt((sideT1 * sideT2) - ((baseT * baseT)/4)))
}
isoscelesH();

// Circle

const radioCircle   = 5;

function diameterCircle (radio){
    return radioCircle * 2 + "cm";
}
diameterCircle();

function circleAerea(radioC) {
    return (Math.PI.toFixed(3))*(radioC * radioC) + "cm²"
}
circleAerea();


//Working with HTML

//Square

function calculatePerimeterCuadrado(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}

function calculateAereaCuadrado(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    
    const aerea = squareAerea(value);
    alert(aerea);
}


//Triangle

function calculatePerimeterTriangle(){

    const inputS1 = document.getElementById("InputTriangleS1");
    const valueS1 = parseInt(inputS1.value);

    const inputS2 = document.getElementById("InputTriangleS2");
    const valueS2   = parseInt(inputS2.value);

    const inputB3 = document.getElementById("InputTriangleB3");
    const valueB3 = parseInt(inputB3.value);
    
    const perimeterT = perimeterTriangle(valueS1,valueS2, valueB3);
    alert(perimeterT);
}


function calculateAereaTriangle(){

    const inputB32 = document.getElementById("InputTriangleB3");
    const valueB32 = parseInt(inputB32.value);

    const inputH4 = document.getElementById("InputTriangleH4");
    const valueH4 = parseInt(inputH4.value);
    
    const aereaT = triangleAerea(valueB32, valueH4);
    alert(aereaT);
}


//Circle

function calculatePerimeterCircle(){
    const inputC = document.getElementById("InputCircle");
    const valueC = inputC.value;

    const perimeterC = diameterCircle(valueC);
    alert(perimeterC);
}

function calculateAereaCircle(){
    const inputC = document.getElementById("InputCircle");
    const valueC = inputC.value;
    
    const aereaC = circleAerea(valueC);
    alert(aereaC);

}


//Isosceles Triangle

function calculateHeightIso() {
    const inputIsoA = document.getElementById("InputIsoscelesA");
    const valueA    = parseInt(inputIsoA.value);

    const inputIsoB =  document.getElementById("InputIsoscelesB");
    const valueB    =  parseInt(inputIsoB.value);

    const inputBase =  document.getElementById("InputIsoscelesBase");
    const valueBase = parseInt(inputBase.value);

    const heightIs  = isoscelesH(valueA, valueB, valueBase);
    
    if     
        (valueA != valueB) {
        alert("The sides are not equal, this is not an Isosceles Triangle");
        }   
    else {
            (alert(heightIs));
        };            
}