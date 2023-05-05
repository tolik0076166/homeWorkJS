class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getInfo() {
      console.log(`Ваше ім'я: ${this.name}, Ваш вік: ${this.age}`);
    }
  }
  
  class Car {

    owner = '';
    
    constructor(brand, model, year, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
    }
  
    setOwner(owner) {
      if (owner.age >= 18) {
        this.owner = owner;
      } else {
        console.log('Власник повинен бути старше 18 років');
      }
    }
  
    displayInfo() {
      console.log(`Автомобіль ${this.brand} ${this.model}, рік випуску ${this.year}, номерний знак ${this.licensePlate}`);

      if (this.owner) {
        console.log('Власник:');
        this.owner.getInfo();
      } else {
        console.log('Власнику менше 18 років');
      }
    }
  }
   
const person1 = new Person('Анатолій', 30);
const person2 = new Person('Олена', 25);
const person3 = new Person('Анжеліка', 16);

const car1 = new Car('Tesla', 'Model3', 2021, 'AE5487AA');
const car2 = new Car('Land Rover', 'Discovery', 2018,'AE7835AA');
const car3 = new Car('Audi', 'Q7', 2020, 'AE5697AA');

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3); 

car1.displayInfo(); 
car2.displayInfo(); 
car3.displayInfo(); 

  
  