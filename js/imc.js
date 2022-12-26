//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const blackScreen = document.getElementById('blackScreen');
const btnCalculateIMC = document.getElementById('btnCalculateIMC');
const btnCleanIMC = document.getElementById('btnCleanIMC');
const btnCloseIMC = document.getElementById('btnCloseIMC');
const btnCloseIMCModal = document.getElementById('btnCloseIMCModal');
const btnCloseOptionsMenu = document.getElementById('btnCloseOptionsMenu');
const btnImcFromInfo = document.getElementById('imcFromInfo');
const btnOpenIMC = document.getElementById('btnOpenIMC');
const btnStart = document.getElementById('btnStart');
const coverSite = document.getElementById('coverSite');
const escapeInfoIMC = document.getElementById('escapeInfoIMC');
const imcBox = document.getElementById('imcBox');
const imcButtonsResult = document.getElementById('imcButtonsResult');
const imcInfo = document.getElementById('imcInfo');
const imcInputResult = document.getElementById('imcInputResult');
const imcModal = document.getElementById('imcModal');
const imcResult = document.getElementById('imcResult');
const linkInfoModalIMC = document.getElementById('linkInfoModalIMC');
const menuButtons = document.getElementById('menuButtons');
const navigation = document.getElementById('navigation');


//Abrir menu de opções através do botão do navbar
btnStart.addEventListener('click', ()=>{
     menuButtons.classList.remove('d-none');
     navigation.classList.add('d-none');
     coverSite.classList.add('d-none');
});

//Abrir menu de opções a partir do botão "CLIQUE PARA SABER MAIS"
function knowMore(){
     navigation.classList.add('d-none');
     menuButtons.classList.remove('d-none');
     coverSite.classList.add('d-none');
};

//Fechar menu de opções e voltar à tela inicial do site
btnCloseOptionsMenu.addEventListener('click', ()=>{
     menuButtons.classList.add('d-none');
     navigation.classList.remove('d-none');
     coverSite.classList.remove('d-none');
});

//Abre o modal de IMC do menu de opções
btnOpenIMC.addEventListener('click', ()=>{
     menuButtons.classList.add('d-none');
     imcBox.classList.remove('d-none');
});

//Abre modal de informação de IMC
linkInfoModalIMC.addEventListener('click', ()=>{
     coverSite.classList.add('d-none');
     imcInfo.classList.remove('d-none');
     blackScreen.classList.remove('d-none');
});

//Abre o modal de cálculo de IMC direto do modal de informação sobre IMC
btnImcFromInfo.onclick = ()=>{
     blackScreen.classList.add('d-none');
     coverSite.classList.add('d-none');
     imcInfo.classList.add('d-none');
     navigation.classList.add('d-none');
     imcBox.classList.remove('d-none');
};


//Fecha modal de informação de IMC
escapeInfoIMC.addEventListener('click', ()=>{
     blackScreen.classList.add('d-none');
     coverSite.classList.remove('d-none');
     imcInfo.classList.add('d-none');
})

//Calcula o imc
btnCalculateIMC.onclick = ()=>{
     let imcWeight = parseFloat(document.getElementById('imcWeight').value.replace(',','.'));
     let imcHeight = parseFloat(document.getElementById('imcHeight').value.replace(',','.'));
          if((imcWeight >= 15 && imcWeight <= 500) && (imcHeight >= 0.8 && imcHeight <= 2.72)){
               imcInputResult.value = (imcWeight/Math.pow(imcHeight, 2)).toFixed(2);
               imcInputResult.classList.remove('d-none');
               imcButtonsResult.classList.remove('d-none');
               if(imcInputResult.value < 18.5){
                    document.getElementById('situation').innerHTML = "Seu peso está <b>ABAIXO</b> do ideal";
                    situation.classList.add('text-danger');
               }
               else if((imcInputResult.value >= 18.5) && (imcInputResult.value < 24.99)){
                    document.getElementById('situation').innerHTML = "Seu peso é considerado <b>NORMAL</b>";
                    situation.classList.add('text-success');
               }
               else if((imcInputResult.value >= 25) && (imcInputResult.value < 29.99)){
                    document.getElementById('situation').innerHTML = "Você está com <b>SOBREPESO</b>";
                    situation.classList.add('text-warning');
               }
               else if((imcInputResult.value >= 30) && (imcInputResult.value < 34.99)){
                    document.getElementById('situation').innerHTML = "Você está com <b>OBESIDADE GRAU I</b>";
                    situation.classList.add('text-danger');
               }
               else if((imcInputResult.value >= 30) && (imcInputResult.value < 349.99)){
                    document.getElementById('situation').innerHTML = "Você está com <b>OBESIDADE GRAU II</b>";
                    situation.classList.add('text-danger');
               }
               else if(imcInputResult.value >= 40){
                    document.getElementById('situation').innerHTML = "Você está com <b>OBESIDADE MÓRBIDA</b>";
                    situation.classList.add('text-danger');
               }
          }
          else{
               alert('Peso e/ou altura inválido(s)!');
          }
};

//Fechar modal IMC_BOX
btnCloseIMC.onclick = ()=>{
     navigation.classList.remove('d-none');
     imcModal.classList.add('d-none');
     coverSite.classList.remove('d-none');
}

//Fechar IMC_MODAL
btnCloseIMCModal.onclick = ()=>{
     navigation.classList.remove('d-none');
     imcModal.classList.add('d-none');
     coverSite.classList.remove('d-none');
     menuButtons.classList.remove('d-none');
}