module.exports = (sample, substances) => {
  const convertObjectSampleToArrayKey = Object.entries(sample)

  let checkPositiveCocaina
  ;(sample['Benzoilecgonina'] || sample['Norcocaína'] || sample['Cocaetileno']) >= 0.05
    ? (checkPositiveCocaina = true)
    : (checkPositiveCocaina = false)
  let drugsDetected = []

  convertObjectSampleToArrayKey.forEach(([nameDrug, passingScore]) => {
    let [identifySubstance] = substances.filter(
      drug => drug.name == nameDrug && passingScore >= drug.passingScore
    )
    if (identifySubstance && identifySubstance.name == 'Cocaína') {
      if (checkPositiveCocaina) {
        drugsDetected.push({
          name: identifySubstance.name,
          quantityDetected: passingScore
        })
      }
    } else if (identifySubstance) {
      drugsDetected.push({
        name: identifySubstance.name,
        quantityDetected: passingScore
      })
    }
  })

  return drugsDetected
}
