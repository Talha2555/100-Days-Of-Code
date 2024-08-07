//        Question 61
/* Making Enums for Vehicles: Lets create categories
for vehicles like cars, trucks, and motorcycles using enums,
 and show one example.*/
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["cars"] = 0] = "cars";
    Vehicles[Vehicles["motorcycles"] = 1] = "motorcycles";
    Vehicles[Vehicles["trucks"] = 2] = "trucks";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.cars);
