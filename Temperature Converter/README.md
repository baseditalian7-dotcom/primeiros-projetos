# Temperature Converter

Projeto simples de conversor de temperatura para praticar HTML, CSS, JavaScript e backend em Python.

## Funcionalidades

- Converter Celsius para Fahrenheit
- Converter Fahrenheit para Celsius
- Resultado atualizado em tempo real
- Controles em abas para escolher o tipo de conversao
- Botao para inverter o tipo de conversao
- Historico das ultimas 5 conversoes no navegador
- Programa Python simples no terminal para converter temperatura

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Historico de acoes no frontend usando LocalStorage
- Conversao em tempo real enquanto o usuario digita
- Layout diferente dos projetos anteriores, com painel lateral de resultado
- Seletor em abas no lugar de select simples
- Python mais basico, usando `input()`, `if`, `elif` e `else`

## Estrutura

```text
Temperature Converter/
├── backend/
│   ├── app.py
│   └── converter_service.py
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

Rode o programa:

```bash
python app.py
```

O programa pergunta a temperatura com `input()` e usa `if`, `elif` e `else` para escolher entre Celsius/Fahrenheit.
