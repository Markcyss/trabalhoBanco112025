import adminController from './controller/AdminController.js'
import express from 'express';

export function adicionarRotas(api) {
    api.use(adminController)
}