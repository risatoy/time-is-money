const express = require('express');
// const passport = require('../middlewares/authentication');
// const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
	router.get('/', this.show);

    return router;
  },
  index(req, res) {
  	res.render('servicecheck')
  },
  show(req, res) {
  	models.Service.findOne({
  		where:{
  			username: req.params.username,
  		}
  	}).then((user) => {
  		models.Service.findOne({
  			where: {
  				UserId: user.id,
  			}
  		}).then((service) =>{
  			models.RequestedService.findOne({
  				where: {
  					ServiceId: service.id,
  				}
  			}).then((requested_service) => {
  				res.render(Service.service_name)
  			});
  		});
  	});
  },
};

module.exports = Controller.registerRouter();
