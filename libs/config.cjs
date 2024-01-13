// set up for sequelize and sqlite

module.exports = {
    database:"figureSkaters",
    username:"",
    password:"",
    params:{
        dialect:"sqlite",
        storage:"figureSkaters.sqlite",
        define:{
            underscore:true
        }
    }

}