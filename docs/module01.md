# O que é Clean Architecture

## Camadas
Camadas para abstração do que o componente faz ou recebe. Utilizar interfaces para abstrações. Divisão de responsabilidades em camadas.

Separa Infra, Data, Domain, Validation, Presentation

## Pattern Composite
Composição de objetos similares. <br/>
Ex: O composite vai conter todas as regras de validação que o login precisar.

## Controle de estado
Geralmente controle de estado permanece junto ao componente

## Main Layer
Designer Patterns aqui dentro, como factories. 
Ex: Login Factory, cria instancias para todo os demais usos no login

## Composition Rootes
Main Layer é o ponto de entrada da aplicação. Ela é acoplada a todas as outras camadas