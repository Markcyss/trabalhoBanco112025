-- Data Definition Language
-- Usado para criações, tanto do banco quanto de tabelas.

drop database if exists livrariabd;

create database livrariabd;

use livrariabd;

create table login (
	id int primary key auto_increment,
    usuario varchar (100),
    senha varchar (100)
);

create table livros (
	id int primary key auto_increment,
    capa_url varchar(100),
    titulo varchar(100),
    autor varchar(100)
);