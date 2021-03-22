 // Change code only below this line
var sum = 0;
function addThree(){
    sum = sum+3;
};
function addFive(){
    sum = sum+5;
};
console.log(addThree());
console.log(addFive());
addThree();
addFive();
// Change code only above this line
module.exports = {
    addThree,
    addFive
}