// function updateCase(prodect,amount,itstrue){
//     const caseInput = document.getElementById(prodect+'-number');
//     const caseText = caseInput.value;
//     let caseNumber = parseFloat(caseText);
 
//     if(itstrue == true){
//         caseNumber = caseNumber + 1;
//     }
//      else if(caseNumber > 0){
//         caseNumber = caseNumber - 1;
//     }
//     caseInput.value = caseNumber;
//     const caseAmount =document.getElementById(prodect+'-case');
//     caseAmount.innerText = caseNumber * amount;
  
// }
// document.getElementById('case-phone').addEventListener('click', function(){
//     updateCase('phone', 1219, true)
// })
// document.getElementById('phone-minius').addEventListener('click', function(){
//     updateCase('phone', 1219, false)
// })

// document.getElementById('case-plus').addEventListener('click', function(){
//     updateCase('total', 59, true)
// } )
// document.getElementById('case-minius').addEventListener('click', function(){
//    updateCase('total', 59, false)
  
// } )


function getProdect(prodect, amount, itsTrue){
    const casePlus = document.getElementById(prodect+ '-number');
    const casePlusText = casePlus.value;
    let newCase = parseFloat(casePlusText);
    if(itsTrue == true){
        newCase =  newCase + 1;
    }
    else if( newCase > 0){
        newCase =  newCase - 1;
    }
    casePlus.value = newCase;
   const prodectTotal = document.getElementById( prodect+'-case');
   prodectTotal.innerText = newCase * amount;

   calculateTotal()
   
   
}
function getProdectTotalAmount(prodect){
   const prodectInput = document.getElementById(prodect +'-number');
   const prodectInputText = parseFloat(prodectInput.value);
   return prodectInputText;
}
function calculateTotal(){
    const phoneTotal = getProdectTotalAmount('phone') * 1219;
    const caseTotal = getProdectTotalAmount('total') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxTotal = subTotal / 5;
    const totalAmount = subTotal + taxTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('amount-total').innerText = totalAmount;

}
document.getElementById('case-phone').addEventListener('click', function(){
    getProdect('phone', 1219, true)
})
document.getElementById('phone-minius').addEventListener('click', function(){
    getProdect('phone', 1219, false)
})

document.getElementById('case-plus').addEventListener('click', function(){
    getProdect('total', 59, true)
} )
document.getElementById('case-minius').addEventListener('click', function(){
    getProdect('total', 59, false)
} )




