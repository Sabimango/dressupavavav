let currentActive = 0;
const glassPos = [0, 100, 200, 300];
const resultBox = document.getElementById("results");
const makeGlasses = [
  {
    imgURL: ["images/0glass1.png", "images/0glass2.png", "images/0glass3.png"],
    charaURL: "images/0frog.png",
    answer: "glasses2",
  },
  {
    imgURL: ["placeholder"],
  },
];

function displayGlasses() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("glasses" + i).style.background = `url(${
      makeGlasses[0].imgURL[i - 1]
    })`;
  }

  document.getElementById(
    "character"
  ).style.background = `url(${makeGlasses[0].charaURL})`;
}

function nextGlasses() {
  for (let i = 1; i <= 3; i++) {
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
    
  }
}

displayGlasses();
nextGlasses();

function checkAnswer() {
  console.log("current'active", currentActive);

  if (currentActive === 3) {
    resultBox.innerHTML = "Correct Answer";
  } else {
    resultBox.innerHTML = "Wrong Answer";
  }
}
