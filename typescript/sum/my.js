const inventory = [
  { type: "machine", value: 5000 },

  { type: "machine", value: 650 },

  { type: "duck", value: 10 },

  { type: "furniture", value: 1200 },

  { type: "machine", value: 77 },
];

function sum(inventory) {
  let total = 0;
  inventory.forEach((element) => {
    total += element.value;
  });
  return total;
}
console.log(sum(inventory));
