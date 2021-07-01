const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ProductMedia = sequelize.define("productMedia", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
