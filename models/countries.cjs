module.exports = (sequelize, DataType) => {
  const countries = sequelize.define("Countries", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameEnglish: {
      type: DataType.STRING,
      allowNull: false,
    },
    nameOriginal: {
      type: DataType.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataType.STRING,
    },
  });
};
