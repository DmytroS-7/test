//------------------Манипуляция DOM---------------
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
//---------------------------------------------------------
function listenElem() {
  const addNodeBtn = document.getElementById("addBtn");
  const removeNodeBtn = document.getElementById("deleteBtn");
  addNodeBtn.addEventListener("click", () => {
    addNodeToUl();
  });
  removeNodeBtn.addEventListener("click", () => {
    removeNodeFromUl();
  });
}

function addNodeToUl() {
  const ulElem = document.getElementsByTagName("ul")[0];
  const inputElem = document.getElementById("forLi");
  const newLi = document.createElement("li"); //создаем новый элемент li
  // newLi.style.backgroundColor = "yellow";
  const text = document.createTextNode(inputElem.value);
  if (inputElem.value) {
    ulElem.appendChild(newLi); //добавляем новый li в ul
    newLi.appendChild(text);
    inputElem.value = "";
  }

  //-----
  // const beforeText = document.createTextNode("[important]");
  // const firstLi = ulElem.getElementsByTagName("li")[0];
  // ulElem.insertBefore(beforeText, firstLi);
}

function removeNodeFromUl() {
  const ulElem = document.getElementsByTagName("ul")[0];
  const listOfLi = ulElem.getElementsByTagName("li");
  const indexLastLi = listOfLi.length - 1;
  if (indexLastLi >= 0) {
    listOfLi[indexLastLi].remove();
    // ulElem.removeChild(listOfLi[indexLastLi]);
  }
}
//---------------------------------------------------------
function findElem() {
  const elemBtnSwitch = document.getElementById("btn-switch");
  elemBtnSwitch.addEventListener("click", () => {
    addRemoveClass();
  });
}

function addRemoveClass() {
  const elem = document.getElementById("id-test-element");
  elem.classList.toggle("test-element-2"); //добавить класс если его нет иначе удалить
}

findElem();
listenElem();

window.removeNodeFromUl = removeNodeFromUl;
window.addNodeToUl = addNodeToUl;
window.listenElem = listenElem;
window.addRemoveClass = addRemoveClass;
window.findElem = findElem;
window.changeTextAndStyle = changeTextAndStyle;
window.setHref = setHref;
window.applyCss = applyCss;
