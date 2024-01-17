module.exports = app =>{
    // set sequelize settings should be done
    // before the server starts
    app.db.sequelize.sync().then(()=>{
        app.listen(app.get("port"))
    })
    
}