/*jshint esversion: 6 */

function setQuantity(list, nbr, qty) {
  for (let i = 0; i < list.length; i++) {
    let val = qty[i] * parseFloat(nbr.innerText);
    list[i].innerText = val.toString();
  }
}

function initQuantity(qtyOne, qtyList) {
  for (let i = 0; i < qtyList.length; i++) {
    qtyOne.push(parseFloat(qtyList[i].innerText));
  }
}

const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
let nbrPeople = document.querySelector("#people");
const quantityList = document.querySelectorAll(".qty");
const quantityForOne = [];

initQuantity(quantityForOne, quantityList);
setQuantity(quantityList, nbrPeople, quantityForOne);

btnMinus.addEventListener("click", function () {
  let val = parseFloat(nbrPeople.innerText);
  val--;
  if (val < 1) {
    val++;
  }
  nbrPeople.innerText = val.toString();
  setQuantity(quantityList, nbrPeople, quantityForOne);
});

btnPlus.addEventListener("click", function () {
  let val = parseInt(nbrPeople.innerText);
  val++;
  if (val > 9) {
    val--;
  }
  nbrPeople.innerText = val.toString();
  setQuantity(quantityList, nbrPeople, quantityForOne);
});
