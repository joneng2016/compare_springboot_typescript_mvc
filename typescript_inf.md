# Estudo comparativo entre um Package de TypeScript para MVC e SpringBoot

Esse repositório apresenta uma análise de um estudo comparativo entre um package de TypeScript MVC e SpringBoot no que tange a performance e agilidade de desenvolvimento. 

## Definindo o pacote de TypeScript

Eu estou interessando em um framework mvc de TypeScript. Em busca disso eu encontrei o ZenTS - é interessante, rápido e prático. Entretanto, no zents.dev/guid se encontra a seguinte mensagem:

    ZenTS is still under heavy development and not ready for production use yet (breaking changes can be introduces at any time). Please report any issues on GitHub (opens new window).

Isso trás um alerta e convita a análise de outros frameworks, ou se não construir um próprio package

### MVC ASP.NET com TypeScript

https://docs.microsoft.com/pt-br/visualstudio/javascript/tutorial-aspnet-with-typescript?view=vs-2019

Apesar de ser interessante de analisar, eu entendo que distoa dos interesses desse estudo. Estou em busca de um uso mais tradicional do TypeScript que é acometido pela grande maioria das empresas: ou seja - compilar par JS e subir o serviço.


## Outros MVCs TypeScript

Eu me interessei bastante por essa lista: https://github.com/topics/mvc-framework?l=typescript, lista vários frameworks interessantes.

## Loon

https://loon-project.github.io/#/ - não é um projeto muito grande, faz muito tempo que não é atualizado. O interessante seria fazer uso do package dele para trabalhar uma estrutura própria.

A princípio parece que o framework mistura js com ts nas mesmas pastas, isso é um pouco complicado de se lidar.

## Configuração do próprio package.js

Parece que a solução mais inteligente é configurar um pacote prório package.js. O melhor que se tem a fazer é usar a estrutura package.json que se encontra em ./test_mv_typescript/proprio_package_js
