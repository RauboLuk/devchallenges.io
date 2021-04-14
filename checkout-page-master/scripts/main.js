const cart = document.querySelector(".cart");
const shipping = cart.querySelector(".cart_shippingCost");
const total = cart.querySelector(".cart_totalCost");
const quantity = cart.querySelectorAll(".cart__itemQuantity");
const decButtons = cart.querySelectorAll('[data-change="dec"]');
const incButtons = cart.querySelectorAll('[data-change="inc"]');

// Calculating total value
const handleClick = (e, i) => {
  e.preventDefault();
  const input = quantity[i];
  const change = e.target.dataset.change === "inc" ? 1 : -1;
  const newValue = Number(input.value) + change;
  input.value = newValue < 0 ? 0 : newValue;
  calculateSum();
};

const calculateSum = () => {
  let sum = Number(shipping.dataset.price);
  quantity.forEach((ele) => (sum += Number(ele.dataset.price) * ele.value));
  total.innerText = "$" + sum.toFixed(2);
};

incButtons.forEach((button, i) =>
  button.addEventListener("click", (e) => handleClick(e, i))
);
decButtons.forEach((button, i) =>
  button.addEventListener("click", (e) => handleClick(e, i))
);
quantity.forEach((button) => button.addEventListener("change", calculateSum));

calculateSum();

// Succes alert if form is valid
const form = document.querySelector("form");
const submitButton = document.querySelector(".form-button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(form.reportValidity()) alert('All required input data has been filled in.');
});
