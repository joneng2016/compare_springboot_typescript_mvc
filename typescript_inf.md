# Estudo comparativo entre um Package de TypeScript para REST API e SpringBoot
 
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
 
Existe uma grande complexidade em manter o desenvolvimento desse projeto no que tange a comparação de SpringBoot com algum framework de typescript, por conta disso eu entendo ser mais prudente mudar a perspectiva do projeto, comparar TypeScript X Java em vez de comparar estruturas MVC.
 
Isso não significa desconsiderar por complexo o uso e análise de framework/libs. Pode ser necessário analisar uma dada estrutura sobre essa perspectiva.
  

### Análise de ambas linguagens

Java X Node JS
https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/javascript.html
 
Apresenta, dentro de uma estrutura competitiva, o uso das linguagens na resolução de problemas computacionais complexo. O objetivo desta comparação reside avaliar o uso de memória/processamento. É interessante de ser ler, contudo para o estudo que está sendo desenvolvido neste texto - isso não se faz verdade.

A análise aqui presente mostra uma aplicação da linguagem sobre um aspecto baixo nível. Por conta disso, a complexidade presente não se traduz realidade no que tange a diversas aplicações do dia a dia.

Uma situação bastante curiosa é com o php. Isso, pois o PHP utilizado no estudo é o PHP cli. Contudo, na prática se tem a execução do PHP balizada por serviços como nginx/apache2 o que modifica completamente a perforance do mesmo.

Não só a performance vale como também a complexidade de condificação. Isso, pois um código legível é de grande importância para o meio comporativo. Assim sendo, uma empresa pode vir a aceitar perder alguns milissegundos de performance no contraponto de obter um código mais elegante gerando um menor número de bugs a serem resolvidos.


Java X TypeScript
https://www.beyondjava.net/comparing-typescript-java


Esse artigo é feito para desenvolvedores Java. Então esse texto apresenta a esse tipo de profissional quais são as vantagens e desvantagens de usar uma linguagem como TypeScript. 

Para isso o artigo apresenta similaridades/diferenças entre ambas as linguagens. Um ponto que é observado pelo texto reside na tipagem de primitivos. Então, por exemplo enquanto Java força a ocorrência de tipagem, tal como: int fourtyTwo = 42, TypeScript permite omitir a tipagem, tal como let fourtyTwo = 42. 

Um dicionário em TypeScript em Java.



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
  

### Desempenho do SpringBoot 

Desempenho de Memória
https://spring.io/blog/2015/12/10/spring-boot-memory-performance

Este link apresenta um estudo do Spring-Boot comparado com outras formas de implementação Java utilizando 
a estrutura mvc Spring. O artigo prova que Spring-Boot tem uma performance em memória heap e non-heap relativamente superior.

How Fast is Spring? 
https://spring.io/blog/2018/12/12/how-fast-is-spring

Spring Boot performance Benchmarks with Tomcat, Undertow and Webflux
https://dev.to/azure/spring-boot-performance-benchmarks-with-tomcat-undertow-and-webflux-4d8k

JMH: Benchmark REST APIs
https://dzone.com/articles/jmh-benchmark-rest-apis

Springboot integrates JMH benchmark test, and the error JMH had finished, but forked VM did not exit, the solution
https://www.programmersought.com/article/85665337447/

11 Points Make Your Spring Boot Start Faster
https://programmer.group/11-points-make-your-spring-boot-start-faster.html

Reactive programming
https://dreamix.eu/blog/java/reactive-java-vert-x-vs-spring-framework-5

Spring Boot performance tuning
https://vladmihalcea.com/spring-boot-performance-tuning/

Spring Boot performance tuning
https://subscription.packtpub.com/book/application_development/9781788838382/12/ch12lvl1sec89/spring-boot-performance-tuning


### Desempenho de Libs para REST em TypeScript/Node JS

I Built the Same API With Fastify, Express & Bare Node.js. Here are the differences.
https://javascript.plainenglish.io/fastify-express-benchmark-4c4aebb726d6

Performance (Fastify)
https://docs.nestjs.com/techniques/performance

Fastify vs. Express
https://www.educative.io/edpresso/fastify-vs-express

How Can I Do a Benckmarking of fastify
https://www.fastify.io/docs/master/Benchmarking/

REST Service for TypeScript
https://d0whc3r.github.io/typescript-rest/

Web REST API Benchmark on a Real Life Application
https://medium.com/@mihaigeorge.c/web-rest-api-benchmark-on-a-real-life-application-ebb743a5d7a3


### Desempenho de Hibernate

https://www.jpab.org/Hibernate.html
Hibernate Performance Summary


### Sequelize Benchmark

Sequelize Benchmark
https://www.npmjs.com/package/sequelize-benchmark


Prisma vs. TypeORM
https://betterprogramming.pub/prisma-vs-typeorm-60d02f9dac64


### Heap and No Heap 

https://www.yourkit.com/docs/kb/sizes.jsp 

http://docente.ifrn.edu.br/robinsonalves/disciplinas/estruturas-de-dados/08Heap.pdf

## Benchmark

Esse tópico é destinado a técnicas e ferramentas para Benchmark e Profile tanto no que tange a Java como em relação a TypeScript. 

### TypeScript 

Esse abordar os seguintes pontos em relação a TypeScript

* Debug
* Benchmark
* Uso de Memória Heap e No Heap

Todos esses três pontos serão estudando utilziando o vscode para tal.

#### Debug-TypeScript

https://code.visualstudio.com/docs/typescript/typescript-debugging

O repositório debug_typescript apresenta um helloworld de como fazer isso. Passos são os seguintes:

* Configurar tsconfig.json com sourceMap:true
* Compilar o projeto
* Dar Start usando o Node configurado dentro do VS Code conforme o tutorial apresenta.
  

### Profile em Typescript

A realização do profile em typescript é melhor descrita em: https://nodejs.org/en/docs/guides/simple-profiling/

Sugestão:

' 

node --prof index.js
node --prof-process isolate-0x315def0-24614-v8.log >> process.txt
vim process.txt 

'  