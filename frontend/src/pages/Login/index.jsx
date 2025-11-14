import { useState } from 'react';
import './index.scss';

function Login() {
    return (
        <>
            <div className='container-login'>
                <div>
                    <h1>Bem vindo ao site, Favor fazer o Login:</h1>
                    <h3>Login</h3>
                    <input type="text" placeholder='usuario ou email' />
                    <h3>Senha</h3>
                    <input type="text" placeholder='senha' />
                </div>
            </div>
        </>
    )
}

export default Login;