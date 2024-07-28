//Question 45
function car(manufacturer, modelName) {
    var carSpecs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        carSpecs[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modelName: modelName };
    carSpecs.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(car("Toyota", 'Fortuner', ['color', 'white']));
console.log(car('LandRover', 'Defender', ['color', 'skin']));
console.log(car('suzuki', 'Mehran', ['color', 'white']));
