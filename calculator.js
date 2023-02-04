let count = 0;

const colorChange = () =>{
var wholeTab=document.getElementsByClassName('submit-button');

count += 1;
if(count%2 == 1)
wholeTab[0].style.backgroundColor = 'red';
else
wholeTab[0].style.backgroundColor = 'black';
}

const getTheWeight = () =>{
    let weight = document.querySelector(".weight-input"); 
    let currentWeight = document.querySelector(".weight-value");
    currentWeight.innerHTML = weight.value + " kgs";
    weight.addEventListener("input", (event) =>{
        currentWeight.innerHTML = event.target.value + " kgs";
    })

}
// const getTheWeight = () =>{
//     var currentWeight = document.querySelector(".weight-value");
//     var weight = document.querySelector(".weight-input").value; 
//     currentWeight.innerText = weight;
// }

const getTheAge = () => {
    var age = document.querySelector(".age-input");
    var currentAge = document.querySelector(".age-value");
    currentAge.innerHTML = age.value + " years old";

    age.addEventListener('input', (event) => {
        currentAge.innerHTML = age.value + " years old";
    })
}

// const getTheAge = () =>{
//     var currentAge = document.querySelector(".age-value");
//     var age = document.querySelector(".age-input").value;
//     currentAge.innerText = age + " years old";
// }