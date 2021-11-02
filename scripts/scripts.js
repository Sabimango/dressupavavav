var glass1 = document.getElementById("glasses1");
var glass2 = document.getElementById("glasses2");
var glass3 = document.getElementById("glasses3");
var glassPos = [100, 200, 300];

function nextGlasses() {
  glassPos[2] = glassPos[1];
  glassPos[1] = glassPos[0];
  glassPos[0] -= 100;

  if (glassPos[0] > 100) glassPos[0] = 300;

  for (var i = 0; i <= 2; i++) {
    document.getElementById("glasses" + (i + 1)).style.left = glassPos[i] + "%";
  }
}
