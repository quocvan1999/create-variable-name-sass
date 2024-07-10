export function setLocalStorage(data, nameData) {
  localStorage.setItem(nameData, JSON.stringify(data));
}

export function getLocalStorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}
