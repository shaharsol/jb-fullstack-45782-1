const CARS_KEY_NAME = "cars";

function addCar(event) {
  event.preventDefault(); // prevent form submission
  const data = collectDataFromForm();
  const carsJSON = localStorage.getItem(CARS_KEY_NAME);
  const carId = carsJSON ? JSON.parse(carsJSON).length : 0;
  const newTR = generateTR(data, carId);
  injectTRToDOM(newTR);
  saveCarToLocalStorage(data);
  clearForm();
}

function collectDataFromForm() {
  const name = document.getElementById("car-name").value;
  const engineVolume = document.getElementById("engine-volume").value;
  const color = document.getElementById("car-color").value;
  const pic = document.getElementById("car-pic").value;

  return {
    name,
    engineVolume,
    color,
    pic,
  };
}

function generateTR(data, id) {
  // deconstruction
  const { color, name, engineVolume, pic } = data;

  const newTR = `
        <tr >
            <td style="background-color: ${color};">${name}</td>
            <td>${engineVolume}</td>
            <td><img class="car-pic"
                    src="${pic}">
            </td>
            <td><button onclick="deleteCar(${id})">delete</button></td>
        </tr>
    `;
  return newTR;
}

function injectTRToDOM(newTR) {
  document.getElementById("car-list").innerHTML += newTR;
}

function loadCarsFromStorage() {
  document.getElementById("car-list").innerHTML = "";
  const carsJSON = localStorage.getItem(CARS_KEY_NAME);
  if (carsJSON) {
    const cars = JSON.parse(carsJSON);
    let i = 0;
    for (const car of cars) {
      const newTR = generateTR(car, i);
      i++;
      injectTRToDOM(newTR);
    }
  }
}

function saveCarToLocalStorage(car) {
  const carsJSON = localStorage.getItem(CARS_KEY_NAME) || "[]";
  const cars = JSON.parse(carsJSON);
  cars.push(car);
  localStorage.setItem(CARS_KEY_NAME, JSON.stringify(cars));
}

function clearForm() {
  document.getElementById("car-form").reset();
}

function deleteCar(id) {
  const carsJSON = localStorage.getItem(CARS_KEY_NAME);
  const cars = JSON.parse(carsJSON);
  cars.splice(id, 1);
  localStorage.setItem(CARS_KEY_NAME, JSON.stringify(cars));
  loadCarsFromStorage();
}

loadCarsFromStorage();
