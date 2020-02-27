function applyCss() {
  const olsList = document.getElementsByTagName("ol");
  // console.log(olsList[0]);
  olsList.forEach(element => {
    element.style.color = "#b38c6f";
    element.style.fontWeight = "900";
    if (element == olsList[0]) {
      element.style.color = "blue";
    }
  });
}

function setHref() {
  const inputField = document.getElementsByName("inputHrefField")[0];
  const aTag = document.getElementById("link-site");
  let value;
  if (inputField.value) {
    value = inputField.value;
  } else {
    value = "/";
  }
  aTag.href = value;
  aTag.target = "_blank";
  // console.log(inputField.value);
}

function changeTextAndStyle() {
  const textP = document.getElementById("p-text");
  textP.innerHTML = "New text!!!";
  textP.style.fontSize = "1.2em";
  textP.style.backgroundColor = "yellow";
  // const button = document.getElementById("new-text");
  // button.innerHTML = "I am changed";
}

window.changeTextAndStyle = changeTextAndStyle;
window.setHref = setHref;
window.applyCss = applyCss;
