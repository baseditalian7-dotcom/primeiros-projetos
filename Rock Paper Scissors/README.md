# Rock Paper Scissors

Projeto simples de Pedra, Papel e Tesoura contra uma IA fake.

## Funcionalidades

- Jogar contra uma IA fake no navegador
- Escolher entre Pedra, Papel e Tesoura
- Ver escolha do jogador e da IA
- Placar salvo no LocalStorage
- Historico das ultimas 5 rodadas
- Python no terminal com IA fake usando escolha aleatoria

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend em formato de arena jogador vs IA
- Pequeno atraso no JavaScript para simular a IA pensando
- Python usando dicionarios para nomes, regras e placar
- Python usando `random.choice()` para a IA fake escolher jogada

## Estrutura

```text
Rock Paper Scissors/
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

O Python usa dicionarios para guardar o placar e as regras do jogo.
