//INICIALIZAÇÃO DAS VARIÁVEIS
const btnCalculateRCQ = document.getElementById('btnCalculateRCQ');
const rcqBox = document.getElementById('rcqBox');
const rcqButtonsResult = document.getElementById('rcqButtonsResult');
const rcqInputResult = document.getElementById('rcqInputResult');
const rcqModal = document.getElementById('rcqModal');
const inputRCQResults = document.getElementById('inputRCQResults');
const btnRCQ = document.getElementById('btnRCQ');
const alertRCQ = document.getElementById('alertRCQ');



//Abre o modal de RCQ
btnRCQ.addEventListener('click', () => {
     rcqModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Calcula o RCQ
btnCalculateRCQ.addEventListener('click', () => {
     let rcqWaist = parseFloat(document.querySelector('#rcqWaist').value);
     let rcqHip = parseFloat(document.querySelector('#rcqHip').value);
     let masculino = document.getElementById('masculino');
     let feminino = document.getElementById('feminino');
     let gender = document.getElementsByName('gender');
     let rcq = (rcqWaist/rcqHip).toFixed(2);
          rcqInputResult.value = rcq;
          inputRCQResults.classList.remove('d-none');
          rcqInputResult.classList.remove('d-none');
     
});

//

//Fecha o modal de RCQ
btnCloseRCQ.addEventListener('click', () => {
     rcqModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
});

