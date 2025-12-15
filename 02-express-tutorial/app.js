const express = require("express");
const { products } = require("./data");
const app = express();

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(rec.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "Product was not found!" });
  }
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxPrice } = req.query;
  let filProducts = [...products];

  if (search) {
    filProducts = filProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice);
    filProducts = filProducts.filter((product) => product.price < max);
  }

  if (limit) {
    const limitNumber = parseInt(limit);
    filProducts = filProducts.slice(0, limitNumber);
  }

  res.json(filProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Not found!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express Tutorial on port ${PORT}...`);
});
