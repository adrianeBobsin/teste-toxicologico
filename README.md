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

**/token**

```json
{
    "client_id": "Synvia",
    "client_secret": "teste"
}
```

Para realizar o teste de uma amostra:

**/sample/sampleTest**

```json
{
  "codigo_amostra": "01",
	"Cocaína": 0.678,
	"Anfetamina": 0.1,
	"Metanfetamina": 0.1,
	"MDA": 0.1,
	"MDMA": 0,
	"THC": 0.1,
	"Morfina": 0.1,
	"Codeína": 0.1,
	"Heroína": 0.1,
	"Benzoilecgonina": 0,
	"Cocaetileno": 0,
	"Norcocaína": 0
}
```

Para listar as amostras já cadastradas:

**/sample/listAll**


## 🛠️ Construído com

* [Express](https://expressjs.com/) - O framework web usado
* [Passport](https://www.passportjs.org/) - Middleware de autenticação
* [Mongoose](https://mongoosejs.com/) - Mongodb object modeling

