
//PTP means "Price to Pay"

const originalPrice = 100
const discountP     = 15

function ptp (price, discount){
    return ("S/. " + (price*(100-discount)/100));
}
ptp();

function priceDiscount(){
    const inputPrice    = document.getElementById("inputPrice");
    const valueP        = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("inputDiscount");
    const valueD        = parseInt(inputDiscount.value);
    
    const finalP        = ptp(valueP,valueD);

    const finalPri        = document.getElementById("finalPri");
    finalPri.innerText    = "The total ammount to pay is: "+ finalP; 
}

//Cupones

const realPriceP = 100;
const discountCN = 20;

function ptpC (priceR, discountCC){
    return ("S/. " +(priceR*(100-discountCC)/100));
}



function priceAfterCoupon(){
    const firstPrice = document.getElementById("firstPrice");
    const fpValue    = parseInt(firstPrice.value);
    

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    
    if (cuponValue === "arbol"){
        cuponDesc = 15;
        const precioConDescuento = ptpC(fpValue,cuponDesc);
        const finalCouponPrice = document.getElementById("finalCouponPrice");
        finalCouponPrice.innerText = "The total ammount to pay is: " + precioConDescuento;

    } else if (cuponValue === "casa"){
        cuponDesc = 20;
        const precioConDescuento = ptpC(fpValue,cuponDesc);
        const finalCouponPrice = document.getElementById("finalCouponPrice");
        finalCouponPrice.innerText = "The total ammount to pay is: " + precioConDescuento;
        
    } else if (cuponValue === "vaso"){
        cuponDesc = 25;
        const precioConDescuento = ptpC(fpValue,cuponDesc);
        const finalCouponPrice = document.getElementById("finalCouponPrice");
        finalCouponPrice.innerText = "The total ammount to pay is: " + precioConDescuento;
    } else if (cuponValue === "crema"){
        cuponDesc = 30;
        const precioConDescuento = ptpC(fpValue,cuponDesc);
        const finalCouponPrice = document.getElementById("finalCouponPrice");
        finalCouponPrice.innerText = "The total ammount to pay is: " + precioConDescuento;
    } else {
        alert("Not valid coupon :( ");
    }

    

     


}
              



//var cuponDesc;

//switch(cuponValue){
    //case coupons[0]:
        //cuponDesc = 15;
    //break;

    //case coupons[1]:
        //cuponDesc = 20;
    //break;

    //case coupons[2]:
        //cuponDesc = 25
    //break;

    //case coupons[3]:
        //cuponDesc = 30
    //break;







