//Notes from explanation of object oriented programing thread
// https://read.readwise.io/later/read/01j0svz5ky7wp9z3tkqqc20jb7 
//An Object can be defined using 2 things:- Properties: that describe an object- Behaviour: the functions that an object can perform

//For example, a Car is an object that has properties such as color & model, and behaviours such as accelerating, braking & turning.But, how do we create these objects❓
//🤔This is where we need to understand Classes!

//A class is like a blueprint for creating objects.
//It defines a set of properties & functions (methods) that will be common to all objects created from the class. In Python it looks like the following:
//class Car:
//def 	init	(self, make, model, year): # all cars will have * properties self.make = make self.model = model self.year = year
//# all cars honk ! (behaviour) An Object of def honk(self):	C!ms
//print("Honk honk!") >
//# Let's create a my_car object my_car = Car("Tesla", "Model S", 2022)
//print (my car. make) # Output: Tesla print(my_car.year) # Output: 2022 my_car.honk()	# Output: Honk honk!

class Car{
    constructor(make, model, year){
        console.log(this);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    upgrade(){
        this.year++;
    }
}
const myCar = new Car('Tesla', 'Model S', 2022); //this is how you create an object from a class so I created myCar object from Car class it is a Tesla Model S 2022
console.log(myCar);
//Output: Car { make: 'Tesla', model: 'Model S', year: 2022 }

myCar.upgrade(); //this is how you call the function from a class. I called the upgrade function on myCar object
console.log(myCar);



