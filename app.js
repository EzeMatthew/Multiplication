const num1 = Math.floor(Math.random() * 15)
const num2 = Math.floor(Math.random() * 15)
const scoreEl = document.querySelector(".score")

const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
let correctAns = num1 * num2

questionEl.innerText = `What is ${num1} multiply by ${num2}?`


let score = JSON.parse(localStorage.getItem('score'))

if(!score){
    score = 0
}
if(score < 1){
    score = 0
    scoreEl.style.color = 'red'
}

function updateLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}


scoreEl.innerText = `score: ${score}`
formEl.addEventListener('submit', () =>{
   
    const userAns = +inputEl.value;
    // console.log(userAns,typeof userAns);
    if(userAns === correctAns){
        score++
       updateLocalStorage()
    } else{
        score--
        updateLocalStorage()
    }
    if(userAns === ''){
        score = 0
    }

})

