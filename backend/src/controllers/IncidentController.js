const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const { page = 1 } = request.query;

        // Exibir o total de Incidentes no FrontEnd
        const [contador] = await connection('incidents').count();

        console.log(contador);

        // Páginação a cada 5 itens (Página - 1 * 5 casos, para não listar todos de uma vez no Pagelist do Insomnia)
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5).offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.nome',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.cidade',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', contador['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { titulo, descricao, valor } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            titulo,
            descricao,
            valor,
            ong_id
        });

        return response.json({ id });

    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({
                error: 'Operação não permitida.'
            });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};