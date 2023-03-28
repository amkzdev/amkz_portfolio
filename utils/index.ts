
const createClass = (className: Array<string>) => {

    var finalClassName = ''
    className.forEach((element, index) => {
        finalClassName += ' ' + element;

    });
    finalClassName += ' '
    return finalClassName
}
const convertToPersianNumber = (number: number) => (new Number(number)).toLocaleString('fa-ir')



export { createClass, convertToPersianNumber }