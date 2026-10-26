# 📘 Atividade: Testando APIs com pytest

## 🎯 Objetivo

Aprenda a verificar o comportamento de endpoints FastAPI com testes automatizados usando `pytest` e `TestClient`. Você praticará asserções sobre respostas JSON e códigos de status HTTP sem precisar iniciar um servidor manualmente.

## 📝 Tarefas

### 🛠️ Preparar o Ambiente de Testes

#### Descrição
Configure o ambiente para testar a API fornecida no arquivo `starter-code.py`.

#### Requisitos
O programa concluído deve:

- Instalar as dependências com `python -m pip install fastapi pytest httpx`.
- Renomear `starter-code.py` para `main.py`.
- Criar um arquivo chamado `test_main.py` para os testes.
- Importar a aplicação e criar um cliente de teste:

  ```python
  from fastapi.testclient import TestClient
  from main import app

  client = TestClient(app)
  ```

### 🛠️ Testar o Endpoint de Saúde

#### Descrição
Escreva um teste para confirmar que o endpoint de saúde responde corretamente e informa que a API está disponível.

#### Requisitos
O programa concluído deve:

- Fazer uma requisição `GET` para `/health` usando o `TestClient`.
- Verificar que a resposta tem status `200`.
- Verificar que o JSON da resposta é `{"status": "ok"}`.
- Executar os testes com `pytest -q`.

### 🛠️ Testar Respostas de Sucesso e Erro

#### Descrição
Teste a consulta de uma tarefa existente e de um identificador que não existe para confirmar que a API retorna os status HTTP apropriados.

#### Requisitos
O programa concluído deve:

- Fazer uma requisição `GET` para `/tasks/1` e verificar o status `200`.
- Verificar que a resposta da tarefa inclui `id`, `title` e `completed`.
- Fazer uma requisição `GET` para `/tasks/999` e verificar o status `404`.
- Executar todos os testes com `pytest -q` e confirmar que passam.
