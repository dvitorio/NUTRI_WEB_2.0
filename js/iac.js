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


//Acessa o menu de opções
function accessMenu(){
     coverSite.classList.add('d-none');
     navigation.classList.add('d-none');
     menuButtons.classList.remove('d-none');
}

//Abre o modal de IAC
btnIAC.addEventListener('click', ()=>{
     iacModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Calcula o IAC
btnCalculateIAC.addEventListener('click', ()=>{
     var iac_gender = document.getElementsByName('genderIAC');
          for(var i = 0; i < iac_gender.length; i++){
               var iacHeight = parseFloat(document.getElementById('iacHeight').value);
               var iacHip = parseFloat(document.getElementById('iacHip').value);
               var iac = (iacHip/(iacHeight * Math.pow(iacHeight, 0.5)) - 18).toFixed(2);
               inputIACResults.classList.remove('d-none');
               iacButtonsResult.classList.remove('d-none');
               iacResult.value = iac;
               if((iac_gender[i].checked) && (iac_gender[i].value == '1')){
                    if (iac < 8.0){
                         iacGenderResult.value = 'Sexo: Masculino';
                         iacSituationResult.value = 'Situação: Baixa adiposidade';
                         iacResult.classList.add('text-warning');
                         iacSituationResult.classList.add('text-warning');
                    }
                    else if((iac > 8.0) && (iac < 20.0)){
                         iacGenderResult.value = 'Sexo: Masculino';
                         iacSituationResult.value = 'Situação: Adiposidade normal.';
                         iacResult.classList.add('text-success');
                         iacSituationResult.classList.add('text-success');
                    }
                    else if((iac > 20.0) && (iac < 25.0)){
                         iacGenderResult.value = 'Sexo: Masculino';
                         iacSituationResult.value = 'Situação: Sobrepeso.'
                         iacResult.classList.add('text-warning');
                         iacSituationResult.classList.add('text-warning');
                    }
                    else if(iac > 25.0){
                         iacGenderResult.value = 'Sexo: Masculino';
                         iacSituationResult.value = 'Situação: Obesidade.'
                         iacResult.classList.add('text-danger');
                         iacSituationResult.classList.add('text-danger');
                    }    
               }
               else if((iac_gender[i].checked) && (iac_gender[i].value == '2')){
                    if(iac < 20.0){
                         iacGenderResult.value = 'Sexo: Feminino';
                         iacSituationResult.value = 'Situação: Baixa adiposidade.'
                         iacResult.classList.add('text-warning');
                         iacSituationResult.classList.add('text-warning');
                    }
                    else if((iac > 20.0) && (iac < 32.0)){
                         iacGenderResult.value = 'Sexo: Feminino';
                         iacSituationResult.value = 'Situação: Adiposidade normal.'
                         iacResult.classList.add('text-success');
                         iacSituationResult.classList.add('text-success');
                    }
                    else if((iac > 32.0) && (iac < 38.0)){
                         iacGenderResult.value = 'Sexo: Feminino';
                         iacSituationResult.value = 'Situação: Sobrepeso.'
                         iacResult.classList.add('text-warning');
                         iacSituationResult.classList.add('text-warning');
                    }
                    else if(iac > 38.0){
                         iacGenderResult.value = 'Sexo: Feminino';
                         iacSituationResult.value = 'Situação: Obesidade.'
                         iacResult.classList.add('text-danger');
                         iacSituationResult.classList.add('text-danger');
                    }
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
});

//Fecha o modal de IAC
btnCloseIAC.addEventListener('click', ()=>{
     iacModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     iacButtonsResult.classList.add('d-none');
     inputIACResults.classList.add('d-none');
})
