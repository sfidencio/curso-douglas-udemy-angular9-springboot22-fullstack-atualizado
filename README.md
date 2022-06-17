# Curso Full Stack: Agular9 + SpringBoot 2.2

# JAVA

-Link de acesso ao Swagger da API, pode ser consumida via POSTMAN
https://clientes-api-sfidencio.herokuapp.com/swagger-ui.html

-Para realizar deploy de sub-folders de um repositório GIT, deve seguir as dicas abaixo

1-Considere que a pasta .git esta na raiz do grupo de projetos, no caso ai temos o projeto clientes-api(Java/SpringBoot), clientes-app(Angular).

2-Assim, com CLI do heroku instalado e devidamente logado, e com o projeto de deploy já criado no dashboard do heroku, façamos os seguinte, estando no root_folder do projeto.

  2.1-heroku git:remote -a clientes-api-sfidencio  (Observe que aqui apontamos pra qual repositório criamos no dashboard do heroku)

  2.2-git subtree push --prefix clientes-api/ heroku master # normal push

  2.3-Se ocorreu algum erro ou rejeição, podemos forçar o push, caso necessário:

  2.4-git push heroku 'git subtree split --prefix clientes-api/ branch':master --force # force push

3-Depois, faça o push normal para o repositório do github, pois o push do passo 4 e 5, envia para o3repos da aplicação no heroku.

4-#git push origin [master ou main]

5-Visualizar logs no CLI do heroku:

 5.1-#heroku logs -t --app clientes-api-sfidencio

 5.2-Basta efetuar requisição REST via postman ou pela aplicação angular, que irá aparecer no CLI do heroku.


# Angular

1-Para fazer deploy da aplicação angular, segui esse tutorial:

https://medium.com/geekculture/how-to-easily-deploy-your-first-angular-app-on-heroku-65dd546c8181

2-Porém existe um pequeno detalhe, na hora de subir os fontes para o heroku, deve apontar para o repositório da seguinte forma:

  2.1-heroku git:remote -a clientes-app-sfidencio  (Observe que aqui apontamos pra qual repositório criamos no dashboard do heroku)
  
  2.2-git commit -m "Fazer Deploy"
  
  2.3-git subtree push --prefix clientes-app/ heroku master

2-Não esquecer de mudar o arquivo "enviroment.prod.ts", colocar a url_base da API hospedada no heroku.

3-Visualizar logs no CLI do heroku:

 3.1-#heroku logs -t --app clientes-app-sfidencio
 
 
4-Finalmente a URL de acesso da aplicação clientes-app-sfidencio, desenvolvida utilizando Angular:

  4.1-https://clientes-app-sfidencio.herokuapp.com/



# Referências:

https://gist.github.com/dariye/1cdc25e7a168527f5d035c47f4f9aed3

https://www.treinaweb.com.br/blog/deploy-de-uma-aplicacao-spring-boot-no-heroku

https://devcenter.heroku.com/articles/heroku-cli

https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku#creating-a-spring-boot-app

https://www.treinaweb.com.br/blog/documentando-uma-api-spring-boot-com-o-swagger
