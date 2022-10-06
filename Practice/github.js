const day = promt("What day is tomorrow?");
if (day === "Sunday") {
    console.log("Monday")
}
else if (day === "monday") {
    console.log("Tuesday")
}
else if (day === "tuesday") {
    console.log("Wednesday")
}
else if (day === "wednesday") {
    console.log("Thursday")
}
else if (day === "thursday") {
    console.log("Friday")
}
else if (day === "friday") {
    console.log("Saturday")
}
else if (day === "saturday") {
    console.log("Sunday")
}
else {
    console.log("Not a Valid Day")
}

function comparison(num1, num2) {
    if (num1 > num2) {
        alert("First number is greater")
    }
    else if (num1 < num2) {
        alert("Second number is greater")
    }
    else if (num1 == num2) {
        alert("We got Twinzies")
    }
    else{
        alert("Are these even numbers?")
    }
}