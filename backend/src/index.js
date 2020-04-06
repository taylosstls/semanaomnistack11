const express = require('express');

// npm install cors = Instala a segurança para limitar quem pode acessar as configs
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors({
  // origin: 'http://meusite.com.br'
}));

// app.use Fala pro Express que estamos usando o formato de extensão Json
app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * Get: Buscar/listar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?", servem para Filtros/páginação/etc.
 * Ex.: users?aluno=Gustavo&evento=OmniStack
 * Route Params: Parâmetros utilizados para identificar recursos
 * Ex.: users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
  * NoSQL: MongoDB, CouchDB, etc.
  */

/**
 * Driver : SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 * Instalar KNEX.JS
 * npm install knex
 * npm install sqlite3
 * npx knex init
 */

app.use(routes);


// Acessar pelo navegador: "localhost:3333"
app.listen(3333);