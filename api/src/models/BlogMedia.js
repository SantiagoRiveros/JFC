const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const BlogMedia = sequelize.define("blogMedia", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
