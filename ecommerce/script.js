let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
      </div>
    `;
  });
  document.getElementById('total').innerText = total;
}

document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart').classList.toggle('active');
});
