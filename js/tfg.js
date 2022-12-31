//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const btnCalculateTFG = document.getElementById('btnCalculateTFG');
var tfgGenderResultMan = document.getElementById('tfgGenderResultMan');
var tfgGenderResult = document.getElementById('tfgGenderResult');
var tfgSituationResult = document.getElementById('tfgSituationResult');
const inputTFGResults = document.getElementById('inputTFGResults');
var tfgResult = document.getElementById('tfgResult');
const tfgButtonsResult = document.getElementById('tfgButtonsResult');


//Calcula a TFG
btnCalculateTFG.addEventListener('click', ()=>{

     var tfg_man = document.getElementById('tfg_man').value;
     var tfg_woman = document.getElementById('tfg_woman').value;
     var tfgCreatinine = parseFloat(document.getElementById('tfgCreatinine').value);
     var tfgWeight = parseFloat(document.getElementById('tfgWeight').value);
     var tfgAge = parseFloat(document.getElementById('tfgAge').value);

     var genderTFG = document.getElementsByName('genderTFG');

     inputTFGResults.classList.remove('d-none');
     tfgButtonsResult.classList.remove('d-none');

     for(var i = 0; i < genderTFG.length; i++){
          if(genderTFG[i].checked && genderTFG[i].value == '1'){

               var tfgResultMan = ((140 - tfgAge) * tfgWeight)/(tfgCreatinine * 72);

               tfgGenderResult.value = 'Masculino';

               if(tfgResultMan >= 90){
                    tfgGenderResult.classList.add('text-success');
                    tfgSituationResult.value = 'TFG normal ou elevada';
                    tfgSituationResult.classList.add('text-success');           
               }
               else if(tfgResultMan > 60 && tfgResultMan <= 89){
                    tfgGenderResult.classList.add('text-primary');
                    tfgSituationResult.value = 'TFG com redução discreta'; 
                    tfgSituationResult.classList.add('text-primary');            
               }
               else if(tfgResultMan > 45 && tfgResultMan <= 59){
                    tfgGenderResult.classList.add('text-primary');
                    tfgSituationResult.value = 'TFG com redução discreta a moderada'; 
                    tfgSituationResult.classList.add('text-primary');           
               }
               else if(tfgResultMan > 30 && tfgResultMan <= 44){
                    tfgGenderResult.classList.add('text-warning');
                    tfgSituationResult.value = 'TFG com redução moderada ou severa';
                    tfgSituationResult.classList.add('text-warning');           
               }
               else if(tfgResultMan > 15 && tfgResultMan <= 29){
                    tfgGenderResult.classList.add('text-danger');
                    tfgSituationResult.value = 'Insuficiência renal';  
                    tfgSituationResult.classList.add('text-danger');              
               }
               else if(tfgResultMan < 15){
                    tfgGenderResult.classList.add('text-success');
                    tfgSituationResult.value = 'Indicação de diálise ou transplante'; 
                    tfgSituationResult.classList.add('text-danger');           
               }
               tfgResult.value = tfgResultMan.toFixed(1);
          }
          else if(genderTFG[i].checked && genderTFG[i].value == '2') {

               tfgGenderResult.value = 'Feminino';

               const tfgResultWoman = ((140 - tfgAge) * tfgWeight * 0.85)/(tfgCreatinine * 72);

               if(tfgResultWoman >= 90){
                    tfgResult.classList.add('text-success');
                    tfgSituationResult.value = 'TFG normal ou elevada';
                    tfgSituationResult.classList.add('text-success');           
               }
               else if(tfgResultWoman > 60 && tfgResultWoman <= 89){
                    tfgResult.classList.add('text-primary');
                    tfgSituationResult.value = 'TFG com redução discreta'; 
                    tfgSituationResult.classList.add('text-primary');            
               }
               else if(tfgResultWoman > 45 && tfgResultWoman <= 59){
                    tfgResult.classList.add('text-primary');
                    tfgSituationResult.value = 'TFG com redução discreta a moderada'; 
                    tfgSituationResult.classList.add('text-primary');           
               }
               else if(tfgResultWoman > 30 && tfgResultWoman <= 44){
                    tfgResult.classList.add('text-warning');
                    tfgSituationResult.value = 'TFG com redução moderada ou severa';
                    tfgSituationResult.classList.add('text-warning');           
               }
               else if(tfgResultWoman > 15 && tfgResultWoman <= 29){
                    tfgResult.classList.add('text-danger');
                    tfgSituationResult.value = 'Insuficiência renal';  
                    tfgSituationResult.classList.add('text-danger');              
               }
               else if(tfgResultWoman < 15){
                    tfgResult.classList.add('text-success');
                    tfgSituationResult.value = 'Indicação de diálise ou transplante'; 
                    tfgSituationResult.classList.add('text-danger');           
               }
               tfgResult.value = tfgResultWoman.toFixed(1);
          }
     }
})
