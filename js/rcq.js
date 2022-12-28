//INICIALIZAÇÃO DAS VARIÁVEIS
const alertRCQ = document.getElementById('alertRCQ');
const btnCalculateRCQ = document.getElementById('btnCalculateRCQ');
const btnCleanRCQ = document.getElementById('btnCleanRCQ');
const btnCloseRCQ = document.getElementById('btnCloseRCQ');
const btnPrintRCQ = document.getElementById('btnPrintRCQ');
const btnRCQ = document.getElementById('btnRCQ');
const inputRCQResults = document.getElementById('inputRCQResults');
const rcqBox = document.getElementById('rcqBox');
const rcqButtonsResult = document.getElementById('rcqButtonsResult');
const rcqInputResult = document.getElementById('rcqInputResult');
const rcqModal = document.getElementById('rcqModal');
var rcqGenderResult = document.getElementById('rcqGenderResult');
var rcqResult = document.getElementById('rcqResult');
var rcqSituationResult = document.getElementById('rcqSituationResult');



//Abre o modal de RCQ
btnRCQ.addEventListener('click', () => {
     rcqModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Calcula o RCQ
btnCalculateRCQ.addEventListener('click', () => {
     var gender = document.getElementsByName('gender');

     for(var i = 0; i < gender.length; i++){
          var rcqWaist = parseFloat(document.querySelector('#rcqWaist').value);
          var rcqHip = parseFloat(document.querySelector('#rcqHip').value);
          var rcq = (rcqWaist/rcqHip).toFixed(2);
          inputRCQResults.classList.remove('d-none');
          rcqButtonsResult.classList.remove('d-none');
          rcqResult.classList.remove('d-none');
          rcqResult.value = rcq;
          if(gender[i].checked && gender[i].value == '1'){
               if(rcq < 0.95){
                    rcqGenderResult.value = 'Sexo: Masculino';
                    rcqResult.classList.add('text-success')
                    rcqSituationResult.value = 'Situação: Risco de saúde baixo';
                    rcqSituationResult.classList.add('text-success');
               }
               else if((rcq > 0.95) && (rcq < 1.0)){
                    rcqGenderResult.value = 'Sexo: Masculino';
                    rcqResult.classList.add('text-warning')
                    rcqSituationResult.value = 'Situação: Risco de saúde moderado';
                    rcqSituationResult.classList.add('text-warning');
               }
               else if(rcq > 1.0){
                    rcqGenderResult.value = 'Sexo: Masculino';
                    rcqResult.classList.add('text-danger')
                    rcqSituationResult.value = 'Situação: Alto risco de saúde';
                    rcqSituationResult.classList.add('text-danger');
               }
          }
          else if(gender[i].checked && gender[i].value == '2'){
               if(rcq < 0.80){
                    rcqGenderResult.value = 'Sexo: Feminino';
                    rcqResult.classList.add('text-success')
                    rcqSituationResult.value = 'Situação: Risco de saúde baixo';
                    rcqSituationResult.classList.add('text-success');
               }
               else if((rcq > 0.80) && (rcq < 0.85)){
                    rcqGenderResult.value = 'Sexo: Feminino';
                    rcqResult.classList.add('text-warning')
                    rcqSituationResult.value = 'Situação: Risco de saúde moderado';
                    rcqSituationResult.classList.add('text-warning');
               }
               else if(rcq > 0.85){
                    rcqGenderResult.value = 'Sexo: Feminino';
                    rcqResult.classList.add('text-danger')
                    rcqSituationResult.value = 'Situação: Alto risco de saúde';
                    rcqSituationResult.classList.add('text-danger');
               }
          }
     };
});

//Limpa os campos do RCQ
btnCleanRCQ.addEventListener('click', ()=>{
     rcqWaist.value = '';
     rcqHip.value = '';
     rcq.value = '';
     document.getElementById('rcqResult').value = '';
     document.getElementById('rcqGenderResult').value = '';
     document.getElementById('rcqSituationResult').value = '';
     gender[i].checked = '';
});

//Imprime os resultados em tela
btnPrintRCQ.onclick = ()=>{
     window.print();
}

//Fecha o modal de RCQ
btnCloseRCQ.addEventListener('click', () => {
     rcqModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
});

