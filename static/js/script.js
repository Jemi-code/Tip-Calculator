let bill = document.getElementById('bill');
let people = document.getElementById('numPep');
let error = document.querySelector(".error");
let pepIcon = document.querySelector(".num-group > span");
let numIcon = document.querySelector(".bill-group > span");
let result = document.querySelector(".resTip > p");
let percent = document.querySelector(".percent");
let disRes = document.querySelectorAll(".result > p");

// console.log(disRes);

// disRes[0].innerHTML = "first";
// disRes[1].innerHTML = "second";

let tipPer = 0;
let perErr = true;
let tipErr = true;
let pepVal = 0;

bill.addEventListener('keydown', () => {
    bill.style.border = "solid 2px hsl(172, 67%, 45%)";
    bill.style.borderLeft = "none";
    numIcon.style.border = "solid 2px hsl(172, 67%, 45%)";
    numIcon.style.borderRight = "none";

    pepVal = Math.abs(people.value);
    if(pepVal == 0){
        error.style.visibility = "visible";
        people.style.border = "solid 1px red";
        people.style.borderLeft = "none";
        pepIcon.style.border = "solid 1px red";
    }
});

people.addEventListener('keyup', () => {
    pepVal = Math.abs(people.value);
    if(pepVal !== 0){
        error.style.visibility = "hidden";
        people.style.border = "none";
        pepIcon.style.border = "none";
        perErr = false;
    } else {
        error.style.visibility = "visible";
        people.style.border = "solid 1px red";
        people.style.borderLeft = "none";
        pepIcon.style.border = "solid 1px red";
        perErr = true;
    }
});

result.addEventListener('click', () =>{
    console.log(`Percent ${tipPer}`);
    let bilVal = Math.abs(bill.value);
    console.log(`Bill amount ${bilVal}`);
    console.log(`People ${pepVal}`);

    let finTip = (bilVal * tipPer);
    let perPerson = (bilVal * tipPer) / pepVal;

    console.log(`Final value of tip for all is ${finTip}`);
    console.log(`Final value of tip per person is ${perPerson}`);

    if(tipPer !== 0){
        tipErr = false;
    }

    console.log(`Is person not specified? ${perErr}`);
    console.log(`Is tip not specified? ${tipErr}`);

    if(perErr || tipErr){
        result.style.backgroundColor = "hsl(186, 14%, 43%)";
        alert("Make sure you have the tip selected");
    }else {
        result.style.backgroundColor = "hsl(172, 67%, 45%)";
        disRes[0].innerHTML = perPerson.toFixed(2);
        disRes[1].innerHTML = finTip.toFixed(2);
    }
});

let getTip = (tip) => {
    let perTip = parseFloat(percent.childNodes[tip].innerHTML)/100;
    return perTip;
}

percent.childNodes[1].addEventListener('click', () => {
    tipPer = getTip(1);
})

percent.childNodes[3].addEventListener('click', () => {
    tipPer = getTip(3);
})

percent.childNodes[5].addEventListener('click', () => {
    tipPer = getTip(5);
})

percent.childNodes[7].addEventListener('click', () => {
    tipPer = getTip(7);
})

percent.childNodes[9].addEventListener('click', () => {
    tipPer = getTip(9);
})

percent.childNodes[11].addEventListener('keyup', () => {
    tipPer = (percent.childNodes[11].value)/100;
})

// console.log(percent.childNodes[12].nodeValue);
