let arr = ["a", "b", 0, 2, 4, 5, null];
function getOddOrEver() {
let sumEven = 0;
let sumOdd = 0;
let sumOther = 0;
for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        sumOther++;
    } else {
        if (arr[i] % 2 === 0) {
            sumEven++;
        } else {
            sumOdd++;
        }
    }
}
console.log("Even:" + sumEven);
console.log("Odd:" + sumOdd);
console.log("Other:" + sumOther);}

getOddOrEver();