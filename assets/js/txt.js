import { kiemTraRong } from "../utils/validation.js";
import { setLocalStorage, getLocalStorage } from "../utils/method.js";

let maMau = document.querySelector("#maMau");
let tenMau = document.querySelector("#tenMau");
let tenNhom = document.querySelector("#tenNhom");

document.querySelector("#btnLayMa").onclick = () => {
  let arrMaMau = maMau.value.split(",");
  let arrTenMau = tenMau.value.split(",");
  let valid = true;

  valid &= kiemTraRong(maMau.value);
  valid &= kiemTraRong(tenMau.value);

  if (!valid) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (arrMaMau.length != arrTenMau.length) {
    alert("Số lượng màu và tên màu phải bằng nhau!");
    return;
  }

  for (var i = 0; i < arrMaMau.length; i++) {
    arrMaMau[i] = arrMaMau[i].trim();
    arrTenMau[i] = arrTenMau[i].trim();
  }

  let content = xuLyTenBien(arrMaMau, arrTenMau);
  let data = { tenNhom: tenNhom.value, content: content };
  setLocalStorage(data, "HistoryColor");
  resetInput();
};

const xuLyTenBien = (arrMaMau, arrTenMau) => {
  let hienThiMaMau = document.querySelector("#hienThiMa");
  let stringHtml = "";
  let stringHtmlColor = "";
  let stringHtmlText = "";
  let stringHtmlBackground = "";

  arrMaMau.forEach((maMau, index) => {
    let nameColor = `$color-${arrTenMau[index]}`;

    stringHtmlColor += `
        <p class="my-0">${nameColor}: ${maMau};</p>
    `;

    stringHtmlText += `
        <p class="my-0">$text-${arrTenMau[index]}: ${nameColor};</p>
    `;

    stringHtmlBackground += `
        <p class="my-0">$bg-${arrTenMau[index]}: ${nameColor};</p>
    `;
  });

  stringHtml = `
    <div>
        <p class="mb-0 mt-3">//Color</p>
        ${stringHtmlColor}

        <p class="mb-0 mt-3">//Text</p>
        ${stringHtmlText}

        <p class="mb-0 mt-3">//Background</p>
        ${stringHtmlBackground}
    </div>
  `;

  hienThiMaMau.innerHTML = stringHtml;
  return stringHtml;
};

window.renderHistory = () => {
  let data = getLocalStorage("HistoryColor");
  console.log(data);
};

const resetInput = () => {
  document.querySelector("#tenNhom").value = "";
  document.querySelector("#maMau").value = "";
  document.querySelector("#tenMau").value = "";
};

renderHistory();
