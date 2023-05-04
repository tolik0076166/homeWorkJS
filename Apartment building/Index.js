class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Apartment {
    residents = [];
    
    addResident(person) {
      this.residents.push(person);
    }
  }
  
  class House {
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log('Неможливо додати квартиру. Досягнуто максимальної кількості квартир.');
      }
    }
  }
  
  const person1 = new Person('Анатолій', 'чоловік');
  const person2 = new Person('Олена', "жінка");
  
  const apartment1 = new Apartment(); 
  const apartment2 = new Apartment();

  apartment1.addResident(person1);
  apartment1.addResident(person2);
  
  const house = new House(2);
  house.addApartment(apartment1);
  house.addApartment(apartment2);
  