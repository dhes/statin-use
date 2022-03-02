function expectOK(testCase) {
  return true;
}

function expectCards(testCase) {
  if (testCase.expected != null) {
    return testCase.expected.Recommendation != null;
  }
}

function expectCardsContent(testCase) {
  if (expectCards(testCase)) {
    return {
      summary: 'Statin Use for the Primary Prevention of CVD',
      indicator: 'info',
      detail: testCase.expected.Recommendation,
      source: {
        label: 'CDS Connect: Statin Use for the Primary Prevention of CVD in Adults',
        url: 'https://cds.ahrq.gov/cdsconnect/artifact/statin-use-primary-prevention-cvd-adults'
      }
    };
  }
}

module.exports = { expectOK, expectCards, expectCardsContent };