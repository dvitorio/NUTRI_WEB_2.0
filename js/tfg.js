//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const btnCalculateTFG = document.getElementById('btnCalculateTFG');
const btnCleanTFG = document.getElementById('btnCleanTFG');
const btnCloseTFG = document.getElementById('btnCloseTFG');
const btnPrintTFG = document.getElementById('btnPrintTFG');
const btnTFG = document.getElementById('btnTFG');
const inputTFGResults = document.getElementById('inputTFGResults');
const tfgButtonsResult = document.getElementById('tfgButtonsResult');
const tfgModal = document.getElementById('tfgModal');
var tfgGenderResult = document.getElementById('tfgGenderResult');
var tfgGenderResultMan = document.getElementById('tfgGenderResultMan');
var tfgResult = document.getElementById('tfgResult');
var tfgSituationResult = document.getElementById('tfgSituationResult');



//Abre o modal de TFG
btnTFG.addEventListener('click', ()=>{
     menuButtons.classList.add('d-none');
     tfgModal.classList.remove('d-none');
     tfgButtonsResult.classList.add('d-none');
     inputTFGResults.classList.add('d-none');
})

//Calcula a TFG
btnCalculateTFG.addEventListener('click', ()=>{

     var tfg_man = document.getElementById('tfg_man').value; //Seleciona genero masculino
     var tfg_woman = document.getElementById('tfg_woman').value; //Seleciona genero feminino
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
                    tfgSituationResult.value = 'Filtração normal ou elevada';
                    tfgSituationResult.classList.add('text-success');           
               }
               else if(tfgResultMan > 60 && tfgResultMan <= 89){
                    tfgGenderResult.classList.add('text-primary');
                    tfgSituationResult.value = 'Filtração com redução discreta'; 
                    tfgSituationResult.classList.add('text-primary');            
               }
               else if(tfgResultMan > 45 && tfgResultMan <= 59){
                    tfgGenderResult.classList.add('text-primary');
                    tfgSituationResult.value = 'Filtração com redução discreta a moderada'; 
                    tfgSituationResult.classList.add('text-primary');           
               }
               else if(tfgResultMan > 30 && tfgResultMan <= 44){
                    tfgGenderResult.classList.add('text-warning');
                    tfgSituationResult.value = 'Filtração com redução moderada ou severa';
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
                    tfgSituationResult.value = 'Filtração normal ou elevada';
                    tfgSituationResult.classList.add('text-success');           
               }
               else if(tfgResultWoman > 60 && tfgResultWoman <= 89){
                    tfgResult.classList.add('text-primary');
                    tfgSituationResult.value = 'Filtração com redução discreta'; 
                    tfgSituationResult.classList.add('text-primary');            
               }
               else if(tfgResultWoman > 45 && tfgResultWoman <= 59){
                    tfgResult.classList.add('text-primary');
                    tfgSituationResult.value = 'Filtração com redução discreta a moderada'; 
                    tfgSituationResult.classList.add('text-primary');           
               }
               else if(tfgResultWoman > 30 && tfgResultWoman <= 44){
                    tfgResult.classList.add('text-warning');
                    tfgSituationResult.value = 'Filtração com redução moderada ou severa';
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
});

//Limpa os campos do modal de TFG
btnCleanTFG.onclick = ()=>{
     document.getElementById('tfgGenderResult').value = '';
     document.getElementById('tfgSituationResult').value = '';
     document.getElementById('tfgResult').value = '';
     document.getElementById('tfg_man').checked = false;
     document.getElementById('tfg_woman').value = '';
     document.getElementById('tfgCreatinine').value = '';
     document.getElementById('tfgWeight').value = '';
     document.getElementById('tfgAge').value = '';
};

//Imprime o resultado do TFG
btnPrintTFG.addEventListener('click', ()=>{
     window.print();
})

//Fecha o modal de TFG
btnCloseTFG.addEventListener('click', ()=>{
     tfgModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
});
