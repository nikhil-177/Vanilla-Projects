
const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


const recipeName = document.querySelector('#Recipe-name');
const searchRecipe = document.querySelector('#searchRecipe');

searchRecipe.addEventListener('click', () => {

    async function withRecipeName(){
        const response = await fetch(`${apiURL}${recipeName.value.trim()}`)
        const data = await response.json()
        console.log(data);

        console.log(data.meals[0].strMeal);
        
        
    const resultContainer = document.querySelector('.resultContainer')

    resultContainer.innerHTML = ` <img src="${data.meals[0].strMealThumb}" alt="">
        <div class="content">
            <h1>${data.meals[0].strMeal}</h1>
            <p>${data.meals[0].strInstructions}</p>
        </div>
        <div class="ingredients">
            <span>carrot : 150g</span>
          
        </div>`

    }
    withRecipeName()

})





