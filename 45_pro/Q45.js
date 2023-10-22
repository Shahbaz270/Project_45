"use strict";
function store_car_info(manufacturer, model, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (const [key, value] of options) {
        carInfo[key] = value;
    }
    return carInfo;
}
const car = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
console.log(car);
