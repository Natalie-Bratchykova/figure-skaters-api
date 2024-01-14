// create skaters table
module.exports = (sequelize, DataType) => {
  const skaters = sequelize.define("skaters", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nameEnglish:{
        type:DataType.STRING,
        allowNull:false
    },
    nameOriginal:{
        type:DataType.STRING,
        allowNull:false
    },
    activityPeriod:{
        type: DataType.STRING
    },
    currentStatus:{
        type: DataType.STRING
    },
    allCompetitionsNumber:{
        type: DataType.INTEGER
    },
    goldMedals:{
        type: DataType.INTEGER
    },
    silverMedals:{
        type: DataType.INTEGER
    },
    bronzeMedals:{
        type: DataType.INTEGER
    },
    bestShortProgramResult:{
        type: DataType.DECIMAL
    },
    bestFreeProgramResult:{
        type: DataType.DECIMAL
    },
    bestCareerResult:{
        type: DataType.DECIMAL
    },
    nationality:{
        type: DataType.INTEGER
    },
    countryTeam:{
        type: DataType.INTEGER
    }

  });
};
