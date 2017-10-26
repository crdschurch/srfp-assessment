$form_id = 57; #Update this to the form_id that is in the ministry platform forms table. 

function getWeight ($weight) {
    
    switch($weight) 
    {
        "C" { return -3 }
        "L" { return 3 }
        "M" { return 7 }
        "H" { return 10 }
    }

}

$outputFile = "C:\srfpmetadataload\questions.sql"
$questions = import-csv .\questions.csv #Exported csv from Weights - SRFP Questions List tab.
$count = 1;
$date = Get-Date -Format yyyy-MM-dd;
$yesterday = (get-date (get-date).addDays(-1) -UFormat "%Y-%m-%d");

Out-File $outputFile;

"UPDATE CR_FORM_METADATA SET END_DATE = '$yesterday 23:59' WHERE FORM_ID = $form_id" >> $outputFile

foreach($question in $questions) {
    $weight = getWeight($question.Weight.Trim());
    $questionText = $question.Question.Replace("'", "''");
    $category = $question.Category;
    Add-Content $outputFile "INSERT INTO cr_form_metadata VALUES ($form_id, 'tableQuestion$count', 'weight', $weight,  '$date', null)";
    Add-Content $outputFile "INSERT INTO cr_form_metadata VALUES ($form_id, 'tableQuestion$count', 'category', '$category', '$date', null)"
    $count++;
}
