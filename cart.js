// Initialize a cart with some items already in it
let cart = [
  {item: "Shirt", price: 20, quantity: 2},
  {item: "Pants", price: 30, quantity: 1},
  {item: "Shoes", price: 40, quantity: 3}
];

// Add item to cart
function addToCart(item, price, quantity) {
  let cartItem = {
    item: item,
    price: price,
    quantity: quantity
  };
  cart.push(cartItem);
  updateCart();
}

// Update the cart display
function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    let itemTotal = cartItem.price * cartItem.quantity;
    total += itemTotal;
    cartItems.innerHTML += "<tr>" +
      "<td>" + cartItem.item + "</td>" +
      "<td>$" + cartItem.price + "</td>" +
      "<td>" + cartItem.quantity + "</td>" +
      "<td>$" + itemTotal + "</td>" +
      "<td><button onclick='removeFromCart(" + i + ")'>Remove</button></td>" +
      "</tr>";
  }
  document.getElementById("total").innerHTML = "Total: $" + total;
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear the entire cart
document.getElementById("clear-cart").addEventListener("click", function() {
  cart = [];
  updateCart();
});

// Display the cart on page load
updateCart();
