let num = Number(prompt("Enter a number"));
let isprime=true;

if(num<=1){
    isprime=false;
}else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            isprime=false;
            break;
        }
    }
}
if(isprime){
    console.log(num +" Prime");
}else{
    console.log(num + " Not prime");
}
