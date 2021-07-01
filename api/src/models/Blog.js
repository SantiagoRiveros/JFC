const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Blog = sequelize.define("blog", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  });
};
