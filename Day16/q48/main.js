var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 48
// Arrays of laptop prices as Example
var prices1 = [1200, 1300, 1000];
var prices2 = [1300, 1400, 1200];
//Combining the array using spread operators and sorting the result
var combinePrices = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return a - b; });
//log the combine and sorted array
console.log("combine the sorted price:", combinePrices);
