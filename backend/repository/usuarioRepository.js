import { connection } from "./connection.js";

export async function criarContaUser(novoUser) {
    const comando = `
        insert into usuario (nome, email, senha, role)
            values
            (?, ?, MD5(?), 'user');
    `;

    const[info] = await connection.query(comando, [
        novoUser.nome,
        novoUser.email,
        novoUser.senha
    ]);

    return info.insertId;
}

export async function criarContaADM(novoAdm) {
    const comando = `
        insert into usuario (nome, email, senha, role)
            values
            (?, ?, MD5(?), 'admin');
    `;

    const[info] = await connection.query(comando, [
        novoAdm.nome,
        novoAdm.email,
        novoAdm.senha
    ]);

    return info.insertId;
}

export async function verificarCredenciais(email, senha) {
    const comando = `
        select nome, email, role
            from usuario 
            where email = ? AND senha = MD5(?);
    `;

    const [registros] = await connection.query(comando, [email, senha]);
    return registros[0];
}

export async function verificarExistencia(email) {
    const comando = `
        select nome, email, role
            from usuario 
            where email = ?;
    `;

    const [registros] = await connection.query(comando, [email]);
    return registros[0];
}