import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './style.css';

import logoHeroes from '../../assets/logo.svg';

export default function Register() {
    // Registrar cada valor do formulário em um estado da variável
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    // Cadastro do usuário quando submit
    async function handleRegister(e) {
        // Previne de recarregar a página
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        };

        try {
            // sempre quando utilizar o await, deve chamar o async no início da função
            const response = await api.post('ongs', data);

            // Se usar " ` " ao invés de " ' ", você pode retornar valores de atributos
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoHeroes} alt="Be the Hero" title="Be the Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="backlink" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                        <input placeholder="UF" value={uf} onChange={e => setUF(e.target.value)} style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}