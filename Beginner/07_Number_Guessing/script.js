
const input = document.getElementById('guess')
const btn = document.getElementById('btn')
const pg = document.getElementById('player-guess')
const cg = document.getElementById('computer-guess')
const output = document.querySelector('.output')
const h4 = document.querySelector('.output h4')


let guess = Math.floor((Math.random() * (50 - 10 + 1) + 10));
console.log(guess);

btn.addEventListener('click', () => {
    pg.innerHTML = `player : ${input.value}`;
    if(input.value == guess){
        cg.innerHTML = `computer : ${guess}`;
        h4.style.display = 'none';
        createH1()
    }
    else{
        if(input.value > guess){
           h4.innerHTML = 'Guess lower';
        }
        else if(input.value < guess){
           h4.innerHTML = 'Guess Higher'
        }
    }
})

function createH1(){
    const h1 = document.createElement('h1');
    const emoji = document.createElement('img');
    h1.innerHTML = 'YOU WIN';
    h1.style.color = '#7CFC00';
 
     
    emoji.src = 'gif/giphy.gif'
    output.appendChild(h1);
    output.appendChild(emoji);
}

