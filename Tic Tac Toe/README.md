# Tic Tac Toe

Projeto simples de jogo da velha com HTML, CSS, JavaScript e Python básico no terminal.

## Funcionalidades

- Jogar com dois jogadores no navegador
- Alternar automaticamente entre X e O
- Detectar vencedor
- Detectar empate
- Reiniciar partida
- Zerar placar
- Destacar a combinação vencedora
- Python usando listas e `for` para checar vitória

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com estrutura diferente: placar lateral e tabuleiro principal
- Placar salvo no LocalStorage
- Destaque visual das casas vencedoras
- Python com lista do tabuleiro
- Python com lista de combinações vencedoras
- Uso de `for` para percorrer listas e verificar vitória

## Estrutura

```text
Tic Tac Toe/
├── backend/
│   ├── app.py
│   └── game_logic.py
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── .gitignore
└── README.md
```

## Como abrir o frontend

Abra este arquivo no navegador:

```text
frontend/index.html
```

## Como rodar o Python

Entre na pasta do backend:

```bash
cd backend
```

Rode:

```bash
python app.py
```

O jogo no terminal pergunta a posição de 1 a 9 e usa listas para guardar o tabuleiro.
