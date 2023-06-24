// Arquivo para gerenciar as rotas da API
// Importando o express para criar as rotas
const express = require('express');
// Definindo o router para criar as rotas
const router = express.Router();
// Importando o controller para as rotas
const CarroController = require('../src/controllers/CarroController');
// Definindo as rotas
router.get('/carros', CarroController.buscarTodos);
// Buscando apenas um carro
router.get('/carros/:codigo', CarroController.buscarUm);
// Criando um novo carro
router.post('/carro', CarroController.inserirUm);
// Atualizando um carro
router.put('/carro/:codigo', CarroController.atualizarUm);
// Deletando um carro
router.delete('/carro/:codigo', CarroController.deletarUm);
// Exportando o router para ser utilizado em outros arquivos
module.exports = router;