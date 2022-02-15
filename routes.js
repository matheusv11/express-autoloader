const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// const controllers = path.resolve(__dirname, './controllers');
const pathControllers = path.resolve(__dirname, './controllers');

const controllers = fs.readdirSync(pathControllers);

controllers.forEach((controller, index) => {
    const fileController = require(`${pathControllers}\\${controller}`)
    router.get(`/get${index}`, fileController.get)
    // console.log(fileController)
})
// const userController = require('./controllers/userController');
// router.get('/', userController.get)


module.exports = router;