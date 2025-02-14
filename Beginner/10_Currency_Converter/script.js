
const apiURL = "https://v6.exchangerate-api.com/v6/";
const apiKEY = "5bec05934f417fe53be76d34";

const currencyFrom = document.querySelector('#from-currency');
const currencyTo = document.querySelector('#to-currency');
const amount = document.querySelector('#amount');
const afterConversion = document.querySelector('#after-conversion');
const btn = document.querySelector('#btn');
const toggleButton = document.querySelector('#toggle-mode');
const container = document.querySelector('.container');


btn.addEventListener('click', fetchCurrency);


async function fetchCurrency(){
    const response = await fetch(`${apiURL}/${apiKEY}/pair/${currencyFrom.value}/${currencyTo.value}/${amount.value}`) 
    const data = await response.json()
    console.log(data);
    console.log(data.conversion_rate);
    
    
    afterConversion.innerHTML =`<span id="conversion-rate">1 ${currencyFrom.value} = ${data.conversion_rate.toFixed(3)} ${currencyTo.value}</span>
      <h4 id="convertedAmount">Converted Amount : ${data.conversion_result.toFixed(3)}</h4>`
    
}

// Dark mode toggle functionality
toggleButton.addEventListener('click', () => {
  container.classList.toggle('dark-mode');
  toggleButton.textContent = container.classList.contains('dark-mode') 
      ? 'Switch to Light Mode' 
      : 'Switch to Dark Mode';
});
