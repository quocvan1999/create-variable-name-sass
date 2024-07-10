import { setLocalStorage } from "../assets/utils/method.js";
import getLocalStorage from "../controllers/getLocalStorage.js";

let historyColor = [];

const setStorage = (data, nameData) => {
  historyColor = getLocalStorage(nameData);
  if (!Array.isArray(historyColor)) {
    historyColor = [];
  }
  historyColor.push(data);
  setLocalStorage(historyColor, nameData);
};

export default setStorage;
