# TypeScript
Este código explora diversos conceitos e funcionalidades do TypeScript, incluindo:

## Interfaces e Classes:
Interface IPerson: Define uma estrutura para objetos com id e um método sayMyName.
Classe Person: Implementa IPerson, com atributos readonly, protected, e private, demonstrando encapsulamento.

## Tipos:
User e Order: Tipos definidos para representar um usuário com atributos opcionais (password? e register?) e uma lista de pedidos (Order[]).
Unions e Interseções: Combinações de tipos (User & Author) e Grade, que pode ser number ou string.

## Funções:
Genéricas: A função returnValue<T> aceita e retorna qualquer tipo (T).
Sobrecarga: A interface MathFunc exemplifica sobrecarga de funções.
Promises: Uso de funções assíncronas com async e Promise<string>.

## Outros Conceitos:
Enums: Enumeração de direções (Direction).
Tuplas: Representação de listas com tipos específicos (ex.: [string, number]).
Type Assertion: Conversão explícita de tipos com as e <>.
Esse código demonstra a versatilidade do TypeScript, aplicando técnicas de tipagem avançada, interfaces, classes, e funções genéricas para construir soluções robustas e tipadas.