const user = {
  id: 232,
  name: "israel israeli",
};

// sessionStorage.setItem("userData", JSON.stringify(user));

// console.log(sessionStorage.getItem("userData"));

let numberOfVisits = localStorage.getItem("numberOfVisits") || 0;
numberOfVisits++;
localStorage.setItem("numberOfVisits", numberOfVisits);
console.log(numberOfVisits);

localStorage.setItem("user", JSON.stringify(user));
const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
console.log(userFromLocalStorage.name);
