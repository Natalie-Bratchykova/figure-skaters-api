const Sequelize = require("sequelize")
const config = require("./libs/config.cjs")

// to make sure that db initialized only once the Singleton pattern is used here

let sequelize = null;

module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }

  return sequelize;
};
