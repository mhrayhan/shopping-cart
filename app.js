function productNumber(product, price, isIncrease){
    const productNumberInput = document.getElementById(product +'-number');
    let productNumber = parseInt(productNumberInput.value);
    if(isIncrease == true){
        productNumber = productNumber + 1;
    }else if(productNumber > 0){
        productNumber = productNumber - 1;
    }
   productNumberInput.value = productNumber;
   
    //Calculate Product Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //Calculate sub total
    const subTotalField = document.getElementById('sub-total');
    const phoneTotal = document.getElementById('phone-number').value;
    const phoneTotal2 = parseFloat(phoneTotal);
    const caseTotal = document.getElementById('case-number').value;
    const caseTotal2 = parseFloat(caseTotal);
    const subTotal = phoneTotal2 * phonePrice + caseTotal2 * casePrice;
    subTotalField.innerText = subTotal;

    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText =totalPrice;

}
    const phonePrice = 1000;
    const casePrice = 250;

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


