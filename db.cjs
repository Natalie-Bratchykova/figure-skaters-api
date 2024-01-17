
const Sequelize = require("sequelize")
// as we will take data from files in "models" directory we should import fs module
const fs = require("fs");
const path = require("path")

// to make sure that db initialized only once the Singleton pattern is used here

let db = null;

module.exports = app => {
  if (!db) {
    const config = app.libs.config;
   const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    db = {
      sequelize,
      Sequelize,
      models:{}
    }

    const dir = path.join(__dirname, "models")

    fs.readdirSync(dir).forEach(file =>{
      let modelDir = path.join(dir, file)
      // modelDir = modelDir.split('\.')
      // modelDir = modelDir[0]
      console.log("Path = " + modelDir);

      // const model = sequelize.import(modelDir)
      // solution because import is not a function
      const model = require(modelDir)(sequelize, Sequelize.DataTypes)
      //const model = sequelize.import(modelDir);
      console.log(model);

     //db.models[model.name] = model;
    })

    //associate tables
    Object.keys(db.models).forEach(key=>{
      db.models[key].associate(db.models)
    })
  }

  return db;
};
