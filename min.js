
function productHandel(product, isIncrease){
   const productCount = getInputValue(product);
   let productNewCount = productCount;
   if(isIncrease == true){
      productNewCount = productCount + 1;
   }
   if(isIncrease == false && productNewCount > 0){
      productNewCount = productCount - 1;
   }
   document.getElementById(product +'-value').value = productNewCount;
   let productTotal = 0;
   if(product == 'phone'){
      productTotal = productNewCount * 1219;
   }
   if(product == 'case'){
      productTotal = productNewCount * 59;
   }
   document.getElementById(product +'-price').innerText = productTotal;
   calculateSubTotal()
}

function calculateSubTotal(){
   const phoneCount = getInputValue('phone');
   const caseCount = getInputValue('case');

   const totalPrice = phoneCount * 1219 + caseCount *59;
   document.getElementById('subtotal').innerText = totalPrice;

   const totalTax = Math.round(totalPrice * 0.1);
   document.getElementById('tax').innerText = totalTax;

   const totalAmount = totalPrice + totalTax;
   document.getElementById('total').innerText = totalAmount;
}
function getInputValue(product){
   const productInput = document.getElementById(product +'-value');
   const productCount = parseInt(productInput.value);
   return productCount;
}
