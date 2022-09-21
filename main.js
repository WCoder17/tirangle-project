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
  document.getElementById("opAB").innerHTML = dist(aX, aY, bX, bY);
  document.getElementById("opAC").innerHTML = dist(bX, bY, cX, cY);
  document.getElementById("opBC").innerHTML = dist(cX, cY, aX, aY);
  //document.getElementById("opFin").innerHTML = dist();

  function dist(x1, y1, x2, y2) {
    aB = x2 - x1 + y2 - y1;
    bC = x2 - x1 + y2 - y1;
    aC = x2 - x1 + y2 - y1;
    //priM = (aB + aC + bC) / 2;
    //return priM;
  }
}
