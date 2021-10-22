let randomNum = Math.floor(Math.random()* 31);

console.log(randomNum);

for(i = 0;i < 5; i++){
    
        if(randomNum % 7 == 0){
            console.log(`${randomNum} is divisible by 7`)
        }else{
            console.log(`${randomNum} is not divisible by 7`)
        }
    }



//function ticketPrice(age){
//    if(age <= 18){
//    console.log("£7")
//}else if(age > 18, age < 60){
//    console.log("£10")
//    }else if(age > 60){
//     console.log("£7");
//    }
//}
//ticketPrice(20);
      
   // function favColour(color){
   //     console.log(`my favorite color is ${color}`);
   // }
   // favColour("blue")
    

