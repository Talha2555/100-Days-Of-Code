//Question 52
/*  Make a Smartphone Object: Create a simple way to keep track
 of a smartphones details. Include its brand, model, and other 
 key features like how much storage it has, the size of its screen, 
 and how long its battery lasts.  */
type Smartphone = {
  brand: string;
  model: string;
  Specs: {
    storage: string;
    screenSize: string;
    battteryLife: string;
  };
};
let smartphone: Smartphone = {
  brand: "Xiaomi",
  model: "REDmi",
  Specs: {
    storage: "4GB Ram and 64GB Rom",
    screenSize: "6.6Inches",
    battteryLife: "24Hours",
  },
};
console.log(smartphone);
