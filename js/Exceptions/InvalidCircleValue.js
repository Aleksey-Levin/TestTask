export default function InvalidCircleValueException(value) {
    this.message = value > 100 ? "This value over 100" : "This value is negative";
}