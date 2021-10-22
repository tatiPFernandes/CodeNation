let coffeeShop ={

    branch:{
        drink:[
           ["Latte: 2.50"],
            "Tea: £1.50",
            "Juice: £2.00"
        ],

        food: [
            "Hash browns: £1.50",
            "Quiche: £2.50",
            "Croissant: £2.00"
        ],
        drinkOrdered(){
            return(`Your drink order is ${this.drink[0]}`);
        },
        foodOrdered(){
            return(`your food order is ${this.food[1]}`);
        }
    }
}
console.log(coffeeShop.branch.drinkOrdered())
console.log(coffeeShop.branch.foodOrdered())
