function calcularRankeada(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var resultadoRankeada;

    if (vitorias < 10) {
        resultadoRankeada = "Ferro";
    }  else if (vitorias >= 11 && vitorias <= 20) {
        resultadoRankeada = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        resultadoRankeada = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        resultadoRankeada = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        resultadoRankeada = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        resultadoRankeada = "Lendário"
    } else (vitorias >= 101); {
        resultadoRankeada = "Imortal";
    }

    return resultadoRankeada;

}

var vitorias = 75;
var derrotas = 20;
var resultado = calcularRankeada(vitorias, derrotas);
console.log("O herói tem um saldo de " + resultado + ".");