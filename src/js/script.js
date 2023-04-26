// Variables
const masculino = document.querySelector("#masculino");
const femenino = document.querySelector("#femenino");
const random = document.querySelector("#random");
const nickname_input = document.querySelector("#nickname_input");
const button_generate = document.querySelector("#button_generate");
const button_copy = document.querySelector("#button_copy");
const img_button_copy = document.querySelector("#img_button_copy");

const masculino_names = ['Gerbilator','Nessundorma','RowanTree','Octagonalo','Logan','Deadman','Ovzerber','ReBatonLay','LilFrog','PiggeonnM',
                'BlueDrakon','NeverLate','BillionBoy','CenturyCarry','Deepdie','Eyefactor','Konoha','Jouseel','Ashin','Monsterhead',
                'Raistar','DarkAngel','Akino','Yujoa','Qatzer','Krakenboy','KookToop','Herobrain','Einstetein','HereShels','Bigbull',
                    'BigGoose','LetsCrab','Octopus','Racoonboy','Owlupe','TurtleAim','AquaDragon','Zann','MordorEterium','Sqoba','Warpeace'];

const femenino_names = ['Esmeralda','Brella','Briii','Tycon','Xu','Zylene','Xaalana','Juliett','Amarata Witch','Delaphin','Velona VanG',
                    'Davina Eleno','Ithabel','Mystique','Amatista','Jade','Zhaphiro', 'Axinita','Bizzy','Astra','Skye','Akali Atroz',
                    'AsheGlade', 'Azircat','Evelynn','Janna','Gazal','Kaisadinn','Seraphine','Zoe','Meireaper','Shadowgirl','Zayra',
                    'Ellie','Serena','Bulma','Kinomoto','Akira','Haruka','Shika','Asuka','Shichimiya','Adashino','Asaka','Mitsuki'];

// Event list 
eventListener();
function eventListener() {
    button_generate.addEventListener("click", generateNickname);

    masculino.addEventListener('click',() =>{
        checkInput("masculino");
    })
    femenino.addEventListener('click',() =>{
        checkInput("femenino");
    })
    random.addEventListener('click',() =>{
        checkInput("random");
    })

    button_copy.addEventListener("click", () =>{
        nickname_input.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        img_button_copy.src = "img/check.svg";
    });
}

// Funciones
function checkInput(input){
    switch(input){
        case "masculino":
            femenino.checked = false;
            random.checked = false;
            break;
        case "femenino":
            masculino.checked = false;
            random.checked = false;
            break;
        case "random":
            femenino.checked = false;
            masculino.checked = false;
            break;
    }
}

function selectNames(input){
    switch(input){
        case "masculino":
            return masculino_names[Math.floor(Math.random() * masculino_names.length)];
        case "femenino":
            return femenino_names[Math.floor(Math.random() * femenino_names.length)];
        case "random":
            const options = masculino_names.concat(femenino_names);
            return options[Math.floor(Math.random() * options.length)];
    }
}


function generateNickname(){
    if(masculino.checked || femenino.checked || random.checked){
        if(masculino.checked){
            nickname_input.value = selectNames("masculino");
        }else if(femenino.checked){
            nickname_input.value = selectNames("femenino");
        }else{
            nickname_input.value = selectNames("random");
        }

        img_button_copy.src = "img/copy.svg";
        button_copy.style.display = "block";
    }
}

