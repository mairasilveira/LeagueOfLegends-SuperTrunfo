// BOTAO MOSTRAR OU ESCONDER 


var btnDiv = document.getElementById('btn-div');
var deckDota = document.querySelector('.deckDota');
var trunfoDota = document.querySelector('.trunfoDota');
btnDiv.addEventListener('click', function() {
  if(deckDota.style.display === 'block') {
      deckDota.style.display = 'none';
      trunfoDota.style.display = 'block';
  } else {
      deckDota.style.display = 'block';
      trunfoDota.style.display = 'none';
  }
});











//-------------------------------------------------------------------------
// DEEEEEEEECK



const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')        
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})


//-------------------------------------------------------------------------
// SUPER TRUNFOOOO

// carta de interrogação
var carta0 = {
  nome: "",
  avatar:
    "https://www.yardgreetings.com/wp-content/uploads/2018/03/symbol-question-mark-black-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-600x600.jpg",
  atributos: {
    Strength: "",
    Agility: "",
    Intelligence: ""
  }
};

var carta1 = {
  nome: "Ekko",
  avatar:  "https://i.pinimg.com/564x/c3/60/a7/c360a7f448769a22a336b639c955dbb1.jpg",
  atributos: {
    Stregth: 28,
    Agility: 33,
    Intelligence: 25
  }
};

var carta2 = {
  nome: "Blitzcrank",
  avatar:    "https://i.pinimg.com/564x/19/76/18/1976182850acaa5cf5546f11149e20e3.jpg",
  atributos: {
    Stregth: 35,
    Agility: 15,
    Intelligence: 11
  }
};

var carta3 = {
  nome: "Ashe",
  avatar:
    "https://i.pinimg.com/564x/0a/8f/f7/0a8ff7b3be29c7e297b65b691e49b68b.jpg",
  atributos: {
    Stregth: 31,
    Agility: 21,
    Intelligence: 44
  }
};

var carta4 = {
  nome: "Yasuo",
  avatar:
    "https://i.pinimg.com/564x/0a/47/47/0a474778702793aeff216c4fddb1281e.jpg",
  atributos: {
    Stregth: 44,
    Agility: 44,
    Intelligence: 0
  }
};

var carta5 = {
  nome: "Camile",
  avatar: "https://i.pinimg.com/564x/d1/1a/17/d11a17a1b34060b7f8baa237d2dae804.jpg",
  atributos: {
    Stregth: 47,
    Agility: 39,
    Intelligence: 20
  }
};

var carta6 = {
  nome: "Cho'gath",
  avatar: "https://i.pinimg.com/564x/2d/c1/2f/2dc12ff47b2a49ecf21701df5cd82b0c.jpg",
  atributos: {
    Stregth: 60,
    Agility: 1,
    Intelligence: 1
  }
};

var carta7 = {
  nome: "Bardo",
  avatar:    "https://i.pinimg.com/564x/71/64/7d/71647d4c32eb84dc867f8635d2ad02cd.jpg",
  atributos: {
    Stregth: 28,
    Agility: 11,
    Intelligence: 40
  }
};

var carta8 = {
  nome: "Akali",
  avatar:
    "https://i.pinimg.com/564x/71/5f/79/715f79b373e1e331541f451bf293a3ab.jpg",
  atributos: {
    Stregth: 35,
    Agility: 49,
    Intelligence: 30
  }
};

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var baralhoJogador = [];
var baralhoMaquina = [];
var cartaMaquina;
var cartaJogador;
var ganhador;
var partidas = 0;
var placar = [0, 0, 0];

//-------------------------------------------------------------------------
// função que inicia o primeiro duelo do torneio
function iniciarJogo() {
  resetaTela();

  divideCartas();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha
  document.getElementById("info-center").innerHTML =
    "Choose your attribute<br><br> and go fight!";

  // muda o contexto do botão para a opção duelar
  var btnJogar = document.getElementById("btnJogar");
  btnJogar.disabled = true;
  btnJogar.classList.remove("button:active");
  document.getElementById("btnJogar").innerHTML = "Fight!!!";
}

