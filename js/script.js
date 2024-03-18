// Script for Area & Perimeter 

// Elements
const lengthInput = document.getElementById("LengthInput");
const widthInput = document.getElementById("WidthInput");
const calculateBtn = document.getElementById("CalculateBtn");
const areaResult = document.getElementById("AreaResult");
const perimeterResult = document.getElementById("PerimeterResult");

// Code for calculating area and perimeter
function Calculate() {
  let length = Number(lengthInput.value);
  let width = Number(widthInput.value);

  let area = length * width;
  let perimeter = 2 * ( length + width );

  areaResult.innerHTML = "" + area.toFixed(2) + " m<sup>2</sup>"
  perimeterResult.innerHTML = "" + perimeter.toFixed(2) + " m"
  return
}