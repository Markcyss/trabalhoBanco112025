create database trabalhobancobim4;
use trabalhobancobim4;

create table usuario (
	id int primary key auto_increment,
    nome varchar(255),
    email varchar(100) unique not null,
    senha varchar(255),
    role varchar(100)
);

select*from usuario;

insert into usuario (nome, email, senha, role)
	values
    ("Amanda", "amanda@gmail.com", MD5("4321"), "user"),
    ("Ana", "ana@gmail.com", MD5("2123"), "user"),
    ("Gabriel", "gabriel@gmail.com", MD5("4344"), "user"),
    ("Gabi", "gabi@gmail.com", MD5("5678"), "admin"),
    ("Thiago", "thiago@gmail.com", MD5("9090"), "user"),
    ("Jonas", "jonas@gmail.com", MD5("4002"), "user"),
    ("Lorena", "lorena@gmail.com", MD5("8922"), "user");