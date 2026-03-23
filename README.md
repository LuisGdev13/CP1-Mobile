# 📱 Pesquisa de Satisfação - Formulario

## 📌 Descrição

Este é um aplicativo desenvolvido em **React Native com Expo**, com o objetivo de praticar conceitos fundamentais de desenvolvimento mobile, como:

* Manipulação de estados (`useState`)
* Estrutura de interface (`SafeAreaView`)
* Efeitos colaterais (`useEffect`)
* Componentização
* Validação de formulário
* Estilização de interface

O app permite cadastrar informações de um aluno e exibir esses dados em tela de forma organizada.

---

## 🚀 Funcionalidades

✅ Pesquisa de Satisfação de aluno com os campos:

* Nome
* Curso
* Disciplina favorita
* Descrição

✅ Validação de formulário:

* Impede envio com campos vazios usando (`trim()`)

✅ Exibição dos dados:

* Mostra os dados preenchidos em um componente separado

✅ Persistência visual:

* Os dados exibidos não são alterados ao editar os inputs novamente

✅ Uso do `useEffect`:

* Monitora alterações nos dados salvos

---

## 🧠 Conceitos aplicados

### 🔹 useState

Utilizado para controlar os dados digitados nos inputs e também os dados salvos.

---

### 🔹 Separação de estados

O projeto utiliza dois tipos de estado:

* **Estados do formulário** → controlam os inputs
* **Estado de dados salvos** → mantém os dados fixos exibidos

---

### 🔹 useEffect

Executa ações quando os dados do formuario são salvos.

---

## 🎨 Interface

O app possui:

* Layout centralizado
* Inputs estilizados
* Agrupamento em "box"
* Destaque entre **labels** e **valores**
* Botão de envio estilizado

---

## 🧩 Componentização

Os dados são exibidos em um componente separado:

```
/components
  └── RenderizarDados.jsx
```

Isso melhora:

* Organização
* Reutilização
* Legibilidade do código

---

## 📂 Estrutura do Projeto

```
📁 projeto
 ┣ 📁 components
 ┃ ┗ 📄 RenderizarDados.jsx
 ┣ 📄 App.js
 ┣ 📄 package.json
```

---

## ▶️ Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Execute no:

* Emulador Android
* Emulador iOS
* App Expo Go

---

## 🧑‍💻 Autor

@LuisGdev13

---

## 📌 Observação

Este projeto tem foco educacional, explorando boas práticas de:

* Organização de código
* Separação de responsabilidades
* Experiência do usuário (UX)

---
