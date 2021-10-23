// A peça só será cadastrada se possuir o peso maior que 100 gramas

let peso = 172;

if (peso > 100) {
    console.log("Peça com peso suficiente, válida para cadastro!")
} else {
    console.log ("Peso não atinge o valor mínimo")
}


//Lista de peças tem capacidade max de 10 peças

let listaPecas = ["Pneu","Freio","Amortecedor","Bateria","Pistão","Velas", "Filtro de ar", "Disco de freio","Pastilha de Freio","Filtro de Combustivel"]

let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log ("Lista com espaço disponível")
} else {
    console.log("Sem espaço! Capacidade máxima atingida")
} 


//A peça deve ter o nome maior que tres caracteres se nao mostrar erro

let nomePeca = "Amortecedor";


if (nomePeca.length < 3) {
    console.log ("A peça não possui o número minímo de caracteres, favor rever!")
} else {
    console.log ("Nome válido! Favor continuar cadastro")
}
