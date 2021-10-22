let num = 1001;

let polinNum = num.toString().split("").reverse("").join("");
if( num == polinNum){
    console.log("It's a Polindrome!")
}else{
    console.log("It's not a Polindrome!")
}
console.log(polinNum)