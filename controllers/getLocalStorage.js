import { getLocalStorage } from "../assets/utils/method.js";

const getStorage = (nameData) => {
  const data = getLocalStorage(nameData);
  return data;
};

export default getStorage;
