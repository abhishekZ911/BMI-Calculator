

const getTheWeight = () =>{
    let weight = document.querySelector(".weight-input"); 
    let currentWeight = document.querySelector(".weight-value");
    currentWeight.innerHTML = weight.value + " kgs";
    weight.addEventListener("input", (event) =>{
        currentWeight.innerHTML = event.target.value + " kgs";
    })

}


const getTheAge = () => {

    var age = document.querySelector(".age-input");
    var currentAge = document.querySelector(".age-value");
    currentAge.innerHTML = age.value + " years old";

    age.addEventListener('input', (event) => {
        currentAge.innerHTML = age.value + " years old";
    })
}

const handleSubmit = () =>{
    
    var female = document.getElementById('female');
    var male = document.getElementById('male');
    // if(female && female.value){
    //     console.log(female);
    if(male.checked || female.checked){
        console.log('gender fulfilled');
    }    
    else{
        alert('Please enter the gender !');
        return;
    }

    let age = document.getElementsByClassName('age-value')[0].innerText;
    if(age == '0 years old'){
        alert('Please enter the age');
        return;
    }

    let height = document.getElementsByClassName('height-input-feet')[0];
    if(height.value == 0)
    {
        alert('Please enter the height');
        return;
    }

    let weight = document.getElementsByClassName('weight-value')[0].innerText;
    if(weight == '0.0 kg'){
        alert('Please enter the weight');
        return;
    }
    
    console.log('passed all');
    resultCalculation();
    }


const resultCalculation = () =>{

    let weight = document.getElementsByClassName('weight-input')[0].value;
    let heightFeet = document.getElementsByClassName('height-input-feet')[0].value;
    let heightInch = document.getElementsByClassName('height-input-inch')[0].value;
    height = heightFeet*0.3048 + heightInch*0.0254;
    let bmi;
    bmi = weight/(height*height);
    bmi = bmi.toFixed(2);
    let result = document.getElementsByClassName('result-value')[0];
    result.innerText = "You BMI is : " + bmi;
    var resultType = document.getElementsByClassName('result-type')[0];
    
    if(bmi <18.5){
        resultType.innerText = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        resultType.innerText = "Normal Weight";
    }
    else if(bmi >= 25 && bmi <=29.9){
        resultType.innerText = "Overweight";
    }
    else{
        resultType.innerText = "Obese";
    }

}  

const handleReset = () =>{
    let weight = document.getElementsByClassName('weight-input')[0];
    let weightValue = document.getElementsByClassName('weight-value')[0];
    weightValue.innerText = "0.0 kg"; 
    weight.value = weight.defaultValue;

    let ageValue = document.getElementsByClassName('age-value')[0];
    let age = document.getElementsByClassName('age-input')[0];
    ageValue.innerText = "0 years";
    age.value = age.defaultValue;
    
    let resultValue =document.getElementsByClassName('result-value')[0];
    resultValue.innerText = "Hope the result coincides with your expectation !";
    let resultType = document.getElementsByClassName('result-type')[0];
    resultType.innerText= '';
}
