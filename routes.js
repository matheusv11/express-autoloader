const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathControllers = path.resolve(__dirname, './controllers');

const controllers = fs.readdirSync(pathControllers).map(c => c.replace('.js', ''));

controllers.forEach((controller, index) => {
    const fileController = require(`${pathControllers}\\${controller}`)
    fileController.forEach(config => {
        router[config.method](`/${config.url}`,  ...config.middlewares, config.function);
    })
})

module.exports = router;