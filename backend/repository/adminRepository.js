import { connection } from "./connection.js";

export async function verificarUsuarios() {
    const comando = `
        select nome, email, cargo_adm
            from usuario;
    `

    const [registros] = await connection.query(comando);
    return registros;
}

export async function contagemUsuarios() {
    const comando = `
        select count(*) as contagem
            from usuario;
    `;

    const [info] = await connection.query(comando);
    return info;
}