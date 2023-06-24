// Lendo as variáveis de ambiente
require('dotenv').config({path:'variaveis.env'});
// Importando o Express
const express = require('express');
// Importando o Cors (Cross-Origin Resource Sharing)
const cors = require('cors');
// Importando o Body Parser (para ler os dados enviados pelo formulário)
const bodyParser = require('body-parser');
// Importando as rotas do projeto
const routes = require('./routes');
// Criando o servidor
const server = express();
// Habilitando o Cors
server.use(cors());
// Habilitando o Body Parser
server.use(bodyParser.urlencoded({extended: false}));
// Definindo as rotas da API
server.use('/api', routes);
// Servidor rodando na porta 3000
server.listen(process.env.PORT, () => {
    console.log('Servidor rodando em http://localhost:' + process.env.PORT);
});