function productNumber(product, price, isIncrease){
    const productNumberInput = document.getElementById(product +'-number');
    let productNumber = parseInt(productNumberInput.value);
    if(isIncrease == true){
        productNumber = productNumber + 1;
    }else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
   productNumberInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    console.log(productTotal);

    productTotal.innerText = productNumber * price;

    const subTotal = document.getElementById('sub-total');
    const phoneTotal = document.getElementById('phone-number').value;
    const caseTotal = document.getElementById('case-number').value;
    subTotal.value = phoneTotal + caseTotal;

}

const phonePrice = 90000;
const casePrice = 2500;
//phone number increase
document.getElementById('phone-plus').addEventListener('click', function(){
    productNumber('phone', phonePrice, true);

})
//phone number decrease
document.getElementById('phone-minus').addEventListener('click', function(){
    productNumber('phone',phonePrice, false);

})
//case number increase
document.getElementById('case-plus').addEventListener('click', function(){
    productNumber('case',casePrice, true);

})
//case number decrease
document.getElementById('case-minus').addEventListener('click', function(){
    productNumber('case',casePrice, false);

})


