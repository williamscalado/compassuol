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

Realizei algumas adições no projeto em relação ao controle dos Estados para poder garantir que as cidades só deverão ser cadastradas com um Estado válido

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
### Estrutura
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
- Cadastrar Cliente<br>
  `POST /client/`
### Estrutura JSON
```
{
	
    "name": "João",
    "lastName": "da silva",
    "gender": "Masculino",
    "birthdayDate": "21/07/2002",
    "email": "teste@gmail.com",
    "password": "1234567890",
    "idCity": "6229f491890a14a759180a58"
}

```
- Consultar cliente pelo nome<br>
  `GET /client/name/joão`
### Response Array
```
[
	{
		"_id": "622d46af2972e6752865f6b3",
		"name": "joão",
		"lastName": "da silva",
		"gender": "Masculino",
		"birthdayDate": "2002-07-21T00:00:00.000Z",
		"email": "teste@gmail.com",
		"idCity": "6229f491890a14a759180a58"
	}
]
```
- Consultar cliente pelo Id<br>
  `GET /client/622d46af2972e6752865f6b3`
### Response 
```
{
	"_id": "622d46af2972e6752865f6b3",
	"name": "joão",
	"lastName": "da silva",
	"gender": "Masculino",
	"birthdayDate": "2002-07-21T00:00:00.000Z",
	"email": "teste@gmail.com",
	"idCity": "6229f491890a14a759180a58"
}
```
- Remover cliente<br>
`DELETE /client/622d46af2972e6752865f6b3`

- Alterar o nome do cliente<br>
`PATCH /client/622d46af2972e6752865f6b3`
### Estrutura JSON
```
{
	
    "name": "João",
    "lastName": "da silva",
    "gender": "Masculino",
    "birthdayDate": "21/07/2002",
    "email": "teste@gmail.com",
    "password": "1234567890",
    "idCity": "6229f491890a14a759180a58"
}
```


### 🔧 Instalação

Ao clonar o repositório basta executar:
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
