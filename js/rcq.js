//INICIALIZAÇÃO DAS VARIÁVEIS
const btnCalculateRCQ = document.getElementById('btnCalculateRCQ');
const rcqBox = document.getElementById('rcqBox');
const rcqButtonsResult = document.getElementById('rcqButtonsResult');
const rcqInputResult = document.getElementById('rcqInputResult');
const rcqModal = document.getElementById('rcqModal');
const inputRCQResults = document.getElementById('inputRCQResults');
const btnRCQ = document.getElementById('btnRCQ');



//Abre o modal de RCQ
btnRCQ.addEventListener('click', ()=>{
     rcqModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
})

//Calcula o RCQ
btnCalculateRCQ.addEventListener('click', ()=>{
     let rcqWaist = document.querySelector('#rcqWaist').value;
     let rcqHip = document.querySelector('#rcqHip').value;
     let maleRCQ = document.getElementById('maleRCQ').value;
     let femaleRCQ = document.getElementById('femaleRCQ').value;
          if((rcqWaist > 30 && rcqWaist <= 300) && (rcqHip > 30 && rcqHip <= 400)){
               let rcq = (rcqWaist/rcqHip).toFixed(2);
                    inputRCQResults.classList.remove('d-none');
                    rcqInputResult.value = rcq;
                    rcqInputResult.classList.remove('d-none');
          }
});

//Fecha o modal de RCQ
btnCloseRCQ.addEventListener('click', ()=>{
     rcqModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
});

