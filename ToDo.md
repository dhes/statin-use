- create troubleshooting card to expose inclusion and exclusion details for statin-us, like

- strictly speaking HasMissingOrOldData doesn't need to trigger if IsSmoker is null as long as one of the other three risk factors is not null. On the other hand, don't you want to take a smoking history?

- see comment tagged with DH where a smoking status of unknown can result in a patient being labelle a non-smoker.

- if there is any CVD risk factor present you don't need to gather any more risk-factor information so NeedMoreInformation should be null. Example - if smoking status is 'smoker' then you don't need HDL, LDL or CVD risk assessment. 