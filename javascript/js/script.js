var n = prompt("enter the number");
if (isNaN(10)) {
    console.log("please enter a number");
} else {
    console.log("please enter an even number");

    for (let x = 1; x <= 10; x++) {
        if(x % 2 === 0)
        console.log(x);
    }
}

Divide(15);
function Divide(n){
    for (let x = 1; x <= n; x++) {
        if (x % 3 === 0) {
            console.log("Fizz");
        }else if(x % 5 === 0){
            console.log("Buzz");
        }else if(x % 3 === 0 && x % 5 ===0){
            console.log("FizzBuzz");
        }else{
            console.log(x);
        }
        
    }
}
