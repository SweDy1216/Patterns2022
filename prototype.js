const car = {
  noOfWheels: 4,
  start() {
    return 'started';
  },
  stop() {
    return 'stopped';
  },
};



const myCar = Object.create(car, { owner: { value: 'John' } });

console.log("");
console.log("Prototype pattern demo:");
console.log(myCar.__proto__ === car); 