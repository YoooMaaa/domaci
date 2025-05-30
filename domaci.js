function login(username, password) {
  if (
    username.toLowerCase() === "admin" &&
    password.toLowerCase() === "admin"
  ) {
    return true;
  } else return false;
}

let result = login("AdmIn", "admiN");
console.log(result);

