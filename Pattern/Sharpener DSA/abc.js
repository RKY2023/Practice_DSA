// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// Create a Set
const letters = new Set(["a","b","c"]);
letters.add("d");
letters.add("e");
// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}

// Does the Set contain "d"?
answer = letters.has("d");

// List all entries
letters.forEach (function(value) {
  text += value;
})
// List all Values
for (const entry of letters.values()) {
  text += entry;
}

for (const entry of letters.values()) {
  text += entry;
}