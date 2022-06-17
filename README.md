# curso-douglas-udemy-angular9-springboot22-fullstack-atualizado
Curso Full Stack: Agular9 + SpringBoot 2.2

# Referências utilizadas para efetuar o deploy da aplicação no provedor de cloud free, HEROKU.
https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku#creating-a-spring-boot-app

# Para realizar deploy de sub-folders de um repositório GIT, deve seguir as dicas abaixo

1-Considere que a pasta .git esta na raiz do grupo de projetos, no caso ai temos o projeto clientes-api(Java/SpringBoot), clientes-app(Angular).

2-Assim, com CLI do heroku instalado e devidamente logado, e com o projeto de deploy já criado no dashboard do heroku, façamos os seguinte, estando no root_folder do projeto.

3-git subtree push --prefix clientes-api/ heroku master # normal push

4-Se ocorreu algum erro ou rejeição, podemos forçar o push, caso necessário:

5-git push heroku 'git subtree split --prefix clientes-api/ branch':master --force # force push
