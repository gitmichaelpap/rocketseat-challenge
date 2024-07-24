<h1 align="center" style="text-align: center;">
  Food Explorer
</h1>

> Cardápio digital para um restaurante

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pages">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#structure">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#users">Personas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<h2 id="project">📁 Projeto</h2>

O projeto Food Explorer consiste no desafio final do programa Explorer da Rocketseat. Trata-se de uma aplicação de cardápio digital para um restaurante fictício.

O front-end [aqui](https://main--rocketseat-challenge-front.netlify.app/) e back-end [aqui](https://rocketseat-challenge-back.onrender.com) do projeto, está disponível neste repositório.

<p align="center">
  
  <img src="https://main--rocketseat-challenge-front.netlify.app/">
</p>

<h2 id="pages">📃 Páginas</h2>

A aplicação conta com as seguintes páginas:

- Login
- Cadastro
- Home
- Detalhes do prato
- Novo prato
- Editar prato
- Favoritos

<h2 id="structure">📌 Estrutura</h2>

O projeto conta com as seguintes tabelas:

- Usuários
- Pratos
- Ingredientes dos pratos
- Favoritos
- Carrinhos
- Itens dos carrinhos
- Pedidos
- Itens dos pedidos

<h2 id="features">🛠️ Funcionalidades</h2>

A aplicação apresenta as seguintes funcionalidades:

- Login
- Cadastro
- Cadastrar pratos
- Mostrar pratos cadastrados
- Filtrar pratos
- Mostrar detalhes do prato
- Favoritar prato
- Remover prato dos favoritos
- Mostrar favoritos
- Adicionar prato ao carrinho
- Editar prato
- Excluir prato
- Logout

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido com as seguintes tecnologias:

- Axios
- ReactJS
- ReactDOM
- React Icons
- React Responsive
- React Router Dom
- Styled Components
- Swiper
- ViteJS
-
- Bcrypt.js
- CORS
- Express.js
- express-async-errors
- JSON Web Token
- Knex.js
- Node.js
- Multer
- SQLite
- SQLite3

<h2 id="usage">💡 Utilização</h2>

Você também pode executá-la em sua máquina localmente. Certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/gitmichaelpap/rocketseat-challenge
```

2. Instale as dependências:

Front:

```

$ cd front
$ npm install

```

Back:

```

$ cd back
$ npm install
$ npm run migrate

```

3. Inicie o servidor:

```
$ npm run dev (na pasta RAIZ)
```

<h2 id="users">👩🏾‍💻 Personas</h2>

O Food Explorer possui duas personas principais: o admin e o usuário. Você pode criar um novo usuário ou testar a aplicação usando as seguintes informações de login:

Admin:

- E-mail: admin@email.com
- Senha: admin123

O admin tem acesso privilegiado e pode gerenciar o cardápio, adicionando, editando e removendo pratos, além de executar outras tarefas administrativas.

Usuário:

- E-mail: user@email.com
- Senha: user123

O usuário tem acesso restrito às funcionalidades da aplicação, podendo visualizar o cardápio, filtrar pratos, ver detalhes de pratos específicos, favoritar pratos e adicionar pratos ao carrinho.

<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

---
