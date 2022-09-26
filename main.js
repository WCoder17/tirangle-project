// Triangle Perimeter Assignment Start Code

// Button
document.getElementById("calculateABC").addEventListener("click", btnClic);

function btnClic() {
  // Get Inputs for Triangle
  let aX = +document.getElementById("vertxA").value;
  let bX = +document.getElementById("vertxB").value;
  let cX = +document.getElementById("vertxC").value;
  let aY = +document.getElementById("vertyA").value;
  let bY = +document.getElementById("vertyB").value;
  let cY = +document.getElementById("vertyC").value;

  // Calculate the triangle
  //let aB = document.getElementById("opAB").innerHTML = dist(aX, aY, bX, bY);
  //let bC = document.getElementById("opBC").innerHTML = dist(bX, bY, cX, cY);
  //let aC = document.getElementById("opAC").innerHTML = dist(cX, cY, aX, aY);
  let AB = dist(aX, aY, bX, bY);
  let AC = dist(aX, aY, cX, cY);
  let BC = dist(bX, bY, cX, cY);
  let perimeter = AB + AC + BC;

  function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
}
