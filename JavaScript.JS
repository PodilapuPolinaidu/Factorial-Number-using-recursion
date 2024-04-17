function factorial(x){
  if(x == 0){
    return 1;
  }
  else{
    return x * factorial(x-1);
  }
}
const num = parseInt(prompt("Enter a number"));
if(num >= 0){
  let result = factorial(num);
  document.write(`The factorial of ${num} is: ${result}`);

}
else{
  document.write("Enter positive number");
}