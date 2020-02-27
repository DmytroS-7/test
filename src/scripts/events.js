//ES5
window.valideField = valideField;
window.buttonClick = buttonClick;
window.showTodaysDate = showTodaysDate;
window.overImg = overImg;
window.outImg = outImg;
window.inputOnKeyDown = inputOnKeyDown;
window.onPageLoad = onPageLoad;

function valideField(val) {
  const name = "123";
  if (val == name) {
    const errorValidField = document.getElementById("valid-field");
    errorValidField.style.border = "";
    console.log("Valid!");
  } else {
    const errorValidField = document.getElementById("valid-field");
    errorValidField.style.border = "2px solid red";
    console.log("Not Valid");
  }
}
// valideField();

function buttonClick() {
  console.log("Click!");
}

function showTodaysDate() {
  alert(Date());
}

function overImg() {
  alert("overImg!");
}

function outImg() {
  alert("outImg!");
}

function inputOnKeyDown() {
  console.log("inputOnKeyDown!");
}

function onPageLoad() {
  console.log("onPageLoad!");
}
