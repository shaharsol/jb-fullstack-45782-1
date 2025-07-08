const CARS_KEY_NAME = "cars";

function addCar(event) {
  event.preventDefault(); // prevent form submission
  const data = collectDataFromForm();
  const newTR = generateTR(data);
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

function generateTR(data) {
  const newTR = `
        <tr >
            <td style="background-color: ${data.color};">${data.name}</td>
            <td>${data.engineVolume}</td>
            <td><img class="car-pic"
                    src="${data.pic}">
            </td>
        </tr>
    `;
  return newTR;
}

function injectTRToDOM(newTR) {
  document.getElementById("car-list").innerHTML += newTR;
}

function loadCarsFromStorage() {
  const carsJSON = localStorage.getItem(CARS_KEY_NAME);
  if (carsJSON) {
    const cars = JSON.parse(carsJSON);
    for (const car of cars) {
      const newTR = generateTR(car);
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

loadCarsFromStorage();
