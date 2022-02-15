const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pathControllers = path.resolve(__dirname, './controllers');
const pathMiddlewares = path.resolve(__dirname, './middlewares')

const controllers = fs.readdirSync(pathControllers).map(c => c.replace('.js', ''));
const middlewares = fs.readdirSync(pathMiddlewares).map(c => c.replace('.js', ''));

const allMiddlewares = middlewares.map(mid => {
    // TRANSFORMAR O MID EM CHAVE
    return {
        key: mid,
        middleware: require(`${pathMiddlewares}\\${mid}`)
    }
})

// [ { key: 'jwt', middleware: [Function (anonymous)] } ]

controllers.forEach((controller, index) => {
    const fileController = require(`${pathControllers}\\${controller}`)
    fileController.forEach(config => {
        const middleware = config.middlewares.map(e => {
            return allMiddlewares.find(m => m.key === e )
        })

        const useMiddleware = middleware.map(m => m.middleware)
        
        router[config.method](`/${config.url}`,  ...useMiddleware, config.function);
    })
})

module.exports = router;


//FALTA PASSAR PARAMETROS PROS MIDDLEWARES

// USAR SPREAD PROS MIDDLEWARES

// SE IMPORTAR AQUI TODOS MIDDLEWARES, E NÃO UM POR CONTROLLER, O SPREAD NAO VAI COLAR