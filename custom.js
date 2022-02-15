function updateNumber(products,isIncresing, price){
    const productInput = document.getElementById(products + '-number');
    let productNumber = productInput.value;
    if(isIncresing == true){
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const phoneTotal = document.getElementById(products + '-total');
    phoneTotal.innerText = productNumber * price;
    updateBalance ();
}
function getValueInput(productInput){
    const phoneTotal = document.getElementById(productInput + '-number').value;
    return phoneTotal;
}

function updateBalance (){
    const phoneTotal = getValueInput('phone') * 1219;
    const caseTotal = getValueInput('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax =  subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tex-amount').innerText = tax;
    document.getElementById('total').innerText = total;

}
// get phone plus button 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', true, 1219);
});

// get phone minus button 
document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', false, 1219);
});

// get case plus button 
document.getElementById('case-plus').addEventListener('click', function(){
    updateNumber('case', true, 59);
});

// get case minus button 
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', false, 59);
});