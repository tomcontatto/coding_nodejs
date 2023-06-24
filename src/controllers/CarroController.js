const CarroService = require('../services/CarroService');

module.exports = {
    // Retorna todos os carros
    buscarTodos: async (req, res) => {
        const json = {error:'', result:[]};
        const carros = await CarroService.buscarTodos();
        carros.forEach(carro => {
            json.result.push({
                codigo: carro.codigo,
                modelo: carro.modelo,
                placa: carro.placa,
            });
        });
        res.json(json);
    },
    // Retorna apenas um carro
    buscarUm: async (req, res) => {
        const json = {error:'', result:{}};
        const carro = await CarroService.buscarUm(req.params.codigo);
        if(carro){
            json.result = carro;
        }
        res.json(json); 
    },
    // Adiciona um novo carro
    inserirUm: async (req, res) => {
        const json = {error:'', result:{}};
        const modelo = req.body.modelo;
        const placa = req.body.placa;
        if(modelo && placa){
            const CarroCodigo = await CarroService.inserirUm(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo: modelo,
                placa: placa
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    // Atualiza um carro
    atualizarUm: async (req, res) => {
        const json = {error:'', result:{}};
        const codigo = req.params.codigo;
        const modelo = req.body.modelo;
        const placa = req.body.placa;
        if(codigo && modelo && placa){
            await CarroService.atualizarUm(codigo, modelo, placa);
            json.result = {
                codigo: codigo,
                modelo: modelo,
                placa: placa
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    // Deleta um carro
    deletarUm: async (req, res) => {
        const json = {error:'', result:{}};
        await CarroService.deletarUm(req.params.codigo);
        res.json(json); 
    }
}