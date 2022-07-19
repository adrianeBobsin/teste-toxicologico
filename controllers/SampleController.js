const sample = require('../models/samples')
const sampleScore = require('../models/sampleScore')
const sampleVerify = require('../utils/sample')
const { config } = require('../utils/config')
const jwt = require('jsonwebtoken')

class SampleController {
  async sampleTest(req, res) {
    try {
      const {
        codigo_amostra,
        Cocaína,
        Anfetamina,
        Metanfetamina,
        MDA,
        MDMA,
        THC,
        Morfina,
        Codeína,
        Heroína,
        Benzoilecgonina,
        Cocaetileno,
        Norcocaína
      } = req.body
      delete req.body.codigo_amostra
      const samples = req.body

      const token = req.headers.authorization.split(' ')[1]
      if (!jwt.verify(token, config.secretKey)) {
        res.status(404).json({ message: 'Token invalid.', e })
      }

      let [{ substances }] = await sampleScore.find()
      const resultSampleVerify = sampleVerify(samples, substances)
      const payloadToSaveSample = {
        code: codigo_amostra,
        drugsDetected:
          resultSampleVerify && resultSampleVerify.length > 0 ? resultSampleVerify : [],
        drugDetected: resultSampleVerify && resultSampleVerify.length > 0 ? true : false,
        cocaina: Cocaína,
        anfetamina: Anfetamina,
        metanfetamina: Metanfetamina,
        mda: MDA,
        mdma: MDMA,
        thc: THC,
        morfina: Morfina,
        codeina: Codeína,
        heroina: Heroína,
        benzoilecgonina: Benzoilecgonina,
        cocaetileno: Cocaetileno,
        norcocaina: Norcocaína
      }
      await sample.create(payloadToSaveSample)
      const responseJson = {
        codigo_amostra,
        amostraPositiva: resultSampleVerify && resultSampleVerify.length > 0 ? true : false,
        drogasDetectadas:
          resultSampleVerify && resultSampleVerify.length > 0
            ? resultSampleVerify.map(drug => {
                return drug.name
              })
            : null
      }
      res.status(200).json(responseJson)
    } catch (err) {
      res.status(400).json({ message: 'Error, try again later', err })
    }
  }

  async listSamples(req, res) {
    await sample
      .find()
      .then(sample => {
        const token = req.headers.authorization.split(' ')[1]
        if (!jwt.verify(token, config.secretKey)) {
          res.status(404).json({ message: 'Token invalid.', e })
        }
        if (!sample) res.status(404).json({ mensagem: 'Error, sample dont finded.' })
        res.status(200).json(sample)
      })
      .catch(err => {
        res.status(400).json({ mensagem: 'Error trying to find the sample', err })
      })
  }
}

module.exports = new SampleController()
