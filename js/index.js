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
        'novocaminho': {
            folder: 'media/jogos/LB/concept', // O caminho que será substituído
        }   
        
};

const fundoprimeiro = document.getElementById("Fundo1");
const fundosegundo = document.getElementById("Fundo2");
const fundoterceiro = document.getElementById("Fundo3");
const fundoquarto = document.getElementById("Fundo4");

const fundos = [fundoprimeiro, fundosegundo, fundoterceiro, fundoquarto];


function mudarFundo() {
    
    // Pega o caminho da nova pasta de referência do objeto temasConfig
    const novaPastaBase = temasConfig.novocaminho.folder;
    
    // 1. Inicia o loop (forEach) sobre o array de fundos
    fundos.forEach((elemento, index) => {
        
        // Verifica se o elemento existe (para evitar erros se o ID não for encontrado)
        if (elemento) {
            
            // 2. Constrói o novo caminho completo do arquivo.
            // O index + 1 é usado para gerar nomes sequenciais como 1.jpg, 2.jpg, etc.
            const novoCaminho =novaPastaBase+'/'+(index+1)+'.png';
            
            // 3. Altera o atributo 'src' (source/caminho) do elemento
            elemento.src = novoCaminho;
            
            console.log(`Elemento ${index + 1} atualizado para: ${novoCaminho}`);
        }
    });
}
