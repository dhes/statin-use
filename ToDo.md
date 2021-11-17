https://launch.smarthealthit.org/v/r4/fhir

to do - make a more meaningful card for ‘smoking status unknown’
		if smoking status is unknown the card returns nothting
    presently if there is no smoking status it will say so
    but if there is an observation ‘smoking status unknown’ it is silent. 
	incorporate ‘never smoker’ into card
		if never smoker lets make the card say no testing is needed
	add logic in cql for former smoker
		add codeset and logic so that former smoking status is repeated back and test is recommended
    right now it only triggers on current smokers
  add a short phrase "no testing is needed" or "abdominal aorta ultrasound recommended"

Milestone - on 2021-11-15 I ran the CQL serfvice against logicahealth.org and got expected responses. 
            Why do I only get the first 50 observations? Pagination? How to override?
            'status unknown': null

            'light smoker': {
  "cards": [
    {
      "summary": "Screening for abdominal aortic aneurysm in men who ever smoked",
      "indicator": "info",
      "detail": "Experts (i.e., [The U.S. Preventive Services Task Force](https://www.uspreventiveservicestaskforce.org/Page/Name/about-the-uspstf)) find that men your age that ever smoked should have an ultrasound performed on their aorta to make sure there is not aneurysm.\n\nHere are some links to resources to help you get started:\n\n* [The U.S. Preventive Services Task Force Recommendation on “Abdominal Aortic Aneurysm: Screening”](ttps://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening)",
      "source": {
        "label": "USPSTF Abdominal Aortic Aneurysm: Screening",
        "url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening"
      },
      "extension": {
        "information": []
      }
    }
  ]
}

            'former smoker': null

2021-11-16 
 - add test(s) to make check if most recent observation is being used in case of differently dated smoking status observations having contradictory values, e.g.
  - add test for most recent status unknown?

2021-11-17
  ICD10: Aneurysm abdominal (aorta) I71.4
  SNOMEDCT: 233985008 | Abdominal aortic aneurysm (disorder) |
  SNOMEDCT: 429205001 | History of repair of aneurysm of abdominal aorta (situation) |