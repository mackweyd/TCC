import { colors } from "./game_colors.js"; //importa vetor de cores
document.getElementById("iniciar").addEventListener('click', jogo); //insere o evento no botão de iniciar o jogo

function jogo() {
    var cores = colors();

    var vetColors = []; //escolher cor aleatoriamete
    var randonColors
    
    for (let i = 0; i < 10; i++) {
        randonColors = Math.floor((Math.random() * cores.length) + 1);
        vetColors.push(cores[randonColors]);
    }
    vetColors.sort(); //ordenar cores
    
    
    randonColors = Math.floor((Math.random() * (vetColors.length)) + 1);
    var resultado = vetColors[randonColors]
    
    var life = 5
    var corEscolhida
    
    
    while (life != 1) {
        corEscolhida = prompt("Eu escolhi uma dessas cores\n" + vetColors.join(", ") + "\nqual é ela?\n" + "Vida Restantes " + life)
        if (corEscolhida == resultado) {
            alert("Você acertou, parabéns!")
            document.body.style.background = corEscolhida
            life = 1;
        }
        else if (corEscolhida == "") {
            alert("Poxa, o campo está em branco.\n Por favor preencha o campo e tente novamente!")
        } else if (resultado != corEscolhida) {
            if (resultado > corEscolhida) {
                alert("você errou feio!\n\nDica: Sua cor é alfabeticamente menor que a que eu escolhi.")
                life--
            } else if (resultado < corEscolhida) {
                alert("você errou feio!\n\nDica: Sua cor é alfabeticamente maior que a que eu escolhi.")
                life--
            }
        }
    
    }
    if (corEscolhida != resultado) {
        alert("Game Over!")
    } else {
        alert("Obrigado por jogar!")
    }
}










