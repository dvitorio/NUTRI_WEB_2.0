//INICIALIZAÇÃÕ DAS VARIÁVEIS GLOBAIS
const btnIAC = document.getElementById('btnIAC');
const iacModal = document.getElementById('iacModal'); 
const btnCleanIAC = document.querySelector('#btnCleanIAC');
const btnCloseIAC = document.getElementById('btnCloseIAC');
const iacResult = document.getElementById('iacResult');
const inputIACResults = document.getElementById('inputIACResults');
const iacButtonsResult = document.getElementById('iacButtonsResult');
const iacGenderResult = document.getElementById('iacGenderResult');
const iacSituationResult = document.getElementById('iacSituationResult');

//Abre o modal de IAC
btnIAC.addEventListener('click', ()=>{
     iacModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Calcula o IAC
btnCalculateIAC.addEventListener('click', ()=>{
     var iac_gender = document.getElementsByName('genderIAC');
          for(var i = 0; i < iac_gender.length; i++){
               let iacHeight = parseFloat(document.getElementById('iacHeight').value);
               let iacHip = parseFloat(document.getElementById('iacHip').value);
               let iac = (iacHip/(iacHeight * Math.pow(iacHeight, 0.5)) - 18).toFixed(2);
               inputIACResults.classList.remove('d-none');
               iacButtonsResult.classList.remove('d-none');
               iacResult.value = iac;
               if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 8 && iac <= 20)){
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Adiposidade normal";
                    iacResult.classList.add('text-success', 'font-weight-bold');
                    iacSituationResult.classList.add('text-success');
               }
               else if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 20 && iac <= 25)){
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Sobrepeso";
                    iacResult.classList.add('text-warning', 'font-weight-bold');
                    iacSituationResult.classList.add('text-warning'); 
               }
               else if((iac_gender[i].checked && iac_gender[i].value == '1') && (iac > 25)){
                    iacGenderResult.value = "Sexo: Masculino"; 
                    iacSituationResult.value = "Situação: Obesidade"; 
                    iacResult.classList.add('text-danger', 'font-weight-bold');
                    iacSituationResult.classList.add('text-danger');
               }
               else if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 21 && iac <= 32)){
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Adisposidade normal";
                    iacResult.classList.add('text-success', 'font-weight-bold');
                    iacSituationResult.classList.add('text-success');
               }
               else if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 32 && iac <= 38)){
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Sobrepeso"; 
                    iacResult.classList.add('text-warning', 'font-weight-bold');
                    iacSituationResult.classList.add('text-warning');
               }
               else if((iac_gender[i].checked && iac_gender[i].value == '2') && (iac > 38)){
                    iacGenderResult.value = "Sexo: Feminino"; 
                    iacSituationResult.value = "Situação: Obesidade"; 
                    iacResult.classList.add('text-danger', 'font-weight-bold');
                    iacSituationResult.classList.add('text-danger');
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

//Fecha o modal de IAC
btnCloseIAC.addEventListener('click', ()=>{
     iacModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     iacButtonsResult.classList.add('d-none');
     inputIACResults.classList.add('d-none');
})
