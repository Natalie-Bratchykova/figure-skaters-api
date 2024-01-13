// main url
module.exports = app => {
    app.get("/", (req, res)=>{
        res.json({status:"Done"})
    })
}