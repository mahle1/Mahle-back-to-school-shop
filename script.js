document.addEventListener('DOMContentLoaded', () => {
  const cartCountEl = document.getElementById('cart-count');
  const buttons = document.querySelectorAll('button');

  let cartCount = 0;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartCountEl.textContent = cartCount;

      // Optional: Button click animation
      btn.textContent = " Added!";
      btn.style.backgroundColor = "#388e3c";
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.style.backgroundColor = "#00796b";
        btn.disabled = false;
      }, 1200);
    });
  });
});