let firstnum=Number(prompt("Enter first number"));
let secondnum=Number(prompt("Enter second number"));
if(firstnum > secondnum){
    console.log("Largest number is "+ firstnum);
}else if(secondnum>firstnum){
    console.log("Largest number is "+ secondnum);
}else{
    console.log("Both numbers are equal");
}