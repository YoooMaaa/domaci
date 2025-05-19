let cities = [
  "Svi",
  "Beograd",
  "Subotica",
  "Novi Sad",
  "Sarajevo",
  "Podgorica",
  "Zagreb",
  "Split",
  "Rijeka",
  "Dubrovnik",
  "Osijek",
  "Zadar",
  "Pula",
  "Šibenik",
  "Tuzla",
  "Banja Luka",
  "Mostar",
  "Kotor",
  "Cetinje",
  "Nikšić",
  "Skopje",
  "Ohrid",
  "Bitola",
  "Priština",
  "Peć",
  "Mitrovica",
  "Ljubljana"
];

let types = [
  "Stanovi",
  "Kuće",
  "Poslovni prostori",
  "Placevi",
  "Garaže/parking"
];

let options = [
  "Garsonjera",
  "Jednosoban stan",
  "Jednoiposoban stan",
  "Dvosoban stan",
  "Dvoiposoban stan",
  "Trosoban stan",
  "Troiposoban stan",
  "Četvorosoban",
  "4.5 i više soba"
];

let realEstates = [
  {
      city: "Beograd",
      option: "Garsonjera",
      type: "Stanovi",
      price: 48200,
      size: 25
  },
  {
      city: "Novi Sad",
      option: null,
      type: "Kuće",
      price: 12200,
      size: 85
  },
  {
      city: "Sarajevo",
      option: "Dvosoban stan",
      type: "Stanovi",
      price: 75500,
      size: 60
  },
  {
      city: "Podgorica",
      option: "Trosoban stan",
      type: "Stanovi",
      price: 130000,
      size: 90
  },
  {
      city: "Zagreb",
      option: "Jednosoban stan",
      type: "Stanovi",
      price: 68000,
      size: 45
  },
  {
      city: "Split",
      option: "Kuće",
      type: "Kuće",
      price: 210000,
      size: 150
  },
  {
      city: "Rijeka",
      option: "Dvoiposoban stan",
      type: "Stanovi",
      price: 95000,
      size: 70
  },
  {
      city: "Dubrovnik",
      option: "Četvorosoban",
      type: "Stanovi",
      price: 280000,
      size: 120
  },
  {
      city: "Osijek",
      option: "Jednoiposoban stan",
      type: "Stanovi",
      price: 55000,
      size: 50
  },
  {
      city: "Zadar",
      option: "Garaže/parking",
      type: "Garaže/parking",
      price: 10000,
      size: 20
  },
  {
      city: "Pula",
      option: "Stanovi",
      type: "Stanovi",
      price: 85000,
      size: 65
  },
  {
      city: "Šibenik",
      option: "Dvosoban stan",
      type: "Stanovi",
      price: 72000,
      size: 55
  }
];


let citiesSelector = document.querySelector("#citiesSelector");
let typesSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");


for (let option of options) {
  let optionElement = document.createElement("option");
  optionElement.innerHTML = option;
  roomSelector.appendChild(optionElement);
}

for (let type of types) {
  let typeOption = document.createElement("option");
  typeOption.innerHTML = type;

  typesSelector.appendChild(typeOption);
}

for (let city of cities) {
  let cityOption = document.createElement("option");
  cityOption.innerHTML = city;

  citiesSelector.appendChild(cityOption);

  let findCity = false;

  for(let estate of realEstates) {
      if(estate.city === city) {
          findCity = true;
          break;
      }
  }

  if(!findCity && city !== "Svi") {
      cityOption.setAttribute("disabled", "true");
  }
}

let currentCity = null;
let currentRoom = null;
let currentType = null;

roomSelector.addEventListener("change", function (event) {
  currentRoom = event.currentTarget.value;
});

typesSelector.addEventListener("change", function (event) {
  currentType = event.currentTarget.value;
});


citiesSelector.addEventListener("change", function (event) {
  currentCity = event.currentTarget.value;

  let allEstates = document.getElementsByClassName("realEstate");

  for(let realEstate of allEstates) {

      let estateCity = realEstate.querySelector(".city").textContent;

      realEstate.classList.remove("hidden");

      if(estateCity !== currentCity && currentCity !== "Svi") {
          realEstate.classList.add("hidden");
      }
  }
});




for (let estate of realEstates) {

  let estateHolder = document.createElement("div");
  estateHolder.classList.add("realEstate");

  let estateTitle = document.createElement("p");
  estateTitle.innerText = estate.city;
  estateTitle.classList.add("city");

  let estateOption = document.createElement("p");
  if(estate.option == null) {
      estateOption.innerText = "-";
  } else {
      estateOption.innerText = estate.option;
  }

  let estatePrice = document.createElement("p");
  estatePrice = estate.price;

  let estateSize = document.createElement("p");
  estateSize = estate.size;

  estateHolder.append(estateTitle);
  estateHolder.append(estateOption);
  estateHolder.append(estatePrice);
  estateHolder.append(estateSize);

  document.querySelector("#estates").appendChild(estateHolder);

}