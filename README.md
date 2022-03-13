# Desafio compassuol

Neste desafio foi solicitado desenvolver uma API 


### 📋 Pré-requisitos
Foi solicitado o desenvolvimento de uma API com as seguintes necessidades:

- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

Considere o cadastro com dados básicos:

- Cidades: nome e estado
- Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.

Realizei algumas adições no projeto em relação ao constrole dos Estados para poder garantir que as cidades só deverão ser cadastradas com um Estado válido

- Mostar todos os Estados
- consultar Estado pelo ID
- consultar Estado por sua sigla
 
 

## 📦 Endpoints de aplicação

### Estado
- Mostar todos os Estados<br>
`GET /states/`
### Response Array

```
[
	{
		"id": 11,
		"sigla": "RO",
		"nome": "Rondônia",
		"regiao": {
			"id": 1,
			"sigla": "N",
			"nome": "Norte"
		}
	},
	{
		"id": 12,
		"sigla": "AC",
		"nome": "Acre",
		"regiao": {
			"id": 1,
			"sigla": "N",
			"nome": "Norte"
		}
	}
  ...
```
- consultar Estado pelo ID<br>
`GET /states/id/16`
### Response

```
{
	"id": 16,
	"name": "Amapá",
	"sigla": "AP"
}
```
- consultar Estado por sua sigla<br>
`GET /states/stateAcronym/PB`
### Response

```
{
	"id": 25,
	"name": "Paraíba",
	"sigla": "PB"
}
```



### Cidade
- Cadastrar cidade<br>
`POST /city/`
### Response

```
{
    "name": "Recife",
    "stateId": "26"
}
```
- Consultar cidades pelo estado<br>
`GET /city/state/26`
### Response Array

```
[
	{
		"_id": "6229f522890a14a759180a62",
		"name": "abreu e lima",
		"stateId": "26"
	},
	{
		"_id": "6229f52a890a14a759180a65",
		"name": "recife",
		"stateId": "26"
	}
]
```
- Consultar cidade pelo nome<br>
  `GET /city/name/recife`
### Response 

```
{
	"id": "6229f52a890a14a759180a65",
	"name": "recife",
	"stateId": "26"
}
```

### Cliente
- Cadastrar Cliente
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

```

```



### 🔧 Instalação

Ao clonar o repositório basta executar a instalação dos módulos do NodeJS.

```
yarn install
```

E logo após é só rodar a aplicação:

```
yarn dev
```

## 🛠️ O que foi usado!
Usei as seguintes ferramentas e tecnolôgias
* [VS Code](#) 
* [NodeJS](#) 
* [TypeScript](#)
* [MongoDB](#) 
* [Insomnia](#) 


---
⌨️ com ❤️ por [Williams Calado](https://github.com/williamscalado) 😊
