---
title: "Estruturas de Dados - Arrays"
date: "26 de Julho, 2023"
createdAt: 1690340400
category:
    - tech
    - data structure
description: "Començando a série sobre as principais estruturas de dados, hoje falarei sobre os famosos Arrays."
media: "/posts-img/estruturas-de-dados-01-g.jpg"
---

::date
26 de Julho, 2023
::

# Arrays

::description
Començando a série sobre as principais estruturas de dados, hoje falarei sobre os famosos Arrays.
::


## Introdução

Se você já se aventurou pelos campos da programação de alguma forma, já
deve ter visto alguma coisa sobre <span class="font-bold text-primary">arrays</span>,
também conhecidos como <span class="font-bold text-primary">vetores unidimensionais</span>.
Hoje vamos falar um pouco sobre eles e entender os principais fundamentos e conceitos 
por trás de sua implementação.

Os arrays são a estrutura de dados mais básica que temos e eles também servem como
base para a implementação de muitas outras estruturas. Mas como é um array? Para
que ele serve?

## Fundamentos

Por se tratarem da estrutura de dados mais <span class="text-primary font-bold">simples</span>
que possuímos, a sua implementação também é bastante simples. A estrutura básica de um
array consiste em um espaço de memória contígua, alocada especificamente para 
aquele array. Como exemplo, vamos criar um array de inteiros (int) com 6 posições.
De forma ilustrativa, teríamos algo semelhante a isso:

![Ilustração representando a lógica de um array](/posts-img/estruturas-de-dados-01-01.png "Ilustração representando a lógica de um array")

Mas qual a lógica por trás disso? Bom, o fato de um array possuir essa estrutura
"contínua" na memória, é o que nos permite acessar uma posição diretamente pelo seu índice,
o que é uma baita de uma vantagem. Mas como nem tudo são flores, uma desvantagem do array é
que ele possui seu tamanho fixo, tendo que ser declarado previamente e talvez você não use 
todas as posições, mas a memória será usada do mesmo jeito - não vamos entrar no 
mérito de arrays dinamicamente alocados agora.

## Atribuindo ou acessando o valor de uma posição

Como eu mencionei anteriormente, o fato de utilizarmos um array e ele ser alocado de forma
contínua na memória, nos permite acessar suas posições de forma direta e com uma complexidade
de **`O(1)`**. Mas como isso funciona exatamente?

Vamos tomar como exemplo o array de 6 posições mostrado anteriormente e vamos demonstrar uma
inserção e uma leitura. Teríamos o seguinte código:

```cpp [main.cpp]{4-6,7} meta-info=val
#include <iostream>

int main() {
    int array[6]; // Declaração

    array[3] = 8; // Inserção

    cout<< array[3] << endl; // Leitura

    return 0;
}
```

<br>

Agora nosso modelo estaria da seguinte forma:

<br>

![Ilustração representando a lógica de um array após inserir o valor 8 na quarta posição](/posts-img/estruturas-de-dados-01-03.png "Ilustração representando a lógica de um array")

<br>

E consequentemente, o valor exibido na saída, seria o <span class="text-primary font-bold">8</span> que acabamos de inserir.

Mas tem uma coisa que provavelmente você deve ter pensado. Como ele sabe onde é posição 3? Como o
programa consegue ir "direto ao ponto"? Parece mágica né? Mas é a matemática na sua pura forma. Vamos
ver como isso funciona na prática.

Antes, alguns conceitos básicos:

- Estamos lidando com um array de inteiros
- Um número inteiro tem o tamanho de 4 bytes (isso explica porque a diferença entre os endereços na imagem
  é sempre 4)

Ao declararmos um array no nosso programa, nós temos a sua posição inicial na
memória: <span class="text-primary font-bold">0x7f2840</span> - _o que corresponde à sua posição 0_ - e a quantidade de
posições que nosso array terá. 

A partir dessas informações, é possível realizar os cálculos de deslocamento
para qualquer operação com o array. O processo realizado por baixo dos panos
nesse cenário que mostramos seria:

<br>

<span class="text-white font-mono font-bold">Deslocamento = 3 -> 3x4 = <span class="text-primary">12</span></span>

<span class="text-white font-mono font-bold">Posição Inicial (Hex.) = <span class="text-primary">0x7f2840</span></span>

<span class="text-white font-mono font-bold">Posição Inicial (Decimal) = <span class="text-primary">8333376</span></span>

> :information_source: Usando a posição inicial somada ao deslocamento calculado, teremos a posição
> na memória que precisamos acessar.

<br>

<span class="text-white font-mono font-bold">0x7f2840 + c = <span class="text-primary">0x7f2840</span></span>
                                               
<span class="text-white font-mono font-bold">8333376 + 12 = <span class="text-primary">8333376</span></span>

<small>*No sistema numérico Hexadecimal a letra 'c' equivale a 12.</small>

<br>

Assim:

<br>

![Ilustração representando a lógica de um array destacando a posição '3'](/posts-img/estruturas-de-dados-01-06.png "Ilustração representando a lógica de um array destacando a posição '3'")

<br>

E <span class="text-primary font-bold">SHAZAM!</span> Assim temos acesso a exata posição do array que precisamos, fazendo com 
que sempre que utilizamos uma posição pelo seu índice, tenhamos um custo de **`O(1)`**.

## Conclusão

Basicamente, estes são os <span class="text-primary font-bold">pontos chave</span> de um array. Eles podem ser aplicados
em diferentes cenários no dia a dia da programação. Além de servirem como base
para algumas das estruturas de dados que vamos falar em breve.
