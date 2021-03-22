// Only change code below this line
function radnomRangeNumber (minNumber, maxNumber) {
    return Math.floor(Math.random()* (maxNumber - minNumber + 1)) + minNumber;
}
radnomRangeNumber();
console.log(radnomRangeNumber());
// Only change code above this line
module.exports = radnomRangeNumber;