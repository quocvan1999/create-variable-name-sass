const xuLyTenBien = (arrId, arrColor) => {
  let stringHtml = "";
  let stringHtmlColor = "";
  let stringHtmlText = "";
  let stringHtmlBackground = "";

  arrColor.forEach((color, index) => {
    let nameColor = `$color-${color}`;

    stringHtmlColor += `
        <p class="my-0">${nameColor}: ${arrId[index]};</p>
    `;

    stringHtmlText += `
        <p class="my-0">$text-${color}: ${nameColor};</p>
    `;

    stringHtmlBackground += `
        <p class="my-0">$bg-${color}: ${nameColor};</p>
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

  return stringHtml;
};

export default xuLyTenBien;
