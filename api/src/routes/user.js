const server = require("express").Router();
const { User, Blog, BlogMedia, Product, ProductMedia } = require("../db.js");

server.post("/", (req, res, next) => {
  const body = req.body;
  User.create(body)
    .then((data) => res.send(data))
    .catch(next);
});

//trae todas las entradas del producto con sus respectivas img
server.get("/product", (req, res, next) => {
  Product.findAndCountAll({ include: ProductMedia })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para los detalles de un producto
server.get("/product/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => res.send(data))
    .catch(next);
});

server.post("/product", (req, res, next) => {
  var url = req.body.url;
  const titulo = req.body.titulo;
  const precio = req.body.precio;
  const descripcion = req.body.descripcion;
  const ubicacion = req.body.ubicacion;
  const recamaras = req.body.recamaras;
  const tipo = req.body.tipo;
  Product.create({
    titulo: titulo,
    precio: precio,
    descripcion: descripcion,
    ubicacion: ubicacion,
    remacaras: recamaras,
    tipo: tipo,
  })
    .then((data) => {
      if (url.length) {
        for (var i = 0; i < url.length; i++) {
          url[i] = { url: url[i], productId: data.id };
          ProductMedia.create(url[i]);
        }
        res.send(data);
      } else {
        res.send(data);
      }
    })
    .catch(next);
});

//ruta para subir una foto de un producto
server.post("/product/media", (req, res, next) => {
  const prodId = req.body.prodId;
  const url = req.body.url;
  ProductMedia.create({ productId: prodId, url: url })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para editar un producto
server.put("/product/", (req, res, next) => {
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
server.delete("/product", (req, res, next) => {
  const id = req.body.id;
  Product.findByPk(id)
    .then((data) => {
      data.destroy().then((data) => res.send(data));
    })
    .catch(next);
});

//trae todas las entradas del blog con sus respectivas img
server.get("/blog", (req, res, next) => {
  Blog.findAndCountAll({ include: BlogMedia })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para los detalles de una entrada del blog
server.get("/blog/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findByPk(id)
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para subir una foto de una entrada del blog
server.post("/blog/media", (req, res, next) => {
  const blogId = req.body.blogId;
  const url = req.body.url;
  BlogMedia.create({ blogId: blogId, url: url })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para editar una entrada del blog
server.put("/blog/", (req, res, next) => {
  const body = req.body;
  Blog.findByPk(body.id)
    .then((data) => {
      data
        .update(body)
        .then((data) => res.send(data))
        .catch(next);
    })
    .catch(next);
});

//ruta para eliminar una entrada del blog
server.delete("/blog/", (req, res, next) => {
  const id = req.body.id;
  Blog.findByPk(id)
    .then((data) => {
      data.destroy().then((data) => res.send(data));
    })
    .catch(next);
});

module.exports = server;
