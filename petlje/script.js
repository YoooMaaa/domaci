let cars = [
    "Audi A4",
    "BMW 3 Series",
    "Ford Mustang",
    "Alfa Romeo Giulia",
    "Toyota Corolla",
    "Honda Civic",
    "Mercedes-Benz C-Class",
    "Aston Martin DB11",
    "Chevrolet Camaro",
    "Volkswagen Golf",
    "Porsche 911",
    "Mazda MX-5",
    "Tesla Model S",
    "Jaguar F-Type",
    "Nissan 370Z",
    "Lexus RX",
    "Subaru Impreza",
    "Kia Stinger",
    "Dodge Charger",
    "Ferrari 488 GTB"
  ];

  
  for (let i = 0; i < cars.length; i++) {
    if (cars[i][0].toLocaleLowerCase() !== "a") {
        console.log(cars[i]);
    }
    
  }