"use strict";

let cart = {};

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

let btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];
  btn.addEventListener("click", add);
}

function add(self) {
  let price = Number(self.target.dataset.price);
  let title = self.target.dataset.title;
  let id = self.target.dataset.id;

  if (id in cart) {
    cart[id].qty++;
    cart[id].total = cart[id].qty * cart[id].price;
  } else {
    let qty = 1;
    let total = price;
    let cartItem = {
      title: title,
      price: price,
      qty: qty,
      total: total,
    };
    cart[id] = cartItem;
  }

  console.log(cart);

  localStorage.setItem("cart", JSON.stringify(cart));
}
