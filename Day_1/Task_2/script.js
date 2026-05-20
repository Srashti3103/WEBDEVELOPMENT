const a=Number(prompt("Enter first number "));
const b=Number(prompt("Enter second number"));
const operation=prompt("Enter the operation addition,subtraction,multiplication,division");
if(operation == "addition"){
    console.log(a + b);
}else if(operation=="subtraction"){
    console.log(a - b);
}else if (operation == "division"){
    console.log(a / b);
}else if(operation == "multiplication"){
    console.log(a * b);
}else{
    console.log("more opreration are not available");
}