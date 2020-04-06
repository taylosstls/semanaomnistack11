const express = require('express');

// Controlador da ONG
const OngController = require('./controllers/OngController');

// Cadastro de caso da ONG
const IncidentController = require('./controllers/IncidentController');

// Perfil da ONG
const ProfileController = require('./controllers/ProfileController');

// Login da ONG
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


// exibir cadastros criados feitos na tabela
routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);

// acompanhar cadastros que são feitos na tabela
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);

// deletar cadastros criados feitos na tabela
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;