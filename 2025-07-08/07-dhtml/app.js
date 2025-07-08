function addFruit() {
  const newFruit = document.getElementById("fruit").value;
  const list = document.getElementById("list");
  console.log(list);

  const newLi = `<li>${newFruit}</li>`;

  list.innerHTML = list.innerHTML + newLi;
  list.style.backgroundColor = "red";

  document.getElementById("fruit").value = "";
    document.getElementById("fruit")

}
