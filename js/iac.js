//INICIALIZAÇÃÕ DAS VARIÁVEIS GLOBAIS
const btnCleanIAC = document.querySelector('#btnCleanIAC');
const btnCloseIAC = document.getElementById('btnCloseIAC');
const btnIAC = document.getElementById('btnIAC');
const btnPrintIAC = document.getElementById('btnPrintIAC');
const iacBox = document.getElementById('iacBox');
const iacButtonsResult = document.getElementById('iacButtonsResult');
const iacModal = document.getElementById('iacModal'); 
var iacGenderResult = document.getElementById('iacGenderResult');
var iacResult = document.getElementById('iacResult');
var iacSituationResult = document.getElementById('iacSituationResult');
var inputIACResults = document.getElementById('inputIACResults');

//Abre o modal de IAC
btnIAC.addEventListener('click', ()=>{
     iacModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Calcula o IAC
btnCalculateIAC.addEventListener('click', ()=>{
     var iac_gender = document.getElementsByName('genderIAC');
          for(var i = 0; i < iac_gender.length; i++){
               var iacHeight = parseFloat(document.getElementById('iacHeight').value.replace(',','.'));
               var iacHip = parseFloat(document.getElementById('iacHip').value.replace(',','.'));
               var iac = (iacHip/(iacHeight * Math.pow(iacHeight, 0.5)) - 18).toFixed(2);
               inputIACResults.classList.remove('d-none');
               iacButtonsResult.classList.remove('d-none');
               iacResult.value = iac;
               if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 8 && iac < 20)){
                    iacResult.classList.add('text-success', 'font-weight-bold');
                    iacSituationResult.classList.add('text-success');
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Adiposidade normal";
               }
               if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 20 && iac < 25)){
                    iacResult.classList.add('text-warning', 'font-weight-bold');
                    iacSituationResult.classList.add('text-warning'); 
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Sobrepeso";
               }
               if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 25)){
                    iacResult.classList.add('text-danger', 'font-weight-bold');
                    iacSituationResult.classList.add('text-danger');
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Obesidade"; 
               }
               if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 21 && iac < 32)){
                    iacResult.classList.add('text-success', 'font-weight-bold');
                    iacSituationResult.classList.add('text-success');
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Adisposidade normal";
               }
               if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 32 && iac < 38)){
                    iacResult.classList.add('text-warning', 'font-weight-bold');
                    iacSituationResult.classList.add('text-warning');
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Sobrepeso"; 
               }
               if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 38)){
                    iacResult.classList.add('text-danger', 'font-weight-bold');
                    iacSituationResult.classList.add('text-danger');
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Obesidade"; 
               }
          }
});

//Limpa os campos do modal IAC
btnCleanIAC.addEventListener('click', ()=>{
     iacHeight.value = '';
     iacHip.value = '';
     iacResult.value = '';
     iacGenderResult.value = '';
     iacSituationResult.value = '';
});

//Imprime os resulatdos do IAC
btnPrintIAC.addEventListener('click', ()=>{
     window.print();
})

//Fecha o modal de IAC
btnCloseIAC.addEventListener('click', ()=>{
     iacModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     iacButtonsResult.classList.add('d-none');
     inputIACResults.classList.add('d-none');
})
