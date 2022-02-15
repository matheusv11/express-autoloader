module.exports = [
    {

        method: 'get',
        url: 'teste',
        function: async function get(req, res) {
            return res.status(200).send('Bem vindo ao teste');
        }

    },
    {

        method: 'post',
        url: 'teste',
        function: async function post(req, res) {
            return res.status(200).send('Post de teste');
        }

    }
]