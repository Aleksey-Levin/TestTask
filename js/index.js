import changeCircle from "./changeCircle.js";
import { validate } from "./validate.js";

let input = document.querySelector('.switch-input-text');
let circularProgress = document.querySelector('.circular-progress');

let switchAnimation = document.querySelector('.switch-input-first');
let switchHide = document.querySelector('.switch-input-second');


let progressCurrentValue = 0;

input.addEventListener('keyup', InputKeyEnter);
switchAnimation.addEventListener('click', EditAnimation);
switchHide.addEventListener('click', HideElement);


let InputKeyEnter = (e) =>{
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

let EditAnimation = () =>{
    if(switchInputFirst.checked){
        circularProgress.classList.add('animate-spinner');
    }
    else{
        circularProgress.classList.remove('animate-spinner');
    }
}
let HideElement = () =>{
    if(switchInputSecond.checked){
        circularProgress.classList.add('hide');
    }
    else{
        circularProgress.classList.remove('hide');
    }
}