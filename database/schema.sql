CREATE DATABASE meus_projetos;
USE meus_projetos;

CREATE TABLE [IF NOT EXISTS] projetos (
  id integer PRIMARY KEY AUTO_INCREMENT, 
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  ytb_link VARCHAR(100) NOT NULL,
  github_link VARCHAR(100) NOT NULL,
  tecnologias VARCHAR(150) NOT NULL,
  data_de_realizacao VARCHAR(50) NOT NULL
);

INSERT INTO projetos (titulo, descricao, ytb_link, github_link, tecnologias, data_de_realizacao)
VALUES
('Pixels Art', 'É um projeto que consiste em um painel em branco e algumas cores, para que você possa fazer a arte que desejar!', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/project-pixels-art', 'Javascript, HTML, CSS', 'Setembro de 2021'),
('Shopping Cart', 'Esse projeto é uma simulação de um site de compras', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/project-shopping-cart', 'Javascript, HTML, CSS', 'Outubro de 2021'),
('To Do List', 'Esse projeto é uma lista de tarefas', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/project-to-do-list', 'Javascript, HTML, CSS', 'Setembro de 2021'),
('FakeTunes', 'Esse projeto é uma simulação do ITunes', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/project-faketunes', 'Javascript, HTML, CSS, React', 'Novembro de 2021'),
('Trunfo', 'Esse projoeto é um game card, no estilo trunfo', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/project-trunfo', 'Javascript, HTML, CSS', 'Novembro de 2021'),
('E-Wallet', 'Esse projeto é uma carteira online', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 'https://github.com/jpdiesel/currency-wallet', 'Javascript, HTML, CSS', 'Janeiro de 2022');
