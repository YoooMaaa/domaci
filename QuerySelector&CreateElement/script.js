const cars = [
  {
    name: "Tesla Model S",
    price: 79999,
    year: 2023,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-2-672d42e16475f.jpg?crop=0.503xw:0.502xh;0.262xw,0.289xh&resize=980:*",
  },
  {
    name: "BMW M3",
    price: 72000,
    year: 2024,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/2018_BMW_M3_3.0.jpg",
  },
  {
    name: "Audi R8",
    price: 150000,
    year: 2021,
    image:
      "https://www.nacionalnaklasa.com/wp-content/uploads/2022/10/2022audi_r8gtrwd.jpg",
  },
  {
    name: "Ford Mustang",
    price: 55000,
    year: 2020,
    image:
      "https://media.ed.edmunds-media.com/ford/mustang/2025/oem/2025_ford_mustang_coupe_dark-horse_fq_oem_1_1600.jpg",
  },
  {
    name: "Mercedes-Benz AMG GT",
    price: 130000,
    year: 2019,
    image:
      "https://www.motortrend.com/uploads/2022/02/2021-Mercedes-Benz-AMG-GT-Coupe-PVOTY22-50.jpg?w=768&width=768&q=75&format=webp",
  },
  {
    name: "Porsche 911",
    price: 120000,
    year: 2024,
    image:
      "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/992-II/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg/jcr:content/0840_nevada_coupe_u-crane_AKOS0607_edit_V03-sky.jpg",
  },
  {
    name: "Chevrolet Camaro",
    price: 45000,
    year: 2021,
    image: "https://autorepublika.com/wp-content/uploads/2023/10/26-2.jpg",
  },
  {
    name: "Lamborghini Huracán",
    price: 250000,
    year: 2024,
    image:
      "https://www.luxlife.rs/storage/posts/gallery/2023/Nov/284077/lamborghini-huracan-stosc-10-anniversario-5.jpg",
  },
];

console.log(cars);

for (let car of cars) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = car.image;

  let paragraph = document.createElement("p");
  paragraph.textContent = car.name;

  let span = document.createElement("span");
  span.textContent = car.price;
  span.classList = "spanPrice";

  paragraph.appendChild(span);
  div.appendChild(image);
  div.appendChild(paragraph);

  document.querySelector("#main").append(div);

  if (car.year === 2024) {
    let yearSpan = document.createElement("span");
    yearSpan.textContent = "NOVO";
    yearSpan.classList = "year";

    div.appendChild(yearSpan);
  }
}
