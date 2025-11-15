import * as repoADM from '../repository/adminRepository.js';
import { Router } from 'express';
import { generateToken } from "../utils/jwt.js";
import { getAuthentication } from '../utils/jwt.js';

const autenticador = getAuthentication();

const endpoints = Router();

endpoints.get('/usuarios', autenticador, async (req, resp) => {
    const registros = await repoADM.verificarUsuarios();

    resp.send(registros);
})

endpoints.get('/contagem', autenticador, async (req, resp) => {
    const contagem = await repoADM.contagemUsuarios();

    resp.send(contagem);
})

export default endpoints;