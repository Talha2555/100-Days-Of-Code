//Question 39
// Write a function called city_country() that takes
// the name of a city and its country. 
function city_country(city, country) {
    return "\"".concat(city, "\",\"").concat(country, "\""); //like this "Lahore, Pakistan"
}
//Call your function with at least three city-country pairs, 
// and print the value that’s returned.
console.log(city_country("karachi", 'Pakistan'));
console.log(city_country('KaulaLampur', "Malaysia"));
console.log(city_country('Baku', 'Azerbaijan'));
