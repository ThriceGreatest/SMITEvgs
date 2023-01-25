//TO DO:
//CLEAR TEXT BOX ON SUCCESSFUL AUDIO
//GET TEXT BOX WORKING WHENEVER FOCUSED ON TAB
//ALLIGN CSS BETTER



function reset(){

  row1.style.visibility = "hidden"
  document.querySelectorAll('.column').forEach(function(element) {
    element.style.visibility = 'hidden';
  });
  document.querySelectorAll('td').forEach(function(element) {
    element.style.border = '3px solid black';
  });
}

//Text Box
var searchBox = document.getElementById('textEntry')
searchBox.addEventListener('keyup', VGS_Listen)

//Reset text box if bad inputs
document.getElementById("textEntry").addEventListener("keyup", function(event) {
  if (event.key === "Enter" || event.key === "Backspace" || event.key === " ") {
    this.value = "";
    reset();
  }
   if (this.value.length > 5) {
    this.value = "";
    reset();
  }
});

//Allow text box always active
window.addEventListener("focus", function() {
  document.getElementById("textEntry").focus();
});

document.addEventListener("click", function(event) {
  if (event.target !== document.getElementById("textEntry")) {
    //event.preventDefault();
    document.getElementById("textEntry").focus();
  }
});


//VGS
var VGS = document.getElementById('VGS')
var VGS_table = document.getElementById('Default') 
var row1 = document.getElementById('row1')
function VGS_start_(event){

  VGS.style.border = "3px solid gold"
  row1.style.visibility = "visible"

}

VGS.addEventListener('click', VGS_start_)



//Attack
var A = document.getElementById('A')
var Attack = document.getElementById('Attack_')

