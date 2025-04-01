let realEstates = [
  {
    city: "Beograd",
    option: "Garsonjera",
    type: "Stan",
    price: 48000,
    size: 25,
  },
  {
    city: "Novi Sad",
    option: null,
    type: "Kuca",
    price: 120000,
    size: 85,
  },
  {
    city: "Nis",
    option: "Dvosoban",
    type: "Stan",
    price: 65000,
    size: 50,
  },
  {
    city: "Subotica",
    option: "Trosoban",
    type: "Stan",
    price: 75000,
    size: 65,
  },
  {
    city: "Kragujevac",
    option: null,
    type: "Kuca",
    price: 95000,
    size: 100,
  },
  {
    city: "Zrenjanin",
    option: "Jednosoban",
    type: "Stan",
    price: 55000,
    size: 40,
  },
  {
    city: "Pancevo",
    option: "Trosoban",
    type: "Stan",
    price: 80000,
    size: 70,
  },
  {
    city: "Cacak",
    option: null,
    type: "Kuca",
    price: 110000,
    size: 120,
  },
  {
    city: "Sombor",
    option: "Jednosoban",
    type: "Stan",
    price: 50000,
    size: 35,
  },
  {
    city: "Kraljevo",
    option: "Cetvorosoban",
    type: "Stan",
    price: 85000,
    size: 90,
  },
  {
    city: "Uzice",
    option: null,
    type: "Kuca",
    price: 130000,
    size: 150,
  },
  {
    city: "Leskovac",
    option: "Garsonjera",
    type: "Stan",
    price: 40000,
    size: 30,
  },
];

for (let estate of realEstates) {
  let estateDiv = document.createElement("div");

  let estateTitle = document.createElement("p");
  estateTitle.innerHTML = `${estate.type} ${estate.city}`;

  let estateOption = document.createElement("p");
  if (estate.option === null) {
    estateOption.innerHTML = "--";
  } else {
    estateOption.innerHTML = estate.option;
  }

  let estatePrice = document.createElement("p");
  estatePrice = estate.price;

  let estateSize = document.createElement("p");
  estateSize = estate.size;

  estateDiv.append(estateTitle);
  estateDiv.append(estateOption);
  estateDiv.append(estatePrice);
  estateDiv.append(estateSize);

  document.querySelector("#estates").appendChild(estateDiv);
}
