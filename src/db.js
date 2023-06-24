// Importando o mysql
const mysql = require('mysql');
// Definindo a conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
// Se houver erro de conexão com o banco de dados
connection.connect((error) => {
    if (error) throw(error);
    console.log('Conectado ao banco de dados ' + process.env.DB_NAME); 
});
// Exportando a conexão com o banco de dados
module.exports = connection;
