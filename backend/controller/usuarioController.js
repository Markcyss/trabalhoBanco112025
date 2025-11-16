import * as repoUsuario from '../repository/usuarioRepository.js'
import { Router } from 'express';
import { generateToken } from "../utils/jwt.js";
import { getAuthentication } from '../utils/jwt.js';

const autenticador = getAuthentication();

const endpoints = Router();

endpoints.post('/contauser', async (req, resp) => {
    const novoUser = req.body;

    const registro = await repoUsuario.verificarExistencia(novoUser.email);
    console.log(registro);

    if (!registro) {
        const id = await repoUsuario.criarContaUser(novoUser);
        resp.send({novoId: id});
    }
    else {
        resp.status(400).send({ erro: "Usuario já cadastrado"});
    }
})

endpoints.post('/contaadm', async (req, resp) => {
    const novoUser = req.body;

    const registro = await repoUsuario.verificarExistencia(novoUser.email);
    console.log(registro);

    if (!registro) {
        const id = await repoUsuario.criarContaADM(novoUser);
        resp.send({novoId: id});
    }
    else {
        resp.status(400).send({ erro: "Usuario já cadastrado"});
    }
})

endpoints.post("/login", async (req, resp) => {
    const userinfo = req.body;

    if (!userinfo.email || !userinfo.senha) {
        resp.status(400).send({ erro: "Email e senha obrigatorios" });
    }
    else {
        const credenciais = await repoUsuario.verificarCredenciais(userinfo.email, userinfo.senha);
        if (!credenciais) {
            resp.status(401).send({ erro: "Credenciais invalidas" });
        }
        else {
            const token = generateToken(credenciais);
            resp.send({ token });
        }

    }
});

export default endpoints;