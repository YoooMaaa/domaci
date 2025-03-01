const names = ["admin", "administrator", "toma"];

let name = prompt("Unesite Vase ime!").toLowerCase();

if (names.includes(name)) {
  alert("Dobrodosao administratore");
} else {
  alert("Nemate pristup sajtu");
}
