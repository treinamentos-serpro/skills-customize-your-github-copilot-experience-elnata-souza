# 📘 Atividade: Building REST APIs with FastAPI

## 🎯 Objetivo

Construa uma API REST para gerenciar tarefas usando FastAPI, praticando endpoints HTTP, modelos de dados, validação e códigos de status.

## 📝 Tarefas

### 🛠️ Inicializar a API e Criar um Endpoint de Saúde

#### Descrição
Use o código inicial e configure o ambiente para executar uma API FastAPI. Crie um endpoint simples para confirmar que o serviço está disponível.

#### Requisitos
O programa concluído deve:

- Instalar FastAPI e Uvicorn com `python -m pip install fastapi "uvicorn[standard]"`.
- Renomear `starter-code.py` para `main.py` antes de executar o servidor.
- Implementar `GET /health`, retornando o JSON `{"status": "ok"}`.
- Executar localmente com `uvicorn main:app --reload`.
- Disponibilizar a documentação interativa em `/docs`.

### 🛠️ Criar e Consultar Tarefas

#### Descrição
Implemente os endpoints para criar tarefas e consultar a coleção ou uma tarefa específica. Cada tarefa deve ter um identificador, um título e um estado de conclusão.

#### Requisitos
O programa concluído deve:

- Implementar `POST /tasks` para criar uma tarefa e responder com status `201`.
- Implementar `GET /tasks` para listar as tarefas.
- Implementar `GET /tasks/{task_id}` para consultar uma tarefa pelo identificador.
- Responder com status `404` quando o identificador solicitado não existir.
- Manter os dados em memória enquanto o servidor estiver em execução.

### 🛠️ Atualizar e Remover Tarefas

#### Descrição
Complete a API permitindo atualizar todos os dados de uma tarefa existente e remover uma tarefa pelo identificador.

#### Requisitos
O programa concluído deve:

- Implementar `PUT /tasks/{task_id}` para atualizar o título e o estado de conclusão.
- Implementar `DELETE /tasks/{task_id}` para remover uma tarefa e responder com status `204`.
- Responder com status `404` quando a tarefa a atualizar ou remover não existir.
- Permitir testar todos os endpoints pela documentação interativa em `/docs`.