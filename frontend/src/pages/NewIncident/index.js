import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoHeroes from '../../assets/logo.svg';


export default function NewIncident() {

    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();

    const ongId = localStorage.getItem('ongID');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar novo caso, tente novament.');
        }
    }

    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoHeroes} alt="Be the Hero" title="Be the Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        placeholder="Título do caso" />
                    <textarea
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        placeholder="Descrição"></textarea>
                    <input
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                        placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}