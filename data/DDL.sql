-- Data Definition Language
-- Usado para criações, tanto do banco quanto de tabelas.

drop database if exists trabalhobancobim4;

create database trabalhobancobim4;

use trabalhobancobim4;

create table usuario (
	id int primary key auto_increment,
    nome varchar(255),
    email varchar(100) unique not null,
    senha varchar(255),
    role varchar(100)
);