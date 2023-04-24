// Get html elements

var monthOrYear = document.querySelector(".month-year");
var input = document.querySelector("#price-slider");
var viewNum = document.querySelector(".view-number");
var priceDisplay = document.querySelector(".price");
var toggle = document.querySelector("#toggle");
var viewCount;
var price;

// Reset page on reload

window.onload = function () {
  input.value = "3";
  toggle.checked = false;
};

function output() {
  var inputValue = Number(input.value); //get input value from range slider and convert to number
  var checked = toggle.checked;
  switch (inputValue) {
    case 1:
      viewCount = "10k";
      price = "8";
      break;

    case 2:
      viewCount = "50k";
      price = "12";
      break;

    case 3:
      viewCount = "100k";
      price = "16";
      break;

    case 4:
      viewCount = "500k";
      price = "24";
      break;

    case 5:
      viewCount = "1M";
      price = "36";
      break;
  }
  var priceYearly = price * 12;
  var discountedPrice = priceYearly - priceYearly * 0.25; // discount price formula

  // condition to show yearly and monthly prices

  if (checked) {
    viewNum.innerHTML = `${viewCount}`;
    priceDisplay.innerHTML = `$${discountedPrice}.00`;
    monthOrYear.innerHTML = `/ year`;
  } else {
    viewNum.innerHTML = `${viewCount}`;
    priceDisplay.innerHTML = `$${price}.00`;
    monthOrYear.innerHTML = `/ month`;
  }
}

// execute function when slider moves or toggle state changes

input.addEventListener("input", output);
toggle.addEventListener("change", output);
