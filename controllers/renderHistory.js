import getStorage from "./getLocalStorage.js";

const rederHistory = () => {
  let arrHistory = getStorage("HistoryColor");

  if (!arrHistory) {
    arrHistory = [];
  }

  let stringHtml = "";

  arrHistory.forEach((history) => {
    stringHtml += `
      <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">${history.nameGroup}</h5>
        <div>
          ${history.content}
        </div>
      </div>
    </div>
    `;
  });

  document.querySelector("#showHistory").innerHTML = stringHtml;
};

export default rederHistory;
