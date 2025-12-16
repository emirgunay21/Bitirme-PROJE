 document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ app.js çalıştı");

  document.body.addEventListener("click", (e) => {
    const button = e.target.closest("button[data-product-id]");
    if (!button) return;

    const productId = button.getAttribute("data-product-id");
    console.log("🛒 Tıklandı! productId =", productId);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === productId);
    if (existing) existing.qty += 1;
    else cart.push({ id: productId, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("✅ Sepet güncel:", cart);
  });
});