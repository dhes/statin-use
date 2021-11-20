logigahealth patient Stephen A Lewis has a blank aaa card. It should show that he needs a tobacco history. Similar for frank v taylor and Joshua P Williams. Oddly, Robert P Hill passes the same test. 

Hill: 
 {
          "fullUrl": "https://api.logicahealth.org/DansCDSHooksAPIGuide/data/Observation/smart-smokingstatus-18",
          "resource": {
            "resourceType": "Observation",
            "id": "smart-smokingstatus-18",
            "meta": {
              "versionId": "4",
              "lastUpdated": "2021-11-16T21:32:13.000+00:00",
              "source": "#6HFII80SjriAIzzL"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Tobacco smoking status: Unknown if ever smoked</div>"
            },
            "identifier": [
              {
                "use": "official",
                "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                "value": "smart-18"
              }
            ],
            "status": "final",
            "category": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "social-history",
                    "display": "Social History"
                  }
                ],
                "text": "Social History"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "72166-2",
                  "display": "Tobacco smoking status"
                }
              ],
              "text": "Tobacco smoking status"
            },
            "subject": {
              "reference": "Patient/smart-1098667"
            },
            "effectiveDateTime": "2016-02-05",
            "performer": [
              {
                "reference": "Practitioner/smart-Practitioner-71081332"
              }
            ],
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "266927001",
                  "display": "Tobacco smoking consumption unknown (finding)"
                }
              ],
              "text": "Tobacco smoking consumption unknown (finding)"
            }
          },
          "search": {
            "mode": "match"
          }
        }
      ]
    }

Williams: 
{
          "fullUrl": "https://api.logicahealth.org/DansCDSHooksAPIGuide/data/Observation/smart-smokingstatus-45",
          "resource": {
            "resourceType": "Observation",
            "id": "smart-smokingstatus-45",
            "meta": {
              "versionId": "1",
              "lastUpdated": "2020-07-15T02:51:36.000+00:00",
              "source": "#cdCgXxWeLGLEFp8f"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Tobacco smoking status: Unknown if ever smoked</div>"
            },
            "identifier": [
              {
                "use": "official",
                "system": "http://www.bmc.nl/zorgportal/identifiers/observations",
                "value": "smart-45"
              }
            ],
            "status": "final",
            "category": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                    "code": "social-history",
                    "display": "Social History"
                  }
                ],
                "text": "Social History"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "72166-2",
                  "display": "Tobacco smoking status"
                }
              ],
              "text": "Tobacco smoking status"
            },
            "subject": {
              "reference": "Patient/smart-1137192"
            },
            "effectiveDateTime": "2016-07-31",
            "performer": [
              {
                "reference": "Practitioner/smart-Practitioner-72080416"
              }
            ],
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "266927001",
                  "display": "Unknown if ever smoked"
                }
              ],
              "text": "Unknown if ever smoked"
            }
          },
          "search": {
            "mode": "match"
          }
        }
      ]
    },

The difference is the display value of the code. Maybe I need to change the cql from: 

  MostRecentValidSmokingStatus = "Smoking status unknown"

to

  MostRecentValidSmokingStatus ~ "Smoking status unknown"

  ??? replace .value  = ... with ~ ...