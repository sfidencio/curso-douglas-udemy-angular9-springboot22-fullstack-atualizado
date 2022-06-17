# Link de acesso ao Swagger da API, pode ser consumida via POSTMAN
https://clientes-api-sfidencio.herokuapp.com/swagger-ui.html

# curso-douglas-udemy-angular9-springboot22-fullstack-atualizado
Curso Full Stack: Agular9 + SpringBoot 2.2

# Para realizar deploy de sub-folders de um repositório GIT, deve seguir as dicas abaixo

1-Considere que a pasta .git esta na raiz do grupo de projetos, no caso ai temos o projeto clientes-api(Java/SpringBoot), clientes-app(Angular).

2-Assim, com CLI do heroku instalado e devidamente logado, e com o projeto de deploy já criado no dashboard do heroku, façamos os seguinte, estando no root_folder do projeto.

3-git subtree push --prefix clientes-api/ heroku master # normal push

4-Se ocorreu algum erro ou rejeição, podemos forçar o push, caso necessário:

5-git push heroku 'git subtree split --prefix clientes-api/ branch':master --force # force push



Referências:

https://gist.github.com/dariye/1cdc25e7a168527f5d035c47f4f9aed3

https://www.treinaweb.com.br/blog/deploy-de-uma-aplicacao-spring-boot-no-heroku

https://devcenter.heroku.com/articles/heroku-cli

https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku#creating-a-spring-boot-app

https://www.treinaweb.com.br/blog/documentando-uma-api-spring-boot-com-o-swagger
