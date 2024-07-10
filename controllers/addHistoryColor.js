import { GroupColor } from "../models/GroupColor.js";
import setStorage from "../controllers/setLocalStorage.js";

const addHistoryColor = (nameGroup, content) => {
  let newGroupColor = new GroupColor(nameGroup, content);

  setStorage(newGroupColor, "HistoryColor");
};

export default addHistoryColor;
