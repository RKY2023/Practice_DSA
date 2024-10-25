// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("spples", 500);
fruits.set("bananas", 300);
fruits.set("spples", 1500);
fruits.set("oranges", 200);
console.log(fruits);
for (let [key, val] of fruits){
  console.log(key, val)
  if(val === 2){
      return key;
  }
}
let indx = [];
console.log(indx.length === 0)