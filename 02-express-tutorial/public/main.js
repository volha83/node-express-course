const button = document.getElementById("load-products");
const productsDiv = document.getElementById("products");

button.addEventListener("click", async () => {
  const res = await fetch("/api/v1/products");
  const data = await res.json();

  productsDiv.innerHTML = data.map(
    (p) => `<p>${p.id}: ${p.name} - ${p.price} </p>`
  );
});
