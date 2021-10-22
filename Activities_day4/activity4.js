let pet ={
    name: "Billy",
    tapeOfpet:"Dog",
    colour:"White",
   
    drink(){
        return (`${this.name} is driking.`)
    },

    eat(){
        return(`${this.name} is eating.`)
    }

}
console.log(pet.drink())
console.log(pet.eat())