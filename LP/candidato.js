const CANDIDATOS = {
    aneNome: "Cleidiane Nunes",
    aneNumero: 889,
    jorgeNome: "Jorge Braga",
    jorgeNumero: 847,
    renanNome: "Renan Souza",
    renanNumero: 515,
    brancoNome: "Branco",
    branconum: 0,
    nuloNome: "Nulo"
}

var qtdVotosAne = 0;
var qtdVotosJorge = 0;
var qtdVotosRenan = 0;
var qtdVotosBranco = 0;
var qtdVotosNulos = 0;

//Início da Eleição
do {

    do {
        var testeLetra = false;
        let voto = prompt(`Bem vindo a votação!
        Candidatos:
        ${CANDIDATOS.aneNome} : ${CANDIDATOS.aneNumero}
        ${CANDIDATOS.jorgeNome} : ${CANDIDATOS.jorgeNumero}
        ${CANDIDATOS.renanNome} : ${CANDIDATOS.renanNumero}
        ${CANDIDATOS.brancoNome} : ${CANDIDATOS.branconum}
        Vote:`);



        for (let i = 0; i < voto.length; i++) {
            if (isNaN(Number(voto[i]))) {
                testeLetra = true;
                break;
            }

        }
    } while (testeLetra);

    voto === Number(voto);

    if (voto === CANDIDATOS.aneNum) {
        qtdVotosAne++;
    } else if (voto === CANDIDATOS.jorgeNum) {
        qtdVotosJorge++;
    } else if (voto === CANDIDATOS.renanNum)

} while (false);