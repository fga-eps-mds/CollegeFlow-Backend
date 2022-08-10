# CollegeFlow-Backend
<p align="center">  <img alt="College Flow" src=".github/images/college-flow-logo-blue.png" width="400px"></p>

<p align="center">
<!--     <a href="https://app.travis-ci.com/github/fga-eps-mds/2022-1-PokeRanking" alt="Status da build" >
        <img src="https://app.travis-ci.com/fga-eps-mds/2022-1-PokeRanking.svg?branch=main" />
    </a>
    <a href="https://codeclimate.com/github/fga-eps-mds/2022-1-PokeRanking" alt="Manutenibilidade" >
        <img src="https://api.codeclimate.com/v1/badges/c6ad709789de6e0bfc0b/maintainability" />
    </a>
    <a href="https://isitmaintained.com/project/fga-eps-mds/2022-1-PokeRanking" alt="Porcentagem de issues abertas" >
        <img src="http://isitmaintained.com/badge/open/fga-eps-mds/2022-1-PokeRanking.svg" />
    </a>
    <a href="https://isitmaintained.com/project/fga-eps-mds/2022-1-PokeRanking" alt="Tempo médio para fechar uma issue" >
        <img src="http://isitmaintained.com/badge/resolution/fga-eps-mds/2022-1-PokeRanking.svg" />
    </a> -->
    <a href="https://opensource.org/licenses/MIT" alt="Licença: GPL v3" >
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
    </a>
</p>
<br>
<br>

## <img src=".github/images/logo-college-flow-background.png" width="30" height="30" /> Sobre o projeto

O projeto tem o intuito de ajudar os estudantes da UnB do campus do Gama a realizar matricula nas suas disciplinas, onde será possível ver avaliações de disciplinas e seus professores para que possam tomar a melhor decisão com base na opinião de outros alunos.

<p align="center">
Segue o link da documentação do projeto
    <a href="https://fga-eps-mds.github.io/CollegeFlow/"><strong>College Flow Docs</strong></a> <img src=".github/images/logo-college-flow-background.png" width="20" height="20" />
</p>
<br>
<br>

## 💻 Tecnologias utilizadas

<p align="center">
    <a href="https://flutter.dev/" alt="Flutter" >
        <img width="70" height="70" src="https://github.com/devicons/devicon/blob/master/icons/flutter/flutter-original.svg" />
    </a>
    <a href="https://dart.dev/" alt="Dart" >
        <img width="70" height="70" src="https://github.com/devicons/devicon/blob/master/icons/dart/dart-original.svg" />
    </a>
    <a href="https://nodejs.org/en/" alt="NodeJs" >
        <img width="70" height="70" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" />
    </a>
    <a href="https://www.mongodb.com/pt-br" alt="MongoDb" >
        <img width="70" height="70" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg" />
    </a>
</p>
<br>
<br>

## 📜 Como Contribuir

Para contribuir com o projeto, é extremamente importante e recomendado que siga o [Guia de como contribuir com o projeto](https://fga-eps-mds.github.io/CollegeFlow/#/contributing) no qual será encontrado tudo necessario para se contribuir, como templates, [Código de Conduta](https://fga-eps-mds.github.io/CollegeFlow/#/code_of_conduct) e [Politicas](https://fga-eps-mds.github.io/CollegeFlow/#/policies).  
<br>
<br>

## 🧑‍💼💻 Como rodar o projeto

Essas são as instruções de como rodar o back-end, consulte também as instruções do [front-end](https://github.com/fga-eps-mds/CollegeFlow/tree/main).
Considerando que você já leu o README do repositório do front-end e quer rodar o servidor siga os passos abaixo.
<br>
<br>

## Configuração do ambiente de desenvolvimento
<br>

 1- [**Instalação do Docker**](https://docs.docker.com/desktop/install/linux-install/)

 2- [**Instalação do Docker compose**](https://docs.docker.com/compose/install/)

Verifique sua versão
  
    docker -v && docker compose -v

3- Faça o clone do projeto

    git clone git@github.com:fga-eps-mds/CollegeFlow-Backend.git

## Comandos
<br>

  1- Construir o container
        
    docker compose build
  2- Subir o container

    docker compose up
    
  3- Limpar volumes do docker composes
  
    docker compose down --volumes

## Referências
<br>

 * [**Documentação Docker**](https://docs.docker.com/get-docker/)

 * [**Documentação Docker compose**](https://docs.docker.com/compose/)
