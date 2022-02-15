module.exports = [
    {

        method: 'get',
        url: 'user',
        function: async function get(req, res) {
            return res.status(200).send('Bem vindo usuario');
        }

    },
    {

        method: 'post',
        url: 'user',
        function: async function post(req, res) {
            return res.status(200).send('Post funciona');
        }

    }
]