let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


const temasConfig = {
        
        'Caminhoimagem': {
            folder: 'media/jogos/KR/concept', // O caminho da pasta
            
        },
        'labbugcaminho': {
            ref: 'media/jogos/LB/concept/',
            folder: 'media/jogos/LB/concept', // O caminho que será substituído
        },
        'expo2900caminho': {
            folder: 'media/jogos/EXPO2900/concept', // O caminho que será substituído
        },
        'lixaodobairrocaminho': {
            folder: 'media/series/LB/concept', // O caminho que será substituído
        },
        'herancademisterioscaminho': {
            folder: 'media/series/HM/concept', // O caminho que será substituído
        }            
        
};

// Fotos/ imagens de fundo que vão mudar
const fundoprimeiro = document.getElementById("Fundo1");
const fundosegundo = document.getElementById("Fundo2");
const fundoterceiro = document.getElementById("Fundo3");
const fundoquarto = document.getElementById("Fundo4");

const fundos = [fundoprimeiro, fundosegundo, fundoterceiro, fundoquarto];

const PastaLabBug = temasConfig.labbugcaminho.folder;
const PastaExpo2900 = temasConfig.expo2900caminho.folder;
const PastaLixaodoBairro = temasConfig.lixaodobairrocaminho.folder;
const PastaHerancadeMisterios = temasConfig.herancademisterioscaminho.folder;
const PastaKingRush = temasConfig.Caminhoimagem.folder;

const mainLink = document.getElementById("top-link");

// Pega o caminho da nova pasta de referência do objeto temasConfig para as imagens (todas - indice do array fundos)
    
var indeximages = 0;

    // definir por index - crescendo e decrescendo o index
    // 0 king rush
    // 1 LabBug
    // 2 Expo 2900
    // 3 Lixao do Bairro
    // 4 Herança de Misterios

function mudarFundoDireita() {

    fundos.forEach((elemento, index) => {
        
        // Verifica se o elemento existe (para evitar erros se o ID não for encontrado)
        if (elemento) {
            
            if (indeximages == 0){
                const novoCaminho = PastaLabBug+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);
                
            } else if (indeximages == 1) {
                const novoCaminho = PastaExpo2900+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 2) {
                const novoCaminho = PastaLixaodoBairro+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 3) {
                const novoCaminho = PastaHerancadeMisterios+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 4) {
                const novoCaminho = PastaKingRush+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);
            } else indeximages = 0;
            
        }
        
        
    });
    indeximages = indeximages + 1;
}

function mudarFundoEsquerda() {

    fundos.forEach((elemento, index) => {
        
        // Verifica se o elemento existe (para evitar erros se o ID não for encontrado)
        if (elemento) {
            
            if (indeximages == 4){
                const novoCaminho = PastaLixaodoBairro+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);
                
            } else if (indeximages == 3) {
                const novoCaminho = PastaLixaodoBairro+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 2) {
                const novoCaminho = PastaLabBug+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 1) {
                const novoCaminho = PastaKingRush+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);

            } else if (indeximages == 0) {
                const novoCaminho = PastaKingRush+'/'+(index+1)+'.png';
                elemento.src = novoCaminho;
                
                
                
                console.log(`${indeximages}`);
                console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);
            } else indeximages = 4;
            
        }
    });
    indeximages = indeximages - 1;
}


function mudandoLogo() {
    
}