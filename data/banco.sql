create database trabalhobancobim4;
use trabalhobancobim4;

create table usuario (
	id int primary key auto_increment,
    nome varchar(255),
    email varchar(100),
    senha varchar(255),
    role varchar(100)
);

