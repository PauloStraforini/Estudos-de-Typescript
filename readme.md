# Estudo de TypeScript
# Este documento cobre os conceitos principais de TypeScript, incluindo tipos primitivos, tuplas, enumerações, interseções e asserções de tipo

## 1. Tipos Básicos em TypeScript
Números (number): Representam valores numéricos, incluindo inteiros e números de ponto flutuante.
Strings (string): Usadas para representar textos.
Booleanos (boolean): Representam valores lógicos, sendo true ou false.
Tipo any: Permite que uma variável aceite qualquer tipo de dado, tornando-se útil quando o tipo exato não é conhecido durante a codificação. No entanto, seu uso excessivo deve ser evitado, pois remove as verificações de tipo.
Arrays: São coleções de valores de um único tipo, como números, strings ou booleanos.

## 2. Tuplas
Tuplas são tipos de dados que permitem a combinação de vários valores de diferentes tipos, em uma ordem definida. Elas são úteis para armazenar dados que têm uma estrutura específica com vários tipos de dados.

## 3. Interseções (Union Types)
As interseções permitem que uma variável aceite mais de um tipo de dado. Elas são usadas quando o valor de uma variável pode ser de diferentes tipos, como string, number ou boolean.

## 4. Enums
Enums são usados para definir conjuntos de constantes nomeadas que representam valores fixos, como direções, estados ou fases. Eles facilitam o uso de valores legíveis em vez de números ou strings "mágicos" no código.

## 5. Type Assertions (Asserções de Tipo)
As asserções de tipo permitem informar ao TypeScript qual é o tipo de uma variável quando isso não é explícito no código. Isso é útil quando o compilador não consegue inferir o tipo correto ou quando estamos lidando com valores de tipo any.