// Triangle Perimeter Assignment Start Code

// Button
document.getElementById("calculateABC").addEventListener("click", btnClic);

function btnClic() {
  // Get Inputs for Triangle
  let vertXA = +document.getElementById("vertxA").value;
  let vertXB = +document.getElementById("vertxB").value;
  let vertXC = +document.getElementById("vertxC").value;
  let vertYA = +document.getElementById("vertyA").value;
  let vertYB = +document.getElementById("vertyB").value;
  let vertYC = +document.getElementById("vertyC").value;

  // Calculate the triangle
  document.getElementById("opAB").innerHTML = btnClic(vertXA, vertYA);
  document.getElementById("opAB").innerHTML = btnClic(vertXB, vertYB);
  document.getElementById("opAB").innerHTML = btnClic(vertXC, vertYC);

  function calcTri(verttX, verttY) {
  }
}
