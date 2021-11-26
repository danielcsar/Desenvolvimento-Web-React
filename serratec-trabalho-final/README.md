# Atividade 02 - Trabalho Final

Baixe ou crie um fork do projeto [serratec-atividade](https://github.com/YagoAzevedo/serratec-atividade).

Nesse projeto crie a implementação
dos seguintes requisitos:

**1.** Ao acessar a página principal com listagem dos alunos e carregar os dados via
axios.get, adicione os dados dos alunos no estado global da aplicação (via
context-api).

**2.** Ao acessar a tela de editar um aluno, antes de fazer a requisição para a api,
verifique se a lista de alunos já se encontra no estado global da aplicação. Se o
array estiver preenchido, pegue o aluno a ser editado do estado global e não da
requisição via axios.get.

**3.** Requisito EXTRA: Na tela de edição de alunos, caso não existam alunos
carregados no estado global, implemente um “carregando” (loading) baseado em
animação do Lottie da mesma forma que a tela de listagem dos alunos. Para testar
esse comportamento basta recarregar a página (f5), já estando na tela de edição do
aluno.

```
**Comandos necessários:** 

    yarn add styled-components
    yarn add @material-ui/icons
    yarn add @material-ui/core@next @emotion/react @emotion/styled @material-ui/icons @mui/material
    yarn add react-router-dom@6
    yarn add react-lottie
```
<br>
---

### _Colaboradores_

- [DANIEL CESAR](https://github.com/danielcsar)
- [MARCOS MORAES](https://github.com/marcosmoraesnf)
- [CAROL TARDIN](https://github.com/caroltardin)
- [NATHAN GUIMÃRAES](https://github.com/nathan-guimaraes)
- [ADRIAN MENEZES](https://github.com/AdrianMSilva)

---