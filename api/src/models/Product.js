const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    titulo: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    metraje: {
      type: DataTypes.INTEGER,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    recamaras: {
      type: DataTypes.INTEGER,
    },
    tipo: {
      type: DataTypes.ENUM(
        "alquiler",
        "compra",
        "alquiler con opcion compra",
        "financiamiento directo"
      ),
      allowNull: false,
    },
  });
};