//-------------------------------------------------------------------------
// funcao que inicia duelos seguintes do torneio
function continuarDuelando() {
  resetaTela();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha
  document.getElementById("info-center").innerHTML =
    "Choose your attribute<br><br> and go fight!";

  // muda o contexto do botão para a opção duelar
  document.getElementById("btnJogar").disabled = true;

  document.getElementById("btnJogar").innerHTML = "Fight!!!";
}

//-------------------------------------------------------------------------
// funcão que cria os baralhos do jogador e da máquina
function divideCartas() {
  var baralhoTemp = baralho.slice();
  var carta;

  // Limpa os baralhos
  baralhoJogador = [];
  baralhoMaquina = [];

  while (baralhoTemp.length > 0) {
    // Adiciona uma carta para o Jogador
    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoJogador.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);

    // Adiciona uma carta para a maquina
    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoMaquina.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);
  }
}

//-------------------------------------------------------------------------
// função que sorteia as cartas
function sorteiaCartas() {
  cartaJogador = parseInt(Math.random() * baralhoJogador.length);
  cartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
}

//-------------------------------------------------------------------------
// funcao que volta a tela para a condição de inicio do jogo
function resetaTela() {
  // resetanto o painel da esquerda
  document.getElementById("left-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-left").style.backgroundImage = "";
  document.getElementById("attribs-left").innerHTML = "";

  // resetanto o painel central
  document.getElementById("info-center").innerHTML =
    "Vamos Duelar! <br><br> Aceita o Desafio?";

  // resetanto o painel da dieita
  document.getElementById("right-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-right").style.backgroundImage = "";
  document.getElementById("attribs-right").innerHTML = "";
}

//-------------------------------------------------------------------------
// funcao que exibe uma carta na tela
function exibeCarta(carta, posicao) {
  //var card = carta0;
  var label = document.getElementById(posicao + "-label");
  var divCard = document.getElementById("card-" + posicao);
  var divAttribs = document.getElementById("attribs-" + posicao);
  var attribs = "";

  if (posicao == "left") {
    // mostra os atributos da carta
    attribs = '<br><div class="line-info">' + carta.nome + "</div><br>";
    for (var atributo in carta.atributos) {
      attribs +=
        '<div class="line-info"><input class="kunai" type="radio" name="atributo"value="' +
        atributo +
        '" onchange="testaRadio()">';
      attribs += atributo + ": " + carta.atributos[atributo] + "</div>";
    }
    divAttribs.innerHTML = attribs + "<br>";
  }

  // deixa o label principal do div visivel
  label.style.color = "#dcdcdc";

  // mostra a carta
  divCard.style.backgroundImage = 'url("' + carta.avatar + '")';

  //exibe o painel final de informações
  document.getElementById("div-end").style.opacity = "0.8";
}

//-------------------------------------------------------------------------
// funcão que controla os casos de radio não selecionados
function testaRadio() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      document.getElementById("btnJogar").disabled = false;
      document.getElementById("btnJogar").onclick = function () {
        jogar();
      };
    }
  }
}

//-------------------------------------------------------------------------
// funcão que verifica qual atributo foi escolhido para o duelo
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      return radioAtributo[radio].value;
    }
  }
}

//-------------------------------------------------------------------------
// funcão que dispara o duelo e compara as cartas
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var resultado = document.getElementById("info-center");
  var radios = document.getElementsByName("atributo");

  if (
    baralhoJogador[cartaJogador].atributos[atributoSelecionado] >
    baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
  ) {
    computaResultado(1);
  } else if (
    baralhoJogador[cartaJogador].atributos[atributoSelecionado] <
    baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
  ) {
    computaResultado(2);
  } else {
    computaResultado(0);
  }

  if (baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
    fimDeJogo();
  } else {
    document.getElementById("btnJogar").onclick = function () {
      continuarDuelando();
    };
  }
}

//-------------------------------------------------------------------------
// funcão que informa os resultados de duelas e computa os pontos
function computaResultado(resultado) {
  var painelInfo = document.getElementById("info-center");
  ganhador = resultado;
  placar[resultado] += 1;
  partidas++;

  exibeCarta(baralhoMaquina[cartaMaquina], "right");
  imprimeResultado();

  // transfere para o jogador a carta da máquina
  if (ganhador == 1) {
    baralhoJogador.push(baralhoMaquina[cartaMaquina]);
    baralhoMaquina.splice(cartaMaquina, 1);
  }

  // transfere para a máquina a carta do jogador
  if (ganhador == 2) {
    baralhoMaquina.push(baralhoJogador[cartaJogador]);
    baralhoJogador.splice(cartaJogador, 1);
  }
  atualizaPlacar();
}

