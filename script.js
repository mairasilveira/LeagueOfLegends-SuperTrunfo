// Botão mostrar ou esconder 

var btnDiv = document.getElementById('btn-div');
var deckLol = document.querySelector('.deckLol');
var trunfoLol = document.querySelector('.trunfoLol');
btnDiv.addEventListener('click', function() {
  if(deckLol.style.display === 'block') {
      deckLol.style.display = 'none';
      trunfoLol.style.display = 'block';
  } else {
      deckLol.style.display = 'block';
      trunfoLol.style.display = 'none';
  }
});

// Carta de interrogação

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
  nome: "Shyvana",
  avatar:  "https://preview.redd.it/c52avlrasmu21.jpg?auto=webp&s=02cdddf7d2fda4aac20c84befd51c3de1d31c037",
  atributos: {
    Stregth: 35,
    Agility: 33,
    Intelligence: 15
  }
};

var carta2 = {
  nome: "Blitzcrank",
  avatar:    "https://i.pinimg.com/originals/05/dd/a8/05dda80b2ff79d6c9486dddf85160c2b.jpg",
  atributos: {
    Stregth: 35,
    Agility: 15,
    Intelligence: 11
  }
};

var carta3 = {
  nome: "Ashe",
  avatar:
    "https://i.pinimg.com/originals/73/bf/a9/73bfa9f186e5a9444364c4b67b8d25e5.jpg",
  atributos: {
    Stregth: 31,
    Agility: 21,
    Intelligence: 44
  }
};

var carta4 = {
  nome: "Yasuo",
  avatar:
    "https://i.pinimg.com/474x/bb/61/8d/bb618d5f370cb46c5b043fd6fdc65fe4.jpg",
  atributos: {
    Stregth: 44,
    Agility: 44,
    Intelligence: 0
  }
};

var carta5 = {
  nome: "Camile",
  avatar: "https://wallpapersflix.com/lol/wp-content/uploads/2020/07/camille-League-of-Legends-Wallpaper.jpg",
  atributos: {
    Stregth: 47,
    Agility: 39,
    Intelligence: 20
  }
};

var carta6 = {
  nome: "Cho'gath",
  avatar: "http://www.usefulcraft.com/wp-content/uploads/2019/12/chogath-2.jpg",
  atributos: {
    Stregth: 60,
    Agility: 1,
    Intelligence: 1
  }
};

var carta7 = {
  nome: "Bardo",
  avatar:    "https://i.redd.it/7ztrm0t6av621.jpg",
  atributos: {
    Stregth: 28,
    Agility: 11,
    Intelligence: 40
  }
};

var carta8 = {
  nome: "Akali",
  avatar:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6303268c-f2c7-4dce-8cbb-3b49bd9dd6af/df0noq7-82ab18bd-80ab-48ab-8ffd-77e217794f9d.png/v1/fill/w_632,h_1264,q_70,strp/akali___league_of_legends___mobile_by_gabe_flint_df0noq7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0OCIsInBhdGgiOiJcL2ZcLzYzMDMyNjhjLWYyYzctNGRjZS04Y2JiLTNiNDliZDlkZDZhZlwvZGYwbm9xNy04MmFiMThiZC04MGFiLTQ4YWItOGZmZC03N2UyMTc3OTRmOWQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dgYLVpNnSFtKerPqRWzs9cH-ZjLNBHJUvEU0sxKbe1s",
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

// Função que inicia o primeiro duelo do torneio

function iniciarJogo() {
  resetaTela();

  divideCartas();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha

  document.getElementById("info-center").innerHTML =
    "Choose your attribute<br><br> and go fight!";

  // Muda o contexto do botão para a opção duelar

  var btnJogar = document.getElementById("btnJogar");
  btnJogar.disabled = true;
  btnJogar.classList.remove("button:active");
  document.getElementById("btnJogar").innerHTML = "Fight!!!";
}

// Função que inicia duelos seguintes do torneio

function continuarDuelando() {
  resetaTela();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha

  document.getElementById("info-center").innerHTML =
    "Choose your attribute<br><br> and go fight!";

  // Muda o contexto do botão para a opção duelar

  document.getElementById("btnJogar").disabled = true;

  document.getElementById("btnJogar").innerHTML = "Fight!!!";
}

// Funcão que cria os baralhos do jogador e da máquina

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

// Função que sorteia as cartas
function sorteiaCartas() {
  cartaJogador = parseInt(Math.random() * baralhoJogador.length);
  cartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
}

// Função que volta a tela para a condição de inicio do jogo
function resetaTela() {
  // resetando o painel da esquerda
  document.getElementById("left-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-left").style.backgroundImage = "";
  document.getElementById("attribs-left").innerHTML = "";

  // resetando o painel central
  document.getElementById("info-center").innerHTML =
    "Play again?";

  // resetando o painel da direita
  document.getElementById("right-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-right").style.backgroundImage = "";
  document.getElementById("attribs-right").innerHTML = "";
}

// Função que exibe uma carta na tela
function exibeCarta(carta, posicao) {
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

  // exibe o painel final de informações
  document.getElementById("div-end").style.opacity = "0.8";
}

// Funcão que controla os casos de radio não selecionados

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

// Função que verifica qual atributo foi escolhido para o duelo

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      return radioAtributo[radio].value;
    }
  }
}

// Função que dispara o duelo e compara as cartas

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

// Função que informa os resultados de duelas e computa os pontos
function computaResultado(resultado) {
  var painelInfo = document.getElementById("info-center");
  ganhador = resultado;
  placar[resultado] += 1;
  partidas++;

  exibeCarta(baralhoMaquina[cartaMaquina], "right");
  imprimeResultado();

  // Transfere para o jogador a carta da máquina

  if (ganhador == 1) {
    baralhoJogador.push(baralhoMaquina[cartaMaquina]);
    baralhoMaquina.splice(cartaMaquina, 1);
  }

  // Transfere para a máquina a carta do jogador

  if (ganhador == 2) {
    baralhoMaquina.push(baralhoJogador[cartaJogador]);
    baralhoJogador.splice(cartaJogador, 1);
  }
  atualizaPlacar();
}

// Função que imprime o resultado de um duelo

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

  // Imprime os blocos de resultado sobre as cartas

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

  // Imprime as informações do painel central
  painelInfo.innerHTML = mensagemResultado;

  // Exibe placar
  labelCentral.style.color = "#dcdcdc";
  labelCentral.innerHTML = placar[1] + " x " + placar[2];

  // Exibe contagem de cartas e partida
  labelPartidas.innerHTML = "Rounds played: <br>" + partidas;
  cartasJogador.innerHTML = "Player<br>Cards: <br>" + baralhoJogador.length;
  cartasMaquina.innerHTML = "Machine<br>Cards: <br>" + baralhoMaquina.length;
}

// Exibe mensagens quando um jogador fica com todas as cartas

function fimDeJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");
  var mensagem;

  if (ganhador == 1) {
    mensagem = "Congratulations!!!<br><br>You Win!";
  } else {
    mensagem = "Defeat!<br><br>You Lose<br><br>the Battle!";
  }

  painelInfo.innerHTML = mensagem;
  botao.innerHTML = "Play again";
  botao.setAttribute("onclick", "reiniciarJogo()");
}

// Volta tudo ao ponto zero

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

  painelInfo.innerHTML = "GG WP. That was fun!";

  botao.innerHTML = "Play again";
  botao.onclick = function () {
    iniciarJogo();
  };
}