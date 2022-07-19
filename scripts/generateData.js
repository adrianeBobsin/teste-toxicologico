const sampleScore = require('../models/sampleScore')
const credential = require('../models/credentials')
const mongoose = require('mongoose')
const { config } = require('../utils/config')

const generatePassingScore = async () => {
  const requestBody = {
    substances: [
      {
        name: 'Cocaína',
        passingScore: 0.5
      },
      {
        name: 'Anfetamina',
        passingScore: 0.2
      },
      {
        name: 'Metanfetamina',
        passingScore: 0.2
      },
      {
        name: 'MDA',
        passingScore: 0.2
      },
      {
        name: 'MDMA',
        passingScore: 0.2
      },
      {
        name: 'THC',
        passingScore: 0.05
      },
      {
        name: 'Morfina',
        passingScore: 0.2
      },
      {
        name: 'Codeína',
        passingScore: 0.2
      },
      {
        name: 'Heroína',
        passingScore: 0.2
      }
    ]
  }

  const saveScore = await sampleScore.create(requestBody)
  console.log(saveScore)
}

const generateCredentials = async () => {
  const requestBody = {
    client_id: 'e4cb3e0081d0f9fe54528a3d6b5f1169',
    client_secret: '46f86faa6bbf9ac94a7e459509a20ed0'
  }

  const saveCredential = await credential.create(requestBody)
  console.log(saveCredential)
}

const connectDatabase = async () => {
  /**
   * Connect to mongodb & listen for requests
   */

  const dbURI = config.mongodb

  mongoose.connect(dbURI, { useNewUrlParser: true }, function (err) {
    if (!err) return
    console.log('Falha na conexão do banco', err)
  })

  /**
   * Verify connecxaSAW3ion mongo
   */

  const connection = mongoose.connection

  connection.once('open', () => console.log('database is up'))
  setTimeout(() => {
    const state = connection.readyState
    console.log('state database:', state)
  }, 2000)
}

const configMain = async () => {
  await connectDatabase()
  //await generateCredentials()
  await generatePassingScore()
}

configMain()
