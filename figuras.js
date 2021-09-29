
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


