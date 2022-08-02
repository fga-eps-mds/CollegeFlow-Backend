# CollegeFlow-Backend

## Como rodar o College Flow na minha maquina? 

## Configuração do ambiente de desenvolvimento

 1- [**Instalação do Docker**](https://docs.docker.com/desktop/install/linux-install/)

 2- [**Instalação do Docker compose**](https://docs.docker.com/compose/install/)

Verifique sua versão
  
    docker -v && docker-compose -v

2- Faça o clone do projeto

       git clone git@github.com:fga-eps-mds/CollegeFlow-Backend.git

3- Para instalar as dependecais do projeto digite o comando: 

    npm install

## Comandos

  1- Construir o container
        
    docker-compose build
  2- Subir o container

    docker-compose up
    
  3- Limpar volumes do docker-compose
  
    docker-compose down-volumes

## Referências
 * [**Documentação Docker**](https://docs.docker.com/get-docker/)

 * [**Documentação Docker-compose**](https://docs.docker.com/compose/)
