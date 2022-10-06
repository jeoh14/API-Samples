function square1(x){
    console.log(x*x)
}

const square2 = x => {
    for (let x=0; x<= 10; x++){
        console.log(x*x)
    }
}

function min(num1, num2) {
    if (num1 > num2) {
        console.log(num2)
    }
    else if (num1 < num2) {
        console.log(num1)
    }
    else if (num1 = num2) {
        console.log(num1)
    }
    else alert('invalid number')
}