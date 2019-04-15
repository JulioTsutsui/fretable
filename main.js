var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var classe,amplitude,intervalo,excesso,max,min;

function criarTabela(max,min,excesso,intervalo){
    inicio = min - Math.floor(excesso / 2);
    final = max - Math.ceil(excesso / 2);
    console.log("-------- A tabela é: --------\n");
    for(i=inicio;i < final;i+=intervalo){
        console.log(i + " |---- " + (i+intervalo) + "\n");
    }
}

rl.question("Insira o número total de dados \n",(total)=>{
    classe = Math.round(Math.sqrt(total));
    rl.question("Agora insira o maior número\n",(maior)=>{
        max = parseInt(maior);
        rl.question("Insira o menor agora \n",(menor)=>{
            min = parseInt(menor);
            amplitude = max - min;
            intervalo = Math.ceil(amplitude / classe);
            var arr = [classe,amplitude,intervalo];
            arr.sort((x,y)=>x-y);
            excesso = arr[0] * arr[1] - arr[2];
            criarTabela(max,min,excesso, intervalo);
            rl.close();
        });
    });
});
