//Links de referencia:

//https://cursos.alura.com.br/forum/topico-submit-form-sem-refresh-e-sem-preventdefault-109794
//https://www.freecodecamp.org/portuguese/news/o-metodo-location-reload-como-recarregar-uma-pagina-em-javascript/

//cancelar envio do formulario
const form = document.getElementById('some-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('Deu certo');
});


class Heroi {
  constructor(nome, sexo, xp){
    this.nome = nome;
    this.sexo = sexo;
    this.xp = xp;
  }
  
  nivelHeroi(){
     //Metodo que verifica nivel do Heroi
     if(this.xp <= 1000){
        return  "FERRO";
     }else if(this.xp > 1001 && this.xp <= 2000){
         return  "BRONZE";
     }else if(this.xp > 2001 && this.xp <= 5000){
         return  "PRATA";
     }else if(this.xp > 6001 && this.xp <= 7000){
         return  "OURO";
     }else if(this.xp > 7001 && this.xp <= 8.000){
         return  "PLATINA";
     }else if(this.xp > 8001 && this.xp <= 9000){
         return  "ASCENDENTE";
     }else if(this.xp > 9001 && this.xp < 10000){
         return  "PLATINA";
     }else{
        return  "RADIANTE";
     }
  }
}
function hiddenNome(){
    var hidden_resultado_nome = document.querySelector('.dados_nome');
    hidden_resultado_nome.classList.remove("dados_nome");
    hidden_resultado_nome.classList.add("remove");
}

function showSexo(){
    var show_resultado = document.querySelector('.dados_sexo');
    show_resultado.classList.remove('dados_sexo');
    show_resultado.classList.add("show");
    
    hiddenNome();
}

function hiddenSexo(){
    var hidden_resultado_sexo = document.querySelector('.show');
    hidden_resultado_sexo.classList.remove("show");
    hidden_resultado_sexo.classList.add("remove");
}
  


function showXP(){
    var show_resultado = document.querySelector('.dados_xp');
    show_resultado.classList.remove('dados_xp');
    show_resultado.classList.add("show");
    
    hiddenSexo();
}   


function hiddenXP(){
    var hidden_resultado_xp = document.querySelector('.show');
     hidden_resultado_xp.classList.remove("show");
     hidden_resultado_xp.classList.add("remove");   
}

function showResultado(){	
  var nome = document.getElementById('nome').value;
  var sexo = document.querySelector('input[name="sexo"]:checked').value;
  var xp = document.getElementById('xp').value;
  var show_tela = document.getElementById('mostra_resultado');

  var show_resultado = document.querySelector('.dados_mostrar');
  // Instancia da class Heroi

  var player = new Heroi( nome,sexo,parseInt(xp));
  
  show_resultado.classList.remove('dados_mostrar');
  show_resultado.classList.add("show");
  
   show_tela.innerHTML += ` <p> Nome do Heroi: ${player.nome} </p>
                            <p> Sexo do Heroi: ${player.sexo} </p>
                            <p> Experiência do Heroi: ${player.xp} </p>
                            <p> O nivel do seu heroi é ${player.nivelHeroi()}</p>
                            <button onClick="window.location.reload()">Ver novamente</button>
                          `;
                          
  hiddenXP();
  }

