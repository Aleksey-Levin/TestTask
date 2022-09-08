import changeCircle from "./changeCircle.js";
import {validate} from "./validate.js";

let input = document.querySelector('.switch-input-text');
let circularProgress = document.querySelector('.circular-progress');

let switchInputFirst = document.querySelector('.switch-input-first');
let switchInputSecond = document.querySelector('.switch-input-second');

let switchFirst = document.querySelector('.first-switch');
let switchSecond = document.querySelector('.second-switch');

let progressCurrentValue = 0;

input.addEventListener('keyup', InputKeyEnter);
switchInputFirst.addEventListener('click', EditAnimation);
switchInputSecond.addEventListener('click', HideElement);


function InputKeyEnter(e){
    if (e.key === "Enter" && validate(input.value)){
        let newProgressValue = parseInt(input.value);
        input.readOnly = true;
        e.preventDefault();

        changeCircle(progressCurrentValue, newProgressValue);
        input.value = '';

        new Promise(resolve => setTimeout(resolve, 300)).then(()=>{
            input.readOnly = false;
            progressCurrentValue = newProgressValue;
        })
        return;
    }

    if (!validate(input.value)) {
        input.classList.add('error-input');
        return;
    }

    if (input.classList.contains('error-input')) {
        input.classList.remove('error-input');
        return;
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