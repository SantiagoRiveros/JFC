const server = require("express").Router();
const { Blog, BlogMedia } = require("../db.js");

//trae todas las entradas del blog con sus respectivas img
server.get("/", (req, res, next) => {
  Blog.findAndCountAll({ include: BlogMedia })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para los detalles de una entrada del blog
server.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findByPk(id)
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para subir una foto de una entrada del blog
server.post("/media", (req, res, next) => {
  const blogId = req.body.blogId;
  const url = req.body.url;
  BlogMedia.create({ blogId: blogId, url: url })
    .then((data) => res.send(data))
    .catch(next);
});

//ruta para editar una entrada del blog
server.put("/", (req, res, next) => {
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
server.delete("/", (req, res, next) => {
  const id = req.body.id;
  Blog.findByPk(id)
    .then((data) => {
      data.destroy().then((data) => res.send(data));
    })
    .catch(next);
});
