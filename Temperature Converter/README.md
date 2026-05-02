# Temperature Converter

Projeto simples de conversor de temperatura para praticar HTML, CSS, JavaScript e backend em Python.

## Funcionalidades

- Converter Celsius para Fahrenheit
- Converter Fahrenheit para Celsius
- Resultado atualizado em tempo real
- Controles em abas para escolher o tipo de conversao
- Botao para inverter o tipo de conversao
- Historico das ultimas 5 conversoes no navegador
- Backend Python com rota de conversao
- Teste simples do servico de conversao

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Historico de acoes no frontend usando LocalStorage
- Conversao em tempo real enquanto o usuario digita
- Layout diferente dos projetos anteriores, com painel lateral de resultado
- Seletor em abas no lugar de select simples
- Backend com funcao de conversao isolada em um service
- Arquivo de teste simples para validar a regra do backend

## Estrutura

```text
Temperature Converter/
├── backend/
│   ├── app.py
│   ├── converter_service.py
│   └── tests/
│       └── test_converter_service.py
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

## Como rodar o backend

Entre na pasta do backend:

```bash
cd backend
```

Rode o servidor:

```bash
python app.py
```

Endpoint:

```text
POST /convert
```

Exemplo de JSON:

```json
{
  "value": 25,
  "conversionType": "celsiusToFahrenheit"
}
```

Resposta:

```json
{
  "input": 25,
  "inputUnit": "Celsius",
  "result": 77,
  "resultUnit": "Fahrenheit"
}
```

## Como rodar o teste do backend

Na pasta `backend`, rode:

```bash
python tests/test_converter_service.py
```
