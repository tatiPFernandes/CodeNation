const pin = 1233;
let balance = 1000;
let amount = 0;
newB = 0;
  

const cashMachine = (amount) => { 
        
if (pin == pin && amount <= balance ){
    newB = balance - amount;
    console.log(`Here you go!, your new balance is ${newB}`);
    }else if(pin !== 1233){
     console.log("Wrong Pin try again");
    }else{
        console.log("Your balance is not enough ")
    }
}
cashMachine(200)


 
