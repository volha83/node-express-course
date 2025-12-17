const express = require("express");
const { products } = require("./data");
const app = express();

const peopleRouter = require("./routes/people");

const logger = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

// app.get("/api/v1/people", (req, res) => {
//   res.json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   if (!req.body.name) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please provide a name" });
//   }
//   people.push({ id: people.length + 1, name: req.body.name });
//   return res.status(201).json({
//     success: true,
//     name: req.body.name,
//   });
// });

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
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
