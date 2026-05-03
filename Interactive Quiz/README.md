# Interactive Quiz

Projeto simples de quiz interativo com perguntas, respostas e pontuacao final.

## Funcionalidades

- Mostrar perguntas uma por vez
- Mostrar alternativas
- Validar resposta certa ou errada
- Mostrar feedback apos responder
- Mostrar progresso do quiz
- Exibir pontuacao final
- Reiniciar o quiz

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com layout de quiz, painel de progresso e tela final
- Feedback explicando a resposta depois do clique
- Python usando lista de dicionarios para guardar perguntas
- Python usando `enumerate()` para numerar perguntas e respostas
- Python calculando porcentagem da pontuacao final

## Estrutura

```text
Interactive Quiz/
├── backend/
│   ├── app.py
│   ├── questions.py
│   └── quiz_logic.py
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