function Attack_(event){
    reset();
    row1.style.visibility = "visible"
    VGS.style.border = "3px solid gold"

    console.log("== The window was clicked")
    Attack.style.visibility = "visible"
    A.style.border = "3px solid gold"
}
A.addEventListener('click', Attack_)


  //Attack_1 
  var A1 = document.getElementById('A1')
  function Attack_1(event){
      A1.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_1.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }
  A1.addEventListener('click', Attack_1)

  //Attack_3
  var A2 = document.getElementById('A2')
  A2.addEventListener('click', Attack_2)
  function Attack_2(event){
      A2.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_2.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_3
  var A3 = document.getElementById('A3')
  A3.addEventListener('click', Attack_3)
  function Attack_3(event){
      A3.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_3.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_A
  var AA = document.getElementById('AA')
  AA.addEventListener('click', Attack_A)
  function Attack_A(event){
      AA.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_A.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_F
  var AF = document.getElementById('AF')
  AF.addEventListener('click', Attack_F)
  function Attack_F(event){
      AF.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_F.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_G
  var AG = document.getElementById('AG')
  AG.addEventListener('click', Attack_G)
  function Attack_G(event){
      AG.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_G.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_M
  var AM = document.getElementById('AM')
  AM.addEventListener('click', Attack_M)
  function Attack_M(event){
      AM.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_M.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Attack_N
  var AN = document.getElementById('AN')
  AN.addEventListener('click', Attack_N)
  function Attack_N(event){
      AN.style.border = "3px solid gold"
      new Audio("voice/Ymir_Attack_N.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)


  }

//Attack_Tower_
var AT = document.getElementById('AT')
var Attack_Tower_ = document.getElementById('Attack_Tower_')
function Attack_Tower(event){
    console.log("== The window was clicked")
    AT.style.border = "3px solid gold"
    Attack_Tower_.style.visibility = "visible"
}
AT.addEventListener('click', Attack_Tower)

  //Attack_Tower_1
  var AT1 = document.getElementById('AT1')
  AT1.addEventListener('click', Attack_Tower_1)
  function Attack_Tower_1(event){
      AT1.style.border = "3px solid gold"
      new Audio("voice/Ymir_Tower_1.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)

  }

  //Attack_Tower_2
  var AT2 = document.getElementById('AT2')
  AT2.addEventListener('click', Attack_Tower_2)
  function Attack_Tower_2(event){
      AT2.style.border = "3px solid gold"
      new Audio("voice/Ymir_Tower_2.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)

  }

  //Attack_Tower_3
  var AT3 = document.getElementById('AT3')
  AT3.addEventListener('click', Attack_Tower_3)
  function Attack_Tower_3(event){
      AT3.style.border = "3px solid gold"
      new Audio("voice/Ymir_Tower_3.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)

  }


//Enemy_
var B = document.getElementById('B')
var Enemy_= document.getElementById('Enemy_')
function Enemy(event){
    reset();
    row1.style.visibility = "visible"
    VGS.style.border = "3px solid gold"

    console.log("== The window was clicked")
    B.style.border = "3px solid gold"
   Enemy_.style.visibility = "visible"
}
B.addEventListener('click', Enemy)

  //Enemy_1
  var B1 = document.getElementById('B1')
  B1.addEventListener('click', Enemy_1)
  function Enemy_1(event){
      B1.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_1.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_2
  var B2 = document.getElementById('B2')
  B2.addEventListener('click', Enemy_2)
  function Enemy_2(event){
      B2.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_2.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_3
  var B3 = document.getElementById('B3')
  B3.addEventListener('click', Enemy_3)
  function Enemy_3(event){
      B3.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_3.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_A
  var BA = document.getElementById('BA')
  BA.addEventListener('click', Enemy_A)
  function Enemy_A(event){
      BA.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_A.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_B
  var BB = document.getElementById('BB')
  BB.addEventListener('click', Enemy_B)
  function Enemy_B(event){
      BB.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_B.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_D
  var BD = document.getElementById('BD')
  BD.addEventListener('click', Enemy_D)
  function Enemy_D(event){
      BD.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_D.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_E
  var BE = document.getElementById('BE')
  BE.addEventListener('click', Enemy_E)
  function Enemy_E(event){
      BE.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_E.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_F
  var BF = document.getElementById('BF')
  BF.addEventListener('click', Enemy_F)
  function Enemy_F(event){
      BF.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_F.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_G
  var BG = document.getElementById('BG')
  BG.addEventListener('click', Enemy_G)
  function Enemy_G(event){
      BG.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_G.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_M
  var BM = document.getElementById('BM')
  BM.addEventListener('click', Enemy_M)
  function Enemy_M(event){
      BM.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_M.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

  //Enemy_S
  var BS = document.getElementById('BS')
  BS.addEventListener('click', Enemy_S)
  function Enemy_S(event){
      BS.style.border = "3px solid gold"
      new Audio("voice/Ymir_Enemy_S.ogg").play()
      document.getElementById('textEntry').value = ''  
      setTimeout(reset, 0)
  }

//Careful_
var C = document.getElementById('C')
var Careful_= document.getElementById('Careful_')
function Careful(event){
    reset();
    row1.style.visibility = "visible";
    VGS.style.border = "3px solid gold"

    console.log("== The window was clicked")
    C.style.border = "3px solid gold"
    Careful_.style.visibility = "visible"
}
C.addEventListener('click', Careful)


  // Careful_1
  var C1 = document.getElementById('C1');
  C1.addEventListener('click', Careful_1);
  function Careful_1(event) {
    C1.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Careful_2
  var C2 = document.getElementById('C2');
  C2.addEventListener('click', Careful_2);
  function Careful_2(event) {
    C2.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Careful_3
  var C3 = document.getElementById('C3');
  C3.addEventListener('click', Careful_3);
  function Careful_3(event) {
    C3.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Careful_B
  var CB = document.getElementById('CB');
  CB.addEventListener('click', Careful_B);
  function Careful_B(event) {
    CB.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_B.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Careful_C
  var CC = document.getElementById('CC');
  CC.addEventListener('click', Careful_C);
  function Careful_C(event) {
    CC.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_C.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  var CJ = document.getElementById('CJ');
  CJ.addEventListener('click', Careful_J);
  function Careful_J(event) {
    CJ.style.border = "3px solid gold";
    new Audio("voice/Ymir_Careful_J.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

// Defend
var D = document.getElementById('D');
var Defend = document.getElementById('Defend_');
function Defend_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  console.log("== The window was clicked");
  Defend.style.visibility = "visible";
  D.style.border = "3px solid gold";
}
D.addEventListener('click', Defend_);

  // Defend_1
  var D1 = document.getElementById('D1');
  D1.addEventListener('click', Defend_1);
  function Defend_1(event) {
    D1.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_2
  var D2 = document.getElementById('D2');
  D2.addEventListener('click', Defend_2);
  function Defend_2(event) {
    D2.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_3
  var D3 = document.getElementById('D3');
  D3.addEventListener('click', Defend_3);
  function Defend_3(event) {
    D3.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_D
  var DD = document.getElementById('DD');
  DD.addEventListener('click', Defend_D);
  function Defend_D(event) {
    DD.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_D.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_F
  var DF = document.getElementById('DF');
  DF.addEventListener('click', Defend_F);
  function Defend_F(event) {
    DF.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_F.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_G
  var DG = document.getElementById('DG');
  DG.addEventListener('click', Defend_G);
  function Defend_G(event) {
    DG.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_G.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

  // Defend_M
  var DM = document.getElementById('DM');
  DM.addEventListener('click', Defend_M);
  function Defend_M(event) {
    DM.style.border = "3px solid gold";
    new Audio("voice/Ymir_Defend_M.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  }

// Emotes
var E = document.getElementById('E');
var Emotes = document.getElementById('Emotes_');
function Emotes_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"
  
  Emotes.style.visibility = "visible";
  E.style.border = "3px solid gold";
}
E.addEventListener('click', Emotes_);


  // Emotes_A
  var EA = document.getElementById('EA');
  EA.addEventListener('click', function(event) {
    EA.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_A.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_G
  var EG = document.getElementById('EG');
  EG.addEventListener('click', function(event) {
    EG.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_G.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_J
  var EJ = document.getElementById('EJ');
  EJ.addEventListener('click', function(event) {
    EJ.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_J.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_L
  var EL = document.getElementById('EL');
  EL.addEventListener('click', function(event) {
    EL.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_L.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_R
  var ER = document.getElementById('ER');
  ER.addEventListener('click', function(event) {
    ER.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_R.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_T
  var ET = document.getElementById('ET');
  ET.addEventListener('click', function(event) {
    ET.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_T.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Emotes_W
  var EW = document.getElementById('EW');
  EW.addEventListener('click', function(event) {
    EW.style.border = "3px solid gold";
    new Audio("voice/Ymir_Emote_W.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });



// MIA
var F = document.getElementById('F');
var MIA = document.getElementById('MIA_');

function MIA_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  MIA.style.visibility = "visible";
  F.style.border = "3px solid gold";
}
F.addEventListener('click', MIA_);

  // MIA_1
  var M1 = document.getElementById('M1');
  M1.addEventListener('click', function(event) {
    M1.style.border = "3px solid gold";
    new Audio("voice/Ymir_MIA_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // MIA_2
  var M2 = document.getElementById('M2');
  M2.addEventListener('click', function(event) {
    M2.style.border = "3px solid gold";
    new Audio("voice/Ymir_MIA_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // MIA_3
  var M3 = document.getElementById('M3');
  M3.addEventListener('click', function(event) {
    M3.style.border = "3px solid gold";
    new Audio("voice/Ymir_MIA_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // MIA_F
  var MF = document.getElementById('MF');
  MF.addEventListener('click', function(event) {
    MF.style.border = "3px solid gold";
    new Audio("voice/Ymir_MIA_F.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

// GANK 
var G = document.getElementById('G');
var Gank = document.getElementById('Gank_');

function Gank_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  Gank.style.visibility = "visible";
  G.style.border = "3px solid gold";
}
G.addEventListener('click', Gank_);

  // Gank_1
  var G1 = document.getElementById('G1');
  G1.addEventListener('click', function(event) {
    G1.style.border = "3px solid gold";
    new Audio("voice/Ymir_Gank_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Gank_2
  var G2 = document.getElementById('G2');
  G2.addEventListener('click', function(event) {
    G2.style.border = "3px solid gold";
    new Audio("voice/Ymir_Gank_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Gank_3
  var G3 = document.getElementById('G3');
  G3.addEventListener('click', function(event) {
    G3.style.border = "3px solid gold";
    new Audio("voice/Ymir_Gank_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Gank_G
  var GG = document.getElementById('GG');
  GG.addEventListener('click', function(event) {
    GG.style.border = "3px solid gold";
    new Audio("voice/Ymir_Gank_G.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

// HELP
var H = document.getElementById('H');
var Help = document.getElementById('Help_');

function Help_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  Help.style.visibility = "visible";
  H.style.border = "3px solid gold";
}

H.addEventListener('click', Help_);

  // Help_1
  var H1 = document.getElementById('H1');
  H1.addEventListener('click', function(event) {
    H1.style.border = "3px solid gold";
    new Audio("voice/Ymir_Help_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Help_2
  var H2 = document.getElementById('H2');
  H2.addEventListener('click', function(event) {
    H2.style.border = "3px solid gold";
    new Audio("voice/Ymir_Help_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Help_3
  var H3 = document.getElementById('H3');
  H3.addEventListener('click', function(event) {
    H3.style.border = "3px solid gold";
    new Audio("voice/Ymir_Help_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Help_H
  var HH = document.getElementById('HH');
  HH.addEventListener('click', function(event) {
    HH.style.border = "3px solid gold";
    new Audio("voice/Ymir_Help_H.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Help_S
  var HS = document.getElementById('HS');
  HS.addEventListener('click', function(event) {
    HS.style.border = "3px solid gold";
    new Audio("voice/Ymir_Help_S.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

// INCOMING
var I = document.getElementById('I');
var Incoming = document.getElementById('Incoming_');

function Incoming_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  Incoming.style.visibility = "visible";
  I.style.border = "3px solid gold";
}
I.addEventListener('click', Incoming_);

  // Incoming_1
  var I1 = document.getElementById('I1');
  I1.addEventListener('click', function(event) {
    I1.style.border = "3px solid gold";
    new Audio("voice/Ymir_Incoming_1.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Incoming_2
  var I2 = document.getElementById('I2');
  I2.addEventListener('click', function(event) {
    I2.style.border = "3px solid gold";
    new Audio("voice/Ymir_Incoming_2.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Incoming_3
  var I3 = document.getElementById('I3');
  I3.addEventListener('click', function(event) {
    I3.style.border = "3px solid gold";
    new Audio("voice/Ymir_Incoming_3.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

  // Incoming_I
  var II = document.getElementById('II');
  II.addEventListener('click', function(event) {
    II.style.border = "3px solid gold";
    new Audio("voice/Ymir_Incoming_I.ogg").play()
    document.getElementById('textEntry').value = ''  ;
    setTimeout(reset, 0);
  });

//WARD
var Q = document.getElementById('Q');
var Ward = document.getElementById('Ward_');

function Ward_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"

  Ward.style.visibility = "visible";
  Q.style.border = "3px solid gold";
}

  //Ward_1
  var W1 = document.getElementById('W1');
  W1.addEventListener('click', function(event) {
  W1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_2
  var W2 = document.getElementById('W2');
  W2.addEventListener('click', function(event) {
  W2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_3
  var W3 = document.getElementById('W3');
  W3.addEventListener('click', function(event) {
  W3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_F
  var WF = document.getElementById('WF');
  WF.addEventListener('click', function(event) {
  WF.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_F.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_G
  var WG = document.getElementById('WG');
  WG.addEventListener('click', function(event) {
  WG.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_G.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_N
  var WN = document.getElementById('WN');
  WN.addEventListener('click', function(event) {
  WN.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_N.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Ward_Q
  var WQ = document.getElementById('WQ');
  WQ.addEventListener('click', function(event) {
  WQ.style.border = "3px solid gold";
  new Audio("voice/Ymir_Ward_Q.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

Q.addEventListener('click', Ward_);

//RETREAT
var R = document.getElementById('R');
var Retreat = document.getElementById('Retreat_');

function Retreat_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"
  Retreat.style.visibility = "visible";
  R.style.border = "3px solid gold";
}
R.addEventListener('click', Retreat_);

  // Retreat_1
  var R1 = document.getElementById('R1');
  R1.addEventListener('click', function(event) {
  R1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Retreat_2
  var R2 = document.getElementById('R2');
  R2.addEventListener('click', function(event) {
  R2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Retreat_3
  var R3 = document.getElementById('R3');
  R3.addEventListener('click', function(event) {
  R3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Retreat_J
  var RJ = document.getElementById('RJ');
  RJ.addEventListener('click', function(event) {
  RJ.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_J.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Retreat_R
  var RR = document.getElementById('RR');
  RR.addEventListener('click', function(event) {
  RR.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_R.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //Retreat_S
  var RS = document.getElementById('RS');
  RS.addEventListener('click', function(event) {
  RS.style.border = "3px solid gold";
  new Audio("voice/Ymir_Retreat_S.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

//SELF
var S = document.getElementById('S');
var Self = document.getElementById('Self_');
function Self_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"
  Self.style.visibility = "visible";
  S.style.border = "3px solid gold";
}
S.addEventListener('click', Self_);



  //SELF_Attack
  var SA = document.getElementById('SA');
  var Self_Attack = document.getElementById('Self_Attack_');
  function Self_Attack_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Attack.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  SA.style.border = "3px solid gold";
  }
  SA.addEventListener('click', Self_Attack_);

  //SELF_Attack_1
  var SA1 = document.getElementById('SA1');
  SA1.addEventListener('click', function(event) {
  SA1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Attack_2
  var SA2 = document.getElementById('SA2');
  SA2.addEventListener('click', function(event) {
  SA2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Attack_3
  var SA3 = document.getElementById('SA3');
  SA3.addEventListener('click', function(event) {
  SA3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });
  
  
  //SELF_Attack_A
  var SAA = document.getElementById('SAA');
  SAA.addEventListener('click', function(event) {
  SAA.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_A.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Attack_F
  var SAF = document.getElementById('SAF');
  SAF.addEventListener('click', function(event) {
  SAF.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_F.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Attack_G
  var SAG = document.getElementById('SAG');
  SAG.addEventListener('click', function(event) {
  SAG.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_G.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Attack_M
  var SAM = document.getElementById('SAM');
  SAM.addEventListener('click', function(event) {
  SAM.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Attack_M.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_B
  var SB = document.getElementById('SB');
  var Self_Buff = document.getElementById('Self_Buff_');
  function Self_Buff_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Buff.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  SB.style.border = "3px solid gold";
  }
  SB.addEventListener('click', Self_Buff_);

  //SELF_D
  var SD = document.getElementById('SD');
  var Self_Defend = document.getElementById('Self_Defend_');
  function Self_Defend_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Defend.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  SD.style.border = "3px solid gold";
  }
  SD.addEventListener('click', Self_Defend_);

  //SELF_Buff_B
  var SBB = document.getElementById('SBB');
  SBB.addEventListener('click', function(event) {
  SBB.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_B.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Buff_N
  var SBN = document.getElementById('SBN');
  SBN.addEventListener('click', function(event) {
  SBN.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_N.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Buff_T
  var SBT = document.getElementById('SBT');
  SBT.addEventListener('click', function(event) {
  SBT.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_T.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_1
  var SD1 = document.getElementById('SD1');
  SD1.addEventListener('click', function(event) {
  SD1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_2
  var SD2 = document.getElementById('SD2');
  SD2.addEventListener('click', function(event) {
  SD2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_3
  var SD3 = document.getElementById('SD3');
  SD3.addEventListener('click', function(event) {
  SD3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_D
  var SDD = document.getElementById('SDD');
  SDD.addEventListener('click', function(event) {
  SDD.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_D.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_F
  var SDF = document.getElementById('SDF');
  SDF.addEventListener('click', function(event) {
  SDF.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_F.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_G
  var SDG = document.getElementById('SDG');
  SDG.addEventListener('click', function(event) {
  SDG.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_G.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Defend_M
  var SDM = document.getElementById('SDM');
  SDM.addEventListener('click', function(event) {
  SDM.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Defend_M.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_G
  var SG = document.getElementById('SG');
  var Self_Gank = document.getElementById('Self_Gank_');
  function Self_Gank_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Gank.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  SG.style.border = "3px solid gold";
  }
  SG.addEventListener('click', Self_Gank_);
  //SELF_Gank_1
  var SG1 = document.getElementById('SG1');
  SG1.addEventListener('click', function(event) {
  SG1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Gank_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Gank_2
  var SG2 = document.getElementById('SG2');
  SG2.addEventListener('click', function(event) {
  SG2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Gank_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Gank_3
  var SG3 = document.getElementById('SG3');
  SG3.addEventListener('click', function(event) {
  SG3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Gank_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Gank_G
  var SGG = document.getElementById('SGG');
  SGG.addEventListener('click', function(event) {
  SGG.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Gank_G.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Q
  var SQ = document.getElementById('SQ');
  var Self_Ward = document.getElementById('Self_Ward_');
  function Self_Ward_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Ward.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  SQ.style.border = "3px solid gold";
  }
  SQ.addEventListener('click', Self_Ward_);

  //SELF_Ward_1
  var SQ1 = document.getElementById('SQ1');
  SQ1.addEventListener('click', function(event) {
  SQ1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Ward_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Ward_2
  var SQ2 = document.getElementById('SQ2');
  SQ2.addEventListener('click', function(event) {
  SQ2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Ward_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Ward_3
  var SQ3 = document.getElementById('SQ3');
  SQ3.addEventListener('click', function(event) {
  SQ3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Ward_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Ward_Q
  var SQQ = document.getElementById('SQQ');
  SQQ.addEventListener('click', function(event) {
  SQQ.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Ward_Q.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_T
  var ST = document.getElementById('ST');
  var Self_Returned = document.getElementById('Self_Returned_');
  function Self_Returned_(event) {
  reset();
  row1.style.visibility = "visible"
  Self.style.visibility = "visible"
  Self_Returned.style.visibility = "visible";
  S.style.border = "3px solid gold"
  VGS.style.border = "3px solid gold"
  ST.style.border = "3px solid gold";
  }
  ST.addEventListener('click', Self_Returned_);

  //SELF_Returned_1
  var ST1 = document.getElementById('ST1');
  ST1.addEventListener('click', function(event) {
  ST1.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Returned_1.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Returned_2
  var ST2 = document.getElementById('ST2');
  ST2.addEventListener('click', function(event) {
  ST2.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Returned_2.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Returned_3
  var ST3 = document.getElementById('ST3');
  ST3.addEventListener('click', function(event) {
  ST3.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Returned_3.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Returned_B
  var STB = document.getElementById('STB');
  STB.addEventListener('click', function(event) {
  STB.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Returned_B.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  //SELF_Returned_T
  var STT = document.getElementById('STT');
  STT.addEventListener('click', function(event) {
  STT.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_Returned_T.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Self_O
  var SO = document.getElementById('SO');
  SO.addEventListener('click', function(event) {
  SO.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_O.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Self_R
  var SR = document.getElementById('SR');
  SR.addEventListener('click', function(event) {
  SR.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_R.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

  // Self_S
  var SS = document.getElementById('SS');
  SS.addEventListener('click', function(event) {
  SS.style.border = "3px solid gold";
  new Audio("voice/Ymir_Self_S.ogg").play()
  document.getElementById('textEntry').value = ''  ;
  setTimeout(reset, 0);
  });

//RETURNED
var T = document.getElementById('T');
var Returned = document.getElementById('Returned_');

function Returned_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"
  Returned.style.visibility = "visible";
  T.style.border = "3px solid gold";
}

T.addEventListener('click', Returned_);

// Returned_1
var T1 = document.getElementById('T1');
T1.addEventListener('click', function(event) {
T1.style.border = "3px solid gold";
new Audio("voice/Ymir_Returned_1.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});


// Returned_2
var T2 = document.getElementById('T2');
T2.addEventListener('click', function(event) {
T2.style.border = "3px solid gold";
new Audio("voice/Ymir_Returned_2.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

// Returned_2
var T3 = document.getElementById('T3');
T3.addEventListener('click', function(event) {
T3.style.border = "3px solid gold";
new Audio("voice/Ymir_Returned_3.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

// Returned_T
var TT = document.getElementById('TT');
TT.addEventListener('click', function(event) {
TT.style.border = "3px solid gold";
new Audio("voice/Ymir_Returned_T.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//OTHER
var V = document.getElementById('V');
var Other = document.getElementById('Other_');

function Other_(event) {
  reset();
  row1.style.visibility = "visible"
  VGS.style.border = "3px solid gold"
  Other.style.visibility = "visible";
  V.style.border = "3px solid gold";
}

V.addEventListener('click', Other_);

//Other_A
var OA = document.getElementById('OA');
OA.addEventListener('click', function(event) {
OA.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_A.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_B
var OB = document.getElementById('OB');
OB.addEventListener('click', function(event) {
OB.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_B.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_C
var OC = document.getElementById('OC');
OC.addEventListener('click', function(event) {
OC.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_C.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_K
var OK = document.getElementById('OK');
OK.addEventListener('click', function(event) {
OK.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_K.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_M
var OM = document.getElementById('OM');
OM.addEventListener('click', function(event) {
OM.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_M.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_N
var ON = document.getElementById('ON');
ON.addEventListener('click', function(event) {
ON.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_N.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_P
var OP = document.getElementById('OP');
OP.addEventListener('click', function(event) {
OP.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_P.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_S
var OS = document.getElementById('OS');
OS.addEventListener('click', function(event) {
OS.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_S.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_T
var OT = document.getElementById('OT');
OT.addEventListener('click', function(event) {
OT.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_T.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_W
var OW = document.getElementById('OW');
OW.addEventListener('click', function(event) {
OW.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_W.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_X
var OX = document.getElementById('OX');
OX.addEventListener('click', function(event) {
OX.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_X.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Y
var OY = document.getElementById('OY');
OY.addEventListener('click', function(event) {
OY.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_Y.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//OTHER_GENERAL
var OG = document.getElementById('OG');
var General = document.getElementById('General_');

OG.addEventListener('click', function(event) {
General.style.visibility = "visible";
OG.style.border = "3px solid gold";
});

//OTHER_POSITON
var OV = document.getElementById('OV');
var Position = document.getElementById('Position_');

OV.addEventListener('click', function(event) {
Position.style.visibility = "visible";
OV.style.border = "3px solid gold";
});

//Other_General_B
var GB = document.getElementById('GB');
GB.addEventListener('click', function(event) {
GB.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_B.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_F
var GF = document.getElementById('GF');
GF.addEventListener('click', function(event) {
GF.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_F.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_G
var GG = document.getElementById('GG+');
GG.addEventListener('click', function(event) {
GG.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_G.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_H
var GH = document.getElementById('GH');
GH.addEventListener('click', function(event) {
GH.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_H.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_L
var GL = document.getElementById('GL');
GL.addEventListener('click', function(event) {
GL.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_L.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_N
var GN = document.getElementById('GN');
GN.addEventListener('click', function(event) {
GN.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_N.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_O
var GO = document.getElementById('GO');
GO.addEventListener('click', function(event) {
GO.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_O.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_Q
var GQ = document.getElementById('GQ');
GQ.addEventListener('click', function(event) {
GQ.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_Q.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_R
var GR = document.getElementById('GR');
GR.addEventListener('click', function(event) {
GR.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_R.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_S
var GS = document.getElementById('GS');
GS.addEventListener('click', function(event) {
GS.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_S.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_General_T
var GT = document.getElementById('GT');
GT.addEventListener('click', function(event) {
GT.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_T.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});


//Other_General_W
var GW = document.getElementById('GW');
GW.addEventListener('click', function(event) {
GW.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_G_W.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});


//Other_Position_A
var PA = document.getElementById('PA');
PA.addEventListener('click', function(event) {
PA.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_A.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_B
var PB = document.getElementById('PB');
PB.addEventListener('click', function(event) {
PB.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_B.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_C
var PC = document.getElementById('PC');
PC.addEventListener('click', function(event) {
PC.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_C.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_D
var PD = document.getElementById('PD');
PD.addEventListener('click', function(event) {
PD.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_D.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_E
var PE = document.getElementById('PE');
PE.addEventListener('click', function(event) {
PE.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_E.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_F
var PF = document.getElementById('PF');
PF.addEventListener('click', function(event) {
PF.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_F.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_G
var PG = document.getElementById('PG');
PG.addEventListener('click', function(event) {
PG.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_G.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_J
var PJ = document.getElementById('PJ');
PJ.addEventListener('click', function(event) {
PJ.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_J.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_P
var PP = document.getElementById('PP');
PP.addEventListener('click', function(event) {
PP.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_P.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_R
var PR = document.getElementById('PR');
PR.addEventListener('click', function(event) {
PR.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_R.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_S
var PS = document.getElementById('PS');
PS.addEventListener('click', function(event) {
PS.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_S.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_T
var PT = document.getElementById('PT');
PT.addEventListener('click', function(event) {
PT.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_T.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_W
var PW = document.getElementById('PW');
PW.addEventListener('click', function(event) {
PW.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_W.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Other_Position_X
var PX = document.getElementById('PX');
PX.addEventListener('click', function(event) {
PX.style.border = "3px solid gold";
new Audio("voice/Ymir_Other_V_X.ogg").play()
document.getElementById('textEntry').value = ''  ;
setTimeout(reset, 0);
});

//Text Box
function VGS_Listen(event){
    let command = document.getElementById('textEntry').value
    command = command.toUpperCase()


  //Painful, repetitive code :')
  if (command === 'V') {
    var element = document.getElementById('VGS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
  }
    if (command === 'VA') {
    var element = document.getElementById('A');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VB') {
    var element = document.getElementById('B');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VD') {
    var element = document.getElementById('D');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VC') {
    var element = document.getElementById('C');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VD') {
    var element = document.getElementById('D');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VE') {
    var element = document.getElementById('E');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VF') {
    var element = document.getElementById('F');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VG') {
    var element = document.getElementById('G');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VH') {
    var element = document.getElementById('H');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VH') {
    var element = document.getElementById('H');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VI') {
    var element = document.getElementById('I');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQ') {
    var element = document.getElementById('Q');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VR') {
    var element = document.getElementById('R');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VS') {
    var element = document.getElementById('S');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VT') {
    var element = document.getElementById('T');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VV') {
    var element = document.getElementById('V');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VA1') {
    var element = document.getElementById('A1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VA2') {
    var element = document.getElementById('A2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VA3') {
    var element = document.getElementById('A3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAA') {
    var element = document.getElementById('AA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAF') {
    var element = document.getElementById('AF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAG') {
    var element = document.getElementById('AG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAM') {
    var element = document.getElementById('AM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAN') {
    var element = document.getElementById('AN');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAT') {
    var element = document.getElementById('AT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VAT1') {
    var element = document.getElementById('AT1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAT2') {
    var element = document.getElementById('AT2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VAT3') {
    var element = document.getElementById('AT3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VB1') {
    var element = document.getElementById('B1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VB2') {
    var element = document.getElementById('B2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VB3') {
    var element = document.getElementById('B3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBA') {
    var element = document.getElementById('BA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBB') {
    var element = document.getElementById('BB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBD') {
    var element = document.getElementById('BD');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBE') {
    var element = document.getElementById('BE');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBF') {
    var element = document.getElementById('BF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBG') {
    var element = document.getElementById('BG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VBM') {
    var element = document.getElementById('BM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VBS') {
    var element = document.getElementById('BS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VC1') {
    var element = document.getElementById('C1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VC2') {
    var element = document.getElementById('C2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VC3') {
    var element = document.getElementById('C3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VCB') {
    var element = document.getElementById('CB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VCC') {
    var element = document.getElementById('CC');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VCJ') {
    var element = document.getElementById('CJ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VD1') {
    var element = document.getElementById('D1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VD2') {
    var element = document.getElementById('D2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VD3') {
    var element = document.getElementById('D3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VDD') {
    var element = document.getElementById('DD');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VDF') {
    var element = document.getElementById('DF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VDG') {
    var element = document.getElementById('DG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VDM') {
    var element = document.getElementById('DM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VEA') {
    var element = document.getElementById('EA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VEG') {
    var element = document.getElementById('EG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VEJ') {
    var element = document.getElementById('EJ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VEL') {
    var element = document.getElementById('EL');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VER') {
    var element = document.getElementById('ER');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VET') {
    var element = document.getElementById('ET');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VEW') {
    var element = document.getElementById('EW');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VF1') {
    var element = document.getElementById('M1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VF2') {
    var element = document.getElementById('M2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VF3') {
    var element = document.getElementById('M3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VFF') {
    var element = document.getElementById('MF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VG1') {
    var element = document.getElementById('G1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VG2') {
    var element = document.getElementById('G2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VG3') {
    var element = document.getElementById('G3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VGG') {
    var element = document.getElementById('GG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VH1') {
    var element = document.getElementById('H1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VH2') {
    var element = document.getElementById('H2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VH3') {
    var element = document.getElementById('H3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VHH') {
    var element = document.getElementById('HH');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VHS') {
    var element = document.getElementById('HS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VI1') {
    var element = document.getElementById('I1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VI2') {
    var element = document.getElementById('I2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VI3') {
    var element = document.getElementById('I3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VII') {
    var element = document.getElementById('II');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQ1') {
    var element = document.getElementById('W1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQ2') {
    var element = document.getElementById('W2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQ3') {
    var element = document.getElementById('W3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQF') {
    var element = document.getElementById('WF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQG') {
    var element = document.getElementById('WG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQN') {
    var element = document.getElementById('WN');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VQQ') {
    var element = document.getElementById('WQ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VR1') {
    var element = document.getElementById('R1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VR2') {
    var element = document.getElementById('R2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VR3') {
    var element = document.getElementById('R3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VRJ') {
    var element = document.getElementById('RJ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VRR') {
    var element = document.getElementById('RR');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VRS') {
    var element = document.getElementById('RS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VSA') {
    var element = document.getElementById('SA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSB') {
    var element = document.getElementById('SB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSD') {
    var element = document.getElementById('SD');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSQ') {
    var element = document.getElementById('SQ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSG') {
    var element = document.getElementById('SG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VST') {
    var element = document.getElementById('ST');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSO') {
    var element = document.getElementById('SO');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSR') {
    var element = document.getElementById('SR');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSS') {
    var element = document.getElementById('SS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VSA1') {
    var element = document.getElementById('SA1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSA2') {
    var element = document.getElementById('SA2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSA3') {
    var element = document.getElementById('SA3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSAA') {
    var element = document.getElementById('SAA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSAF') {
    var element = document.getElementById('SAF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VDSS') {
    new Audio("voice/Ymir_Attack_L.ogg").play()
    document.getElementById('textEntry').value = ''
    reset();
    }

    if (command === 'VSAG') {
    var element = document.getElementById('SAG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSAM') {
    var element = document.getElementById('SAM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSBB') {
    var element = document.getElementById('SBB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSBN') {
    var element = document.getElementById('SBN');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSBT') {
    var element = document.getElementById('SBT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VSD1') {
    var element = document.getElementById('SD1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSD2') {
    var element = document.getElementById('SD2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSD3') {
    var element = document.getElementById('SD3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSDD') {
    var element = document.getElementById('SDD');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSDF') {
    var element = document.getElementById('SDF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSDG') {
    var element = document.getElementById('SDG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSDM') {
    var element = document.getElementById('SDM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSG1') {
    var element = document.getElementById('SG1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSG2') {
    var element = document.getElementById('SG2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSG3') {
    var element = document.getElementById('SG3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSGG') {
    var element = document.getElementById('SGG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSQ1') {
    var element = document.getElementById('SQ1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSQ2') {
    var element = document.getElementById('SQ2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSQ3') {
    var element = document.getElementById('SQ3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSQQ') {
    var element = document.getElementById('SQQ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VST1') {
    var element = document.getElementById('ST1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VST2') {
    var element = document.getElementById('ST2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VST3') {
    var element = document.getElementById('ST3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSTB') {
    var element = document.getElementById('STB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VSTT') {
    var element = document.getElementById('STT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VT1') {
    var element = document.getElementById('T1');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VT2') {
    var element = document.getElementById('T2');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VT3') {
    var element = document.getElementById('T3');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VTT') {
    var element = document.getElementById('TT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }


    if (command === 'VVG') {
    var element = document.getElementById('OG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVV') {
    var element = document.getElementById('OV');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVA') {
    var element = document.getElementById('OA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVB') {
    var element = document.getElementById('OB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVC') {
    var element = document.getElementById('OC');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVK') {
    var element = document.getElementById('OK');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVM') {
    var element = document.getElementById('OM');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVN') {
    var element = document.getElementById('ON');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVP') {
    var element = document.getElementById('OP');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVS') {
    var element = document.getElementById('OS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVT') {
    var element = document.getElementById('OT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVW') {
    var element = document.getElementById('OW');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVX') {
    var element = document.getElementById('OX');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVY') {
    var element = document.getElementById('OY');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }   

    if (command === 'VVGB') {
    var element = document.getElementById('GB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGF') {
    var element = document.getElementById('GF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGG') {
    var element = document.getElementById('GG+');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGH') {
    var element = document.getElementById('GH');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGL') {
    var element = document.getElementById('GL');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGN') {
    var element = document.getElementById('GN');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGO') {
    var element = document.getElementById('GO');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGQ') {
    var element = document.getElementById('GQ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VVGR') {
    var element = document.getElementById('GR');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGS') {
    var element = document.getElementById('GS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGT') {
    var element = document.getElementById('GT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVGW') {
    var element = document.getElementById('GW');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }
    if (command === 'VVVA') {
    var element = document.getElementById('PA');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVB') {
    var element = document.getElementById('PB');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVC') {
    var element = document.getElementById('PC');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVD') {
    var element = document.getElementById('PD');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVE') {
    var element = document.getElementById('PE');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVF') {
    var element = document.getElementById('PF');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVG') {
    var element = document.getElementById('PG');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVJ') {
    var element = document.getElementById('PJ');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVP') {
    var element = document.getElementById('PP');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVR') {
    var element = document.getElementById('PR');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVS') {
    var element = document.getElementById('PS');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVT') {
    var element = document.getElementById('PT');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVW') {
    var element = document.getElementById('PW');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    if (command === 'VVVX') {
    var element = document.getElementById('PX');
    var clickEvent = new MouseEvent('click');
    element.dispatchEvent(clickEvent);
    }

    
}
