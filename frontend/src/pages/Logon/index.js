import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoHeroes from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const [id, setId] = useState('');

        const history = useHistory();

    async function handleLogin(e) {
        // Previne de recarregar a página
        e.preventDefault();

        try {

            const response = await api.post('sessions', { id });

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/profile');
        } catch (err) {
            alert('Erro no login. Tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoHeroes} alt="Be the Hero" title="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" title="Heroes" />
        </div>

    );
}