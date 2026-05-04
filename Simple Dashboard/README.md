# Simple Dashboard

Projeto simples de dashboard com cards, metricas fake e backend Python evoluindo um pouco.

## Funcionalidades

- Cards com receita, vendas, visitantes e conversao
- Filtro visual por periodo: mes, semana e hoje
- Grafico de barras com receita fake
- Tabela de canais
- Resumo com ticket medio e meta
- Python com dados fake e relatorio no terminal

## O que foi adicionado de novo

Comparado com os projetos anteriores, este adiciona:

- Frontend com estrutura de dashboard real: sidebar, topbar, cards, grafico e tabela
- Renderizacao de metricas fake a partir de objetos JavaScript
- Filtro de periodo que troca todos os dados da tela
- Python usando listas de dicionarios com dados mais completos
- Python usando `sorted()` com `lambda` para ranking
- Python usando `datetime` para colocar data no relatorio
- Python usando `with open` para salvar relatorio `.txt`
- Separacao em `data.py`, `dashboard_service.py` e `app.py`

## Estrutura

```text
Simple Dashboard/
├── backend/
│   ├── app.py
│   ├── dashboard_service.py
│   └── data.py
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

O programa permite ver resumo, melhor dia, ranking de canais e exportar um relatorio simples.
