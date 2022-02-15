const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// const controllers = path.resolve(__dirname, './controllers');
const pathControllers = path.resolve(__dirname, './controllers');

const controllers = fs.readdirSync(pathControllers);

controllers.forEach((controller, index) => {
    const fileController = require(`${pathControllers}\\${controller}`)
    fileController.forEach(config => {
        router[config.method](`/${config.url}`, config.function);
    })
})

module.exports = router;

//  FALTA MIDDLEWARES, METODOS 

// PEGAR METODO PELO NOME, PEGAR POR OBJETO, PEGAR USANDO CLASSE, PEGAR USANDO HOOKS