function change() {
  const colorInput = document.getElementById("color-input");
  const textInput = document.getElementById("text-input");
  const paragraph = document.getElementById("content");

  paragraph.style.backgroundColor = colorInput.value;
  paragraph.innerText = textInput.value;
}
