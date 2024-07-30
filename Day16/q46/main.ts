//Question 46
// Enhanced Laptop Object: Construct an object for
//  a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.
let myLaptop = {
  make: "Dell",
  model: "XPS 13",
  year: 2022,
  describe: function () {
    console.log(
      `I bought a laptop of ${this.make} of model ${this.model} in ${this.year}`
    );
  },
};
myLaptop.describe();
