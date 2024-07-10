export function kiemTraRong(value) {
  if (typeof value !== "object") {
    if (value.trim() === "") {
      return false;
    }
  }
  return true;
}
