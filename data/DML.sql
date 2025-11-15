-- Data Manipulation Language
-- Usado para colocar os inserts.

use livrariabd;

insert into usuario (nome, email, senha, role)
	values
    ("Amanda", "amanda@gmail.com", MD5("4321"), "user"),
    ("Ana", "ana@gmail.com", MD5("2123"), "user"),
    ("Gabriel", "gabriel@gmail.com", MD5("4344"), "user"),
    ("Gabi", "gabi@gmail.com", MD5("5678"), "admin"),
    ("Thiago", "thiago@gmail.com", MD5("9090"), "user"),
    ("Jonas", "jonas@gmail.com", MD5("4002"), "user"),
    ("Lorena", "lorena@gmail.com", MD5("8922"), "user");