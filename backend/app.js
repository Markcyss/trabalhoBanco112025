import express from "express";
import cors from 'cors';
import { adicionarRotas } from "./rotas.js";

const api = express();
api.use(express.json());

api.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "x-access-token"]
}));

adicionarRotas(api);

api.listen(5010, () => {console.log(`Servidor subiu!`)});