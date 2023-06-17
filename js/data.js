function calculateTotal() {
  var breadSelect = document.getElementById("bread");
  var selectedBread = breadSelect.options[breadSelect.selectedIndex].value;
  var discountCheckbox = document.getElementById("discountCheckbox");
  var couponCode = document.getElementById("couponCode").value;
  var totalInput = document.getElementById("total");
  
 
  var total = parseFloat(selectedBread);
  
  if (discountCheckbox.checked) {
    total = 10; 
  

  if (couponCode === "SPECIAL10") {
    total = C5056090; 
  }

  totalInput.value = "R" + total.toFixed(2);
}
}


