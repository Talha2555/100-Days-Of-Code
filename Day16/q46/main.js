//Question 16
// Enhanced Laptop Object: Construct an object for
//  a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.
var myLaptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2022,
    describe: function () {
        console.log("I bought a laptop of ".concat(this.make, " of model ").concat(this.model, " in ").concat(this.year));
    },
};
myLaptop.describe();
