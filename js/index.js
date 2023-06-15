
function calculateTotal() {
   
    const breadPrice = parseFloat(document.getElementById('bread').value);
  
  
    let toppingsTotal = 0;
    const lettuceChecked = document.getElementById('lettuce').checked;
    const tomatoChecked = document.getElementById('tomato').checked;
    const onionChecked = document.getElementById('onion').checked;
    const cheeseChecked = document.getElementById('cheese').checked;
    const BaconChecked = document.getElementById('Bacon').checked;
    const PeppersChecked = document.getElementById('Peppers').checked;
    const PicklesChecked = document.getElementById('Pickles').checked;
    const OlivesChecked = document.getElementById('Olives').checked;
    const AvacodoChecked = document.getElementById('Avacodo').checked;
    const LettuceChecked = document.getElementById('Lettuce').checked;
    const CucumbersChecked = document.getElementById('Cucumbers').checked;
  
  
    if (lettuceChecked) toppingsTotal += 0.5;
    if (tomatoChecked) toppingsTotal += 0.75;
    if (onionChecked) toppingsTotal += 0.5;
    if (cheeseChecked) toppingsTotal += 1;
    if (BaconChecked) toppingsTotal += 5;
    if (PeppersChecked) toppingsTotal += 3;
    if (PicklesChecked) toppingsTotal += 5;
    if (OlivesChecked) toppingsTotal += 6;
    if (AvacodoChecked) toppingsTotal += 8;
    if (LettuceChecked) toppingsTotal += 5;
    if (CucumbersChecked) toppingsTotal += 8;
  
  
  
  
   
    const saucePrice = parseFloat(document.getElementById('sauce').value);
  
   
    const total = breadPrice + toppingsTotal + saucePrice;
  
   
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  
  document.getElementById('SubForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
   
    const total = parseFloat(document.getElementById('total').textContent);
  
   
    alert('Your sub sandwich is ordered! Total: R' + total.toFixed(2));
  
  
    document.getElementById('SubForm').reset();
    document.getElementById('total').textContent = '0.00';
  });
  
  
      
      
  
  