module.exports = (sequelize, DataType)=>{
    const titles = sequelize.define("Titles", {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataType.STRING,
            allowNull: false
        }
    })

    return titles;
}