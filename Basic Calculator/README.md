# Basic Calculator

Projeto simples de calculadora basica para praticar HTML, CSS, JavaScript e um mini backend em Python.

## Funcionalidades

- Somar dois numeros
- Subtrair dois numeros
- Multiplicar dois numeros
- Dividir dois numeros
- Calcular direto no JavaScript
- Calcular usando um backend Python simples
- Interface responsiva e facil de entender

## Estrutura

```text
Basic Calculator/
├── backend/
│   ├── app.py
│   └── calculator.py
└── frontend/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

## Como abrir o frontend

Abra este arquivo no navegador:

```text
frontend/index.html
```

## Como rodar o backend

Entre na pasta do backend:

```bash
cd backend
```

Rode o servidor:

```bash
python app.py
```

Depois disso, o backend ficara disponivel em:

```text
http://localhost:8000
```

## Endpoint

```text
POST /calculate
```

Exemplo de JSON:

```json
{
  "firstNumber": 10,
  "secondNumber": 5,
  "operation": "multiply"
}
```

Resposta:

```json
{
  "result": 50
}
```

## Observacao

Este projeto foi feito para ser simples, didatico e adequado para quem esta no inicio da programacao.
