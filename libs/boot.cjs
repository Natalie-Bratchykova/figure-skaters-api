module.exports = app =>{
    // set sequelize settings should be done
    // before the server starts
    app.db.sync().then(()=>{
        app.listen(app.get("port"))
    })
    
}