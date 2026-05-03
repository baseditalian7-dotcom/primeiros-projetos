# Password Generator

Projeto simples de gerador de senha com tamanho customizavel.

## Funcionalidades

- Escolher tamanho da senha
- Incluir letras maiusculas
- Incluir letras minusculas
- Incluir numeros
- Incluir simbolos
- Gerar senha aleatoria
- Copiar senha no navegador
- Mostrar forca da senha

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com layout de ferramenta, diferente do cronometro
- Preview grande da senha gerada
- Botao para copiar senha
- Indicador de forca da senha
- Python usando modulo `string`
- Python usando lista de caracteres permitidos
- Python usando `"".join()` para transformar lista em texto

## Estrutura

```text
Password Generator/
├── backend/
│   ├── app.py
│   └── password_logic.py
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