//-------------------------------------------------------------------------
// funcão que imprime o resultado de um duelo
function imprimeResultado() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divDest;
  var text;
  var carta;
  var id = "empatou";
  var idMaquina;

  if (ganhador == 1) {
    id = "ganhou";
    idMaquina = "perdeu";
    mensagemResultado = "You win this round!";
  } else if (ganhador == 2) {
    id = "perdeu";
    idMaquina = "ganhou";
    mensagemResultado = "You lose this round!";
  }

  // imprime os blocos de resultado sobre as cartas
  for (var local of ["attribs-left", "attribs-right"]) {
    divDest = document.getElementById(local);
    if (local == "attribs-left") {
      carta = baralhoJogador[cartaJogador];
    } else {
      carta = baralhoMaquina[cartaMaquina];
      if (ganhador != 0) {
        id = idMaquina;
      }
    }

    text = '<br><div class="line-info">' + carta.nome + "</div><br>";
    var inicio = '<div class="line-info" ';
    for (var linha in carta.atributos) {
      text += inicio;
      if (linha == atributoSelecionado) {
        text += 'id="' + id + '" ';
      }
      text += ">" + linha + ": " + carta.atributos[linha] + "</div>";
    }
    divDest.innerHTML = text + "<br>";
  }
}

//-------------------------------------------------------------------------
function atualizaPlacar() {
  var painelInfo = document.getElementById("info-center");
  var labelCentral = document.getElementById("center-label");
  var labelPartidas = document.getElementById("partidas");
  var cartasJogador = document.getElementById("cartas-jogador");
  var cartasMaquina = document.getElementById("cartas-maquina");
  var mensagemResultado = "Round draw!";
  var id = "empatou";

  if (ganhador == 1) {
    id = "ganhou";
    mensagemResultado = "You win this round!";
  } else if (ganhador == 2) {
    id = "perdeu";
    mensagemResultado = "You lose this round!";
  }

  // imprime as informações do painel central
  painelInfo.innerHTML = mensagemResultado;

  //exibe placar
  labelCentral.style.color = "#dcdcdc";
  labelCentral.innerHTML = placar[1] + " x " + placar[2];

  // exibe contagem de cartas e partida
  labelPartidas.innerHTML = "Rounds played: <br>" + partidas;
  cartasJogador.innerHTML = "Player<br>Cards: <br>" + baralhoJogador.length;
  cartasMaquina.innerHTML = "Machine<br>Cards: <br>" + baralhoMaquina.length;
}

//-------------------------------------------------------------------------
// exibe mensagens quando um jogador fica com todas as cartas
function fimDeJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");
  var mensagem;

  if (ganhador == 1) {
    mensagem = "Congratulations!!!<br><br>You Win<br><br>the Battle!";
  } else {
    mensagem = "Defeat!<br><br>You Lose<br><br>the Battle!";
  }

  painelInfo.innerHTML = mensagem;
  botao.innerHTML = "Reiniciar Jogo";
  botao.setAttribute("onclick", "reiniciarJogo()");
}

//-------------------------------------------------------------------------
// volta tudo ao ponto zero
function reiniciarJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");

  partidas = 0;
  placar = [0, 0, 0];

  resetaTela();
  document.getElementById("center-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("div-end").style.opacity = "0";
  document.getElementById("partidas").innerHTML = "Rounds played:<br> 0";
  document.getElementById("cartas-jogador").innerHTML = "Player<br>Cards: <br> 4";
  document.getElementById("cartas-maquina").innerHTML = "Machine<br>Cards: <br> 4";

  painelInfo.innerHTML = "Vamos Duelar! <br><br> Aceita o Desafio?";

  botao.innerHTML = "Iniciar Torneio";
  botao.onclick = function () {
    iniciarJogo();
  };
}