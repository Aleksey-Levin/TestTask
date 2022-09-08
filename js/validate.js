export function validate(value){
    let floatValue = parseFloat(value)
    if (floatValue > 100 || floatValue < 0 || !(/^(0|[1-9]\d*)$/.test(value))) return false;
    return true;
}