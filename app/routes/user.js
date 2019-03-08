const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);
    



    // params: userId.
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);





    // params: userId.
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
   

    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
   



    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    

    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
  
}

/** Run this command : apidoc -i routes/ -o apidoc/ */
