module.exports = (app) => {
  // get skaters model
  const skaters = app.db.models.Skaters;
  console.log("SKATERS");
  console.log(skaters);

  // process data in all ways if specific request is done
  app
    .route("/skaters")
    .all((req, res, next) => {
      // for middleware

      // redirect to next http method
      next();
    })
    .get((req, res) => {
      // get all skaters
      skaters
        .findAll({})
        .then((resp) => {
          //console.log(resp);
          res.json(resp);
        })
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    })
    .post((req, res) => {
      // post new skater
      skaters
        .create(req.body)
        .then((result) => res.json(result))
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    });

  // get specific skater
  app
    .route("/skater/:id")
    .all((req, res, next) => {
      // for middleware
      // use it to ensure no one makes invalid request
      // delete req.body.id;
      next();
    })
    .get((req, res) => {
      // get skater info
      console.log(" TRY TO GET INFO ABOUT SKATER");
      let param = req.params.id.slice(1)
      console.log(param);
      skaters
        .findOne({where: {id: param}})
        .then((result) => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    })
    .put((req, res) => {
      // post edition to skater's info
      const param = req.params.id.slice(1)
      skaters
        .update(req.body, { where: {id: param }})
        .then((result) => res.sendStatus(204))
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    })
    .delete((req, res) => {
      // delete this skater
      const param = req.params.id.slice(1)
      console.log("Params for delete = "+param);
      skaters
        .destroy({ where: {id: param} })
        .then((result) => res.sendStatus(204))
        .catch((err) => {
          res.status(412).json({ msg: err.message });
        });
    });
};
