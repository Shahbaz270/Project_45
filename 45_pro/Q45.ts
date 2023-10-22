function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): Record<string, any> {
    const carInfo: Record<string, any> = {
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
