//INICIALIZAÇÃÕ DAS VARIÁVEIS GLOBAIS
const btnIAC = document.getElementById('btnIAC');
const iacModal = document.getElementById('iacModal'); 
const btnCloseIAC = document.getElementById('btnCloseIAC');


//Abre o modal de IAC
btnIAC.addEventListener('click', ()=>{
     iacModal.classList.remove('d-none');
     menuButtons.classList.add('d-none');
});

//Fecha o modal de IAC
btnCloseIAC.addEventListener('click', ()=>{
     iacModal.classList.add('d-none');
     menuButtons.classList.remove('d-none');
})
