# Estudo comparativo entre um Package de TypeScript para MVC e SpringBoot
 
Esse repositório apresenta uma análise de um estudo comparativo entre um package de TypeScript MVC e SpringBoot no que tange a performance e agilidade de desenvolvimento.
 
## Definindo o pacote de TypeScript
 
Eu estou interessando em um framework mvc de TypeScript. Em busca disso eu encontrei o ZenTS - é interessante, rápido e prático. Entretanto, no zents.dev/guid se encontra a seguinte mensagem:
 
   ZenTS is still under heavy development and not ready for production use yet (breaking changes can be introduces at any time). Please report any issues on GitHub (opens new window).
 
Isso trás um alerta e convida a análise de outros frameworks, ou se não construir um próprio package
 
### MVC ASP.NET com TypeScript
 
https://docs.microsoft.com/pt-br/visualstudio/javascript/tutorial-aspnet-with-typescript?view=vs-2019
 
Apesar de ser interessante de analisar, eu entendo que distoa dos interesses desse estudo. Estou em busca de um uso mais tradicional do TypeScript que é acometido pela grande maioria das empresas: ou seja - compilar para JS e subir o serviço.
 
 
### Outros MVCs TypeScript
 
Eu me interessei bastante por essa lista: https://github.com/topics/mvc-framework?l=typescript, lista vários frameworks interessantes.
 
### Loon
 
https://loon-project.github.io/#/ - não é um projeto muito grande, faz muito tempo que não é atualizado. O interessante seria fazer uso do package dele para trabalhar uma estrutura própria.
 
A princípio parece que o framework mistura js com ts nas mesmas pastas, isso é um pouco complicado de se lidar.
 
### Configuração do próprio package.js
 
Parece que a solução mais inteligente é configurar um pacote próprio package.js. O melhor que se tem a fazer é usar a estrutura package.json que se encontra em ./test_mv_typescript/proprio_package_js
 
 
### Mudança de Escopo do Projeto
 
Exista uma grande complexidade em manter o desenvolvimento desse projeto no que tange a comparação de SpringBoot com algum framework de typescript, por conta disso eu entendo ser mais prudente mudar a perspectiva do projeto, comparar TypeScript X Java em vez de comparar estruturas MVC.
 
Isso não significa desconsiderar por complexo o uso e análise de framework/libs. Pode ser necessário analisar uma dada estrutura sobre essa perspectiva.
 
 
 
### Análise de ambas linguagens
 
Java X Node JS
https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/javascript.html
 
Java X TypeScript
https://www.beyondjava.net/comparing-typescript-java
 
 
 
Typescript Performance
https://github.com/microsoft/TypeScript/wiki/Performance
 
TypeScript Performance
https://wanago.io/2019/02/11/node-js-typescript-modules-file-system/
 
 
 
Performance Numbers of TypeScript
https://benchmarksgame-team.pages.debian.net/benchmarksgame/measurements/typescript.html
 
Performance Numbers of Java
https://benchmarksgame-team.pages.debian.net/benchmarksgame/measurements/java.html
 
Performance Numbers of NodeJs
https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/node-typescript.html
 
 
 
About Benchmark game
 
https://en.wikipedia.org/wiki/The_Computer_Language_Benchmarks_Game
 
 
 

