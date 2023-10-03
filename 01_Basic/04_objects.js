let car={
    name : "Alto",
    color : "white",
    model : "K10",
    carDetail : function(){
        return "Car Name "+ this.name +" Model is "+ this.model;
    }
}

// console.log("Car is "+ car.name);
// console.log("Car color is "+ car["color"]);
console.log(car.carDetail());