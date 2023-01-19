//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const blackScreen = document.getElementById('blackScreen');
const btnCalculateIMC = document.getElementById('btnCalculateIMC');
const btnCleanIMC = document.getElementById('btnCleanIMC');
const btnPrintIMC = document.getElementById('btnPrintIMC');
const btnCloseIMCModal = document.getElementById('btnCloseIMCModal');
const btnCloseGeneral = document.getElementById('btnCloseGeneral');
const btnOpenIMC = document.querySelector('#btnOpenIMC');
const imcBox = document.getElementById('imcBox');
const imcButtonsResult = document.getElementById('imcButtonsResult');
const imcInputResult = document.getElementById('imcInputResult');
const imcModal = document.getElementById('imcModal');
const imcResult = document.getElementById('imcResult');
const linkInfoModalIMC = document.getElementById('linkInfoModalIMC');
const menuButtons = document.getElementById('menuButtons');
const navigation = document.getElementById('navigation');
const imcAnalisys = document.getElementById('imcAnalisys');



//Abre o modal de cálculo do IMC
btnOpenIMC.addEventListener('click', ()=>{
     menuButtons.classList.add('d-none');
     imcModal.classList.remove('d-none');
     imcBox.classList.remove('d-none');
});

//Calcula o imc
btnCalculateIMC.onclick = ()=>{
     let imcWeight = parseFloat(document.getElementById('imcWeight').value.replace(',','.'));
     let imcHeight = parseFloat(document.getElementById('imcHeight').value.replace(',','.'));

          if((imcWeight >= 15 && imcWeight <= 500) && (imcHeight >= 0.8 && imcHeight <= 2.72)){
               imcInputResult.value = (imcWeight/Math.pow(imcHeight, 2)).toFixed(2);

               var imcResultAnalisys = document.getElementById('imcResultAnalisys');
               imcResultAnalisys.classList.remove('d-none');

               imcAnalisys.classList.remove('d-none');
               imcInputResult.classList.remove('d-none');
               imcButtonsResult.classList.remove('d-none');

               if(imcInputResult.value < 18.5){
                    document.getElementById('imcResultAnalisys').value = "Seu peso está ABAIXO do ideal";
                    imcResultAnalisys.classList.add('text-danger');
               }
               else if((imcInputResult.value >= 18.5) && (imcInputResult.value < 24.99)){
                    document.getElementById('imcResultAnalisys').value = "Seu peso é considerado NORMAL";
                    imcResultAnalisys.classList.add('text-success');
               }
               else if((imcInputResult.value >= 25) && (imcInputResult.value < 29.99)){
                    document.getElementById('imcResultAnalisys').value = "Você está com SOBREPESO";
                    imcResultAnalisys.classList.add('text-danger');
               }
               else if((imcInputResult.value >= 30) && (imcInputResult.value < 34.99)){
                    document.getElementById('imcResultAnalisys').value = "Você está com OBESIDADE GRAU I";
                    imcResultAnalisys.classList.add('text-danger');
               }
               else if((imcInputResult.value >= 35) && (imcInputResult.value < 39.99)){
                    document.getElementById('imcResultAnalisys').value = "Você está com OBESIDADE GRAU II";
                    imcResultAnalisys.classList.add('text-danger');
               }
               else if(imcInputResult.value >= 40){
                    document.getElementById('imcResultAnalisys').value = "Você está com OBESIDADE MÓRBIDA";
                    imcResultAnalisys.classList.add('text-danger');
               }
          }
          else{
               alert('Peso e/ou altura inválido(s)!');
          }
};

//Limpa os campos do modal de IMC
btnCleanIMC.addEventListener('click', ()=>{
     document.getElementById('imcResultAnalisys').value = '';
     document.getElementById('imcWeight').value = '';
     document.getElementById('imcHeight').value = '';
     document.getElementById('imcInputResult').value = '';
});

//Imprime o resultado
btnPrintIMC.addEventListener('click', ()=>{ window.print() });

//Fechar modal IMC_BOX
btnCloseIMCModal.onclick = ()=>{
     menuButtons.classList.remove('d-none');
     imcModal.classList.add('d-none');
}

//Fecha modal do IMC através do botão BTN-CLOSE
btnCloseGeneral.addEventListener('click', ()=>{ window.close()} );
    


