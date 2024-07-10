import { kiemTraRong } from "../assets/utils/validation.js";

const checkValidation = (name, arrId, arrColor) => {
  let valid = true;

  valid &= kiemTraRong(name);
  valid &= kiemTraRong(arrId);
  valid &= kiemTraRong(arrColor);

  if (!valid) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (arrId.length != arrColor.length) {
    alert("Số lượng màu và tên màu phải bằng nhau!");
    return;
  }

  return valid;
};

export default checkValidation;
