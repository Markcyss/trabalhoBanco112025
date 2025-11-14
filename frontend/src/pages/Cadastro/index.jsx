import { useState } from 'react';
import './index.scss';

function Cadastro() {
    return (
        <>
            <div className='container-login'>
                <div>
                    <h1>Cadastro</h1>
                    <h3>Nome de Usuario</h3>
                    <input type="text" placeholder='nome' />
                    <h3>Email</h3>
                    <input type="text" placeholder='email' />
                    <h3>Senha</h3>
                    <input type="text" placeholder='senha' />
                    <h3>Confirme a Senha</h3>
                    <input type="text" placeholder='confirme a senha' />
                </div>
            </div>
        </>
    )
}

export default Cadastro;