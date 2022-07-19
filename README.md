# Análise toxicológica

API REST desenvolvida para análise de amostra toxicológica, informando se o resultado é positivo ou 
negativo de acordo com parâmetros pré-definidos.  

### 🔧 Instalação

Para utilizar o projeto localmente faça o clone da aplicação e rode com o comando 

```node
npm start
```

Link do projeto no Heroku: https://teste-toxicologico.herokuapp.com/

## ⚙️ Utilizando a aplicação

Necessário primeiramente gerar o token:

- /token

```json
{
    "client_id": "Synvia",
    "client_secret": "teste"
}
```

Para realizar o teste de uma amostra:

/sample/sampleTest

```json
{
  "codigo_amostra": "01",
	"Cocaína": 0.678,
	"Anfetamina": 1.1,
	"Metanfetamina": 1.1,
	"MDA": 1.1,
	"MDMA": 1,
	"THC": 1,
	"Morfina": 1.1,
	"Codeína": 1.1,
	"Heroína": 1.1,
	"Benzoilecgonina": 1,
	"Cocaetileno": 1,
	"Norcocaína": 1
}
```

Para listar as amostras já cadastradas:

/sample/list



## 🛠️ Construído com

* [Express](https://expressjs.com/) - O framework web usado
* [Passport](https://www.passportjs.org/) - Middleware de autenticação
* [Mongoose](https://mongoosejs.com/) - Mongodb object modeling

