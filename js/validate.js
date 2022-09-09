export function validate(value){
    let regular = /^(0|[1-9]\d*)$/;
    let floatValue = parseFloat(value)
    if (floatValue > 100 || floatValue < 0 || !(regular.test(value))) return false;
    return true;
}