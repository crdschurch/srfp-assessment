# SRFP Assessment Scripts
The folder contains scripts to both generate data for SRFP's cr_form_metadata table and generate the JSON to create or update the SRFP form in formio. 
Both forms will need a csv export from [Question List Googlesheet](https://docs.google.com/spreadsheets/d/135JzKXABev7cTpywKEYmPeJxbzRws2DtD5O2BzSalt0/edit#gid=1720751359) that is maintained by stakeholders.
By default the scripts will look for ./questions.csv

## GenerateFormJson.ps1
This script will generate the JSON to post to https://{environment}-crds.form.io/{formname} to update or create an SRFP form. 
The only configuration needed is the form title from [formio](https://beta.form.io)
`$formTitle = "Srfp Assessment"; #This is the form title in formio`

## GenerateSRFPMetaDataSql.ps1
This script will generate a sql script to end date the current weights and category metadata in the cr_form_metadata table. 
The $form_id will need to be set and then the results will need to be run manually on whichever database is required. 