# 📘 Atividade: Personalize Sua Experiência com o GitHub Copilot

## 🎯 Objetivo

Configure instruções personalizadas para orientar o GitHub Copilot sobre o contexto deste projeto e os padrões esperados ao criar ou editar tarefas em Markdown. (ok)

## 📝 Tarefas

Lista de tarefas para executar

### 🛠️ Criar Instruções Gerais do Projeto

#### Descrição
Crie o arquivo `.github/copilot-instructions.md` para apresentar o projeto ao GitHub Copilot e registrar as diretrizes que se aplicam ao trabalho neste repositório.

#### Requisitos
O arquivo deve:

- Descrever o propósito educacional do projeto.
- Resumir a estrutura de diretórios e apontar para os recursos principais.
- Orientar a manutenção de estilos consistentes e de nomes descritivos.
- Recomendar conteúdo claro, amigável ao aluno e com objetivos de aprendizado definidos.

### 🛠️ Criar Instruções para Tarefas em Markdown

#### Descrição
Crie `.github/instructions/assignments.instructions.md` para orientar o GitHub Copilot ao criar ou editar arquivos Markdown dentro de `assignments/`.

#### Requisitos
O arquivo deve:

- Incluir frontmatter com uma descrição e `applyTo: "assignments/**/*.md"`.
- Orientar o uso de `templates/assignment-template.md` e a criação das tarefas em arquivos `README.md`.
- Exigir todas as seções do template e manter seus cabeçalhos e emojis exatamente como definidos nele.
- Orientar descrições claras e requisitos específicos e mensuráveis, sem seções extras não solicitadas.

