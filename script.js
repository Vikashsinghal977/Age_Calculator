const dataForm = document.getElementById("agecalculater")
dataForm.addEventListener("submit",(Event)=>
{
    Event.preventDefault();
    MainFun();
})


// control Function to store date 
function MainFun(){
    // spliting the data in date form
    const today = new Date();
    const DOB = document.getElementById("birthday").value;
    const DOBPart = DOB.split("-");
    const birthYear = DOBPart[0];
    const birthMonth = DOBPart[1]-1;
    const birthDay = DOBPart[2];
    const birthDate = new Date(birthYear,birthMonth, birthDay);
    
    // Calculation
    const ageInMillisec = today-birthDate;
    const ageInSec = Math.floor(ageInMillisec/1000);
    const ageInMin = Math.floor(ageInSec/60);
    const ageInHou = Math.floor(ageInMin/60);
    const ageInday = Math.floor(ageInHou/24);
    const ageInWeek = Math.floor(ageInday/7);
    const ageInMonths = Math.floor(ageInday/30.436875);
    const ageInYear = Math.floor(ageInday/365.5);
    const results = document.getElementById("results");
    const result = document.getElementById("result");
    result.innerHTML=`
    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInYear} years ${ageInMonths % 12} Months ${ageInday % 30}</p>
    </div>`


    console.log(today);
    console.log(birthDate);
    console.log(ageInMillisec);
}