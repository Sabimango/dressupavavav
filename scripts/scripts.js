var glassPos = [0, 100, 200, 300];
var currentActive = 0;

function nextGlasses() {
    
        for (var i = 1; i <= 3; i++) {
          document.getElementById("glasses" + i).style.visibility = "hidden";
        }
        if (currentActive != 0) {
        document.getElementById("glasses" + currentActive).style.visibility =
          "visible";
      }

  console.log(glassPos[currentActive]);
  document.getElementById("glasses-variants").style.left =
    -glassPos[currentActive] + "%";
  console.log(currentActive, glassPos.length);
  if (currentActive == glassPos.length - 1) {
    currentActive = 0;
  } else {
    currentActive++;
    document.getElementById("glasses-variants").style.transition = "all 2000ms";
  }

 
}

nextGlasses();
