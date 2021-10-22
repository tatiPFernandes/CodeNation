let person = {
    name: "Tati",
    age: 34,
    songs: [
    "Tati",
    "Africa",
    "Drown"
    ],
    sayHi(){
      return (`Hello my name is ${this.name}`);
    }   
    }

console.log(person.sayHi())