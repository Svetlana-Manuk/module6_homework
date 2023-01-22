function PrimeNum(num){
    if ((num < 2) || (num > 1000)) {
        return "данные не верны";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
let randomNum = Math.floor(Math.random() * 1200);
let p = PrimeNum(randomNum);
console.log("Number " + randomNum + ' is Prime = ' + p);