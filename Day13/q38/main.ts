//question 38
//Write a function called describe_city() that accepts the name of a city and its country.

function describe_city(cityName: string, countryName: string = "Pakistan") {
  //The function should print a simple sentence, such as Karachi is in Pakistan.
  console.log(`${cityName} is in ${countryName}`);
}
// Call your function for three different cities,
//  at least one of which is not in the default country.
describe_city("Hyderabad");
describe_city("Karachi");
describe_city("Mumbai", "India");
