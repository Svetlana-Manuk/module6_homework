function getNum(a,b) {
    let i = setInterval(function () {
        console.log(a++);
        if (a > b) clearInterval(i);
    }, 1000)
}

getNum(5, 15);