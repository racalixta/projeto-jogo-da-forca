let tries = 6;
let wordList = [];
let secretWordCategory;
let secretWord;

const words = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

// pegando as divs do teclado
const keyboardFirstRow = document.querySelector("#keyboardFirstRow");
const keyboardSecondRow = document.querySelector("#keyboardSecondRow");
const keyboardThirdRow = document.querySelector("#keyboardThirdRow");

// arrays com as letras do keyboard
const keysFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keysSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keysThirdRow = ["Z", "X", "C", "V", "B", "N", "M", "RELOAD"];


// -----------------------------------------------------------

// escolhendo a palavra secreta

function selectWord() {
    const randomIndex = parseInt(Math.random() * words.length);
    console.log(randomIndex)
    secretWordCategory = words[randomIndex].categoria;
    secretWord = words[randomIndex].nome;

    console.log(secretWord)
    console.log(secretWordCategory)

    buildWord();

}

// ----------------------------------------------------------

// montar a palavra na tela

function buildWord() {

    const categoryDiv = document.querySelector(".category");
    categoryDiv.innerHTML = secretWordCategory;

    const secretWordDiv = document.querySelector(".secret-word");
    secretWordDiv.innerHTML = "";

    for (let i = 0; i < secretWord.length; i++) {
        if(wordList[i] == undefined){

            wordList[i] = "&nbsp;"; // espaço no HTML

            secretWordDiv.innerHTML = secretWordDiv.innerHTML + '<div class="letters">' + wordList[i] + '</div>';

        } else {
            secretWordDiv.innerHTML = secretWordDiv.innerHTML + '<div class="letters">' + wordList[i] + '</div>';
        }
        
    }

}

// -----------------------------------------------------------------

// verificando o palpite colocado

function checkKey(key) {
    //document.getElementById(key).disabled = true;
    if(tries > 0) {
        checkList(key);
        buildWord(key);
    }
}

// ----------------------------------------------------------------

// comparando as listas

function checkList(key) {
 
    const letter = document.querySelector("#" + key);
    const pos = secretWord.indexOf(key);

    if (pos < 0) {
        tries--;
        loadImage();
        letter.setAttribute("class", "wrong");

        if (tries == 0) { 
           openModal('OPS!', `Não foi dessa vez... <br> A palavra secreta era: ${secretWord}`);
        }

    } else {    
        for(let i = 0; i < secretWord.length; i++) {
            
            if(secretWord[i] == key) {
                wordList[i] = key;
                letter.setAttribute("class", "right")

            }

         }

    }

    let victory = true;

    for(let i = 0; secretWord.length; i++) {
        if (secretWord[i] != wordList[i]){
            victory = false;
        }
    }

    if(victory == true) {
        openModal('PARABÉNS!!', `Você acertou a palavra secreta!!`);
        tries = 0;
    }

}

// --------------------------------------------------------------

// trocando a imagem da forca

function loadImage() {

    switch (tries) {
        case 5:
            document.querySelector(".image-container").style.background = "url('./img/forca01.png')";
            break; 
        case 4:
            document.querySelector(".image-container").style.background = "url('./img/forca02.png')";
            break; 
        case 3:
            document.querySelector(".image-container").style.background = "url('./img/forca03.png')";
            break; 
        case 2:
            document.querySelector(".image-container").style.background = "url('./img/forca04.png')";
            break; 
        case 1:
            document.querySelector(".image-container").style.background = "url('./img/forca05.png')";
            break; 
        case 0:
            document.querySelector(".image-container").style.background = "url('./img/forca06.png')";
            break; 
    
        default:
            document.querySelector(".image-container").style.background = "url('./img/forca00.png')";
            break;
    }

}

// -------------------------------------------------------------

// carrega o modal


function openModal(title, message) {

    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;

    $("#myModal").modal({
        show: true
    });

}



//---------------------------------------------------------------

// CRIANDO KEYBOARD COM O JS

const createKeyboardRow = (keys, keyboardRow) => {
    keys.forEach((key) => {
        const buttonElement = document.createElement("button");

        if(key === "RELOAD"){
            buttonElement.textContent = "🔄";
        } else {
            buttonElement.textContent = key;    
        }

        buttonElement.setAttribute("id", key);

        /*
        buttonElement.addEventListener("click", function() {
            checkKey(key)
        });
        */

        keyboardRow.appendChild(buttonElement);
    });
};

createKeyboardRow(keysFirstRow, keyboardFirstRow);
createKeyboardRow(keysSecondRow, keyboardSecondRow);
createKeyboardRow(keysThirdRow, keyboardThirdRow);


//-----------------------------------------------------------------

selectWord();



document.addEventListener("click", (e) => {
    
    const key = e.target.attributes.id.value;
    console.log(key)

    if(key === "RELOAD"){
        location.reload();
    } else {
        checkKey(key)
    }

});


