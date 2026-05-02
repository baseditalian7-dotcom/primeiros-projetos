# Digital Clock

Projeto simples de relógio digital em tempo real, feito com HTML, CSS, JavaScript e um pequeno backend em Java.

## Funcionalidades

- Mostra o horário atual em tempo real
- Atualiza os segundos automaticamente com JavaScript
- Mostra a data atual
- Mostra o dia da semana
- Permite trocar entre 4 fusos horários
- Backend Java simples para praticar classes e manipulação de datas

## Estrutura

```text
Digital Clock/
├── backend/
│   └── src/
│       ├── Main.java
│       └── TimeService.java
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

## Como rodar o backend Java

Entre na pasta do backend:

```bash
cd backend/src
```

Compile:

```bash
javac Main.java TimeService.java
```

Execute:

```bash
java Main
```

## Observacao

O frontend atualiza o relógio com JavaScript. O backend Java existe como parte do estudo para praticar organização, classes e uso de datas.
