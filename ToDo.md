Possible error in test case data as publish on CDS Connect. The error comes to light after the test data has apparenlty aged a couple of years. The problem is in the Encounter.period resource of some excluded patients. In the test data the Encounter period is presented without start or end made explicit: 

  period: date

for example:

  period 2019-04-05T00:00:00.000Z

The convention for a period that has a start but not an end value is to assume that the event (in this case an Encounter) is ongoing. It appears that the algorithm that translates period 2019-04-05T00:00:00.000Z as: 

  "period:" {
    "start": 2019-04-05T00:00:00.000Z
    }

  The result is that the algorithm may fail to flag an encounter that is beyond the lookback period because technically the encounter is still ongoing. 

  The fix is to express the date as and end:    

  period: 
    end: 2019-04-05T00:00:00.000Z
    
or more formally, with a start and end: 

  period: 
    start: 2019-04-05T00:00:00.000Z
    end: 2019-04-05T00:15:00.000Z

This applies to excluded_recent_behavioral_counseling_male_4, for example. 

Does this mean that encounters that have no end are still ongoing even when marked as 'finished'?

This issue occurs. Search the entire project for "period:" and you'll find them all. 

This issue has not been submitted to CDS Connect. 