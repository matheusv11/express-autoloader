const jwt = require('../middlewares/jwt');

module.exports = [
    {

        method: 'get',
        url: 'teste',
        middlewares: [jwt],
        function: async function get(req, res) {
            return res.status(200).send('Bem vindo ao teste');
        }

    },
    {

        method: 'post',
        url: 'teste',
        middlewares: [],
        function: async function post(req, res) {
            return res.status(200).send('Post de teste');
        }

    }
]