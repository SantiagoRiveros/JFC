const server = require("express").Router();
const { Product, ProductMedia } = require("../db.js");

//trae todas las entradas del producto con sus respectivas img
server.get("/", (req, res, next) => {
  Product.findAndCountAll({ include: ProductMedia })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para los detalles de un producto
server.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para subir una foto de un producto
server.post("/media", (req, res, next) => {
  const prodId = req.body.prodId;
  const url = req.body.url;
  ProductMedia.create({ productId: prodId, url: url })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para editar un producto
server.put("/", (req, res, next) => {
  const body = req.body;
  Product.findByPk(body.id)
    .then((data) => {
      data
        .update(body)
        .then((data) => res.send(data))
        .catch(next);
    })
    .catch(next);
});

//ruta para eliminar un producto
server.delete("/", (req, res, next) => {
  const id = req.body.id;
  Product.findByPk(id)
    .then((data) => {
      data.destroy().then((data) => res.send(data));
    })
    .catch(next);
});
