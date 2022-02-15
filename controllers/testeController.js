module.exports = { //OU CLASSE 
    // ADICIONAR OBJETO CHAMADO CONFIG, PRA DEFINIR A URL E TAL
    async get(req, res) {
        return res.status(200).send('Bem vindo ao teste');
    }
}