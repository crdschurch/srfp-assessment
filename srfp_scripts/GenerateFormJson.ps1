$formTitle = "Srfp Assessment"; #This is the form title in formio

$formHeaderTemplate = Get-Content .\formJsonHeader.json -raw
$outputFile = "C:\srfpmetadataload\form.json"
$formHeaderTemplate.Replace("{{title}}", $formTitle).Replace("{{nstitle}}", $formTitle.Replace(" ", "").toLower()) | Out-File -FilePath $outputFile
$questions = import-csv .\questions.csv #Exported csv from Weights - SRFP Questions List tab.
$count = 1;

foreach($question in $questions) {
    $questionTemplate = Get-Content .\questiontemplate.json -raw;
    $questionText = $question.Question;
    $modifiedTemplate = $questionTemplate.Replace("{{count}}", "$count").Replace("{{question}}", $questionText);
    if($count -lt $questions.Count) {
      $modifiedTemplate | Out-File -Append $outputFile
    } else {
        $modifiedTemplate.TrimEnd(',');
        $modifiedTemplate | Out-File -Append $outputFile
    }
    $count++;
}

"]}" >> $outputFile