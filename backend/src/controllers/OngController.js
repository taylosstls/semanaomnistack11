// Módulo de gerar Crypto
const crypto = require('crypto');
const connection = require('../database/connection')

// Alinhar materiais, deixar o arquivo routes.js mais limpo
module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query;

        const [contador] = await connection('ongs').count('*');

        console.log(contador);

        // Páginação a cada 5 itens (Página - 1 * 5 casos, para não listar todos de uma vez no Pagelist do Insomnia)
        const ongs = await connection('ongs')
            .limit(5).offset((page - 1) * 5)
            .select([
                'ongs.*',
                'ongs.nome',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.cidade',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', contador['count(*)']);

        return response.json(ongs);
    },

    async create(request, response) {

        const { nome, email, whatsapp, cidade, uf } = request.body;

        // gera ID aleatoriamente
        const id = crypto.randomBytes(4).toString('HEX');

        // await = aguardar o código finalizar para depois prosseguir
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        });

        // usa o ID para fazer login
        return response.json({ id });

    }
};