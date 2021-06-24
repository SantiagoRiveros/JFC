const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,

      get() {
        return () => this.getDataValue("password");
      },
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue("salt");
      },
    },
  });
};
