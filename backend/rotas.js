import adminController from './controller/adminController.js';
import usuarioController from './controller/usuarioController.js';
import express from 'express';

export function adicionarRotas(api) {
    api.use(adminController)
    api.use(usuarioController)
}