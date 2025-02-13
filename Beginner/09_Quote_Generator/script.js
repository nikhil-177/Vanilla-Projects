
const btn = document.querySelector('#btn')
const content = document.querySelector('.quote p')
const author = document.querySelector('.quote span')
const apiURL = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "Y1/wvhfeZr9uahgHmEn/wA==lkkweeU6hAPNw9Ru";


btn.addEventListener('click',fetchQuote)
async function fetchQuote(){
    const response = await fetch(apiURL,{
        method : "GET",
        headers : {
            "X-Api-Key" : apiKey
        }
    })
    
    let data =  await response.json()
    console.log(data);
    content.innerHTML = data[0].quote;
    author.innerHTML = `- ${data[0].author}`;
}

