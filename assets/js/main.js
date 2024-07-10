import xuLyTenBien from "../../controllers/xuLyBien.js";
import addHistoryColor from "../../controllers/addHistoryColor.js";
import rederHistory from "../../controllers/renderHistory.js";
import renderCode from "../../controllers/renderCode.js";
import checkValidation from "../../controllers/checkValidation.js";

let nameGroup = document.querySelector("#nameGroup");
let idColor = document.querySelector("#idColor");
let nameColor = document.querySelector("#nameColor");

document.querySelector("#btnRender").onclick = () => {
  let name = nameGroup.value;
  let arrId = idColor.value.length === 0 ? "" : idColor.value.split(",");
  let arrColor = nameColor.value.length === 0 ? "" : nameColor.value.split(",");
  let valid = true;

  valid = checkValidation(name, arrId, arrColor);

  if (!valid) {
    return;
  }

  for (var i = 0; i < arrId.length; i++) {
    arrId[i] = arrId[i].trim();
    arrColor[i] = arrColor[i].trim();
  }

  let data = xuLyTenBien(arrId, arrColor);
  renderCode(data);
  addHistoryColor(name, data);
  rederHistory();
};

document.querySelector("#btnReset").onclick = () => {
  nameGroup.value = "";
  idColor.value = "";
  nameColor.value = "";
  document.querySelector("#showRenderCode").innerHTML = "";
};

rederHistory();
