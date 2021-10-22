const data1 = new Date('2021', '11','20');
let data2 = new Date('2021', '10','19');

let difference = (data1-data2)/(1000 * 60 * 60 * 24)+1;
console.log(difference)