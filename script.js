/*Arquivo do Script do Projeto -> Conversor de Anos-Luz em Quilômetros!!*/

function exibirPrompt() {
    let valorAnosLuz = prompt("Escolha um valor em Anos-Luz para converter em quilômetros...");

    let valorEmKm = valorAnosLuz * 9500000000000 //Cálculo do valor anos-luz pra km
    
    parseFloat(valorAnosLuz); //parseFloat(); Para arredondar um ponto flutuante
    
    alert(valorEmKm); //Retornando a resposta para o usuário
}    
