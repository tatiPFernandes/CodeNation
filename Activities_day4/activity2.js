let count  = 0;

const takeOrder = (topping, crust) =>{
    console.log(`Pizza with topping: ${topping} and crust is ${crust}`);
    count ++;
}
takeOrder("Bacon", "Stuffed Crust");