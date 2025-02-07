
// pop-up part 

const contain = document.querySelector('.container');
const popup = document.querySelector('.pop-up')
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');


contain.style.display = "none";

btn1.addEventListener('click',() => {
    contain.style.display = "block";
    popup.style.display = "none";
})

btn2.addEventListener('click',() => {
    initiated.value = 1;
    contain.style.display = "block";
    popup.style.display = "none";
})



// counter program 

const initiated = document.querySelector('#value-initiated')
const h1 = document.getElementById('displayer');
let count = 0;
console.log(initiated);
console.log(typeof initiated);

function incrementing(){
    count += Number(initiated.value);
    h1.innerText = count;
}

function reset(){
    count = 0;
    h1.innerText = count;
}

function decrementing(){
    count -= Number(initiated.value);
    h1.innerText = count;
}


