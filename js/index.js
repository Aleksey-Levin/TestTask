import changeCircle from "./changeCircle.js";

let input = document.querySelector('.switch-input-text');
let circularProgress = document.querySelector('.circular-progress');

let switchInputFirst = document.querySelector('.switch-input-first');
let switchInputSecond = document.querySelector('.switch-input-second');

let switchFirst = document.querySelector('.first-switch');
let switchSecond = document.querySelector('.second-switch');

input.value = 0;
let progressCurrentValue = 0;

input.addEventListener('keypress', InputKeyEnter);
switchInputFirst.addEventListener('click', EditAnimation);
switchInputSecond.addEventListener('click', HideElement);


function InputKeyEnter(e){
    if (e.charCode === 13){
        let newProgressValue = parseInt(input.value);
        input.readOnly = true;
        e.preventDefault();

        changeCircle(progressCurrentValue, newProgressValue);
        input.value = '';

        new Promise(resolve => setTimeout(resolve, 300)).then(()=>{
            input.readOnly = false;
            progressCurrentValue = newProgressValue;
        })
    }
}

function EditAnimation(){
    if(switchInputFirst.checked){
        circularProgress.classList.add('animate-spinner');
    }
    else{
        circularProgress.classList.remove('animate-spinner');
    }
}
function HideElement(){
    if(switchInputSecond.checked){
        circularProgress.classList.add('hide');
    }
    else{
        circularProgress.classList.remove('hide');
    }
}