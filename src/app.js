import express from "express";
import path from "path";
import ProductManager from "./ProductManager.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const productManager = new ProductManager(
  path.resolve(process.cwd(), "public", "products.json")
);

app.get("/productos", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const limit = req.query.limit;
    let limitedProducts;
    if (limit) {
      limitedProducts = products.slice(0, limit);
    }
    res.send(limitedProducts || products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

  app.get("/productos/:id", async (req, res) => {
    const id= req.params.id;
    const products = await productManager.getProductById(id);
    res.send({products})
  });


  app.listen(8080, () => {
    console.log("Servidor arriba en puerto 8080");
  });

