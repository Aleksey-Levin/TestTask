import InvalidCircleValueException from "./Exceptions/InvalidCircleValue.js";

export default function changeCircle(currentValue, newValue) {
    let circularProgress = document.querySelector('.circular-progress');
    if (newValue > 100 || newValue < 0) { throw new InvalidCircleValueException(newValue); }

    let value = currentValue;

    let progress = setInterval(() => {
        if (value == newValue - 1 || value == newValue + 1 || value == newValue) { clearInterval(progress);}

        if (value < newValue) {value++; console.log("UP");}
        if (value > newValue) value--;

        circularProgress.style.background = `conic-gradient(#0058f0 ${value * 3.6}deg, #eef2f5 0deg)`
    }, 2);
}