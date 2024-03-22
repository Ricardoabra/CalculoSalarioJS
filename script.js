// ADICIONA UM OUVINTE PARA O FORMULÁRIO
document.getElementById("formSalario").addEventListener("submit", function(event) {
    //COMANDO MANTEM O RESULTADO NA TELA
    event.preventDefault(); 
    //CRIAÇÃO DAS VARIAVES DO ALGORÍTMO
    var diasTrabalhados = parseInt(document.getElementById("inputDias").value);
    var salario = diasTrabalhados * 400; 

   // MOSTRA NA TELA O RESULTADO NA NOVA DIV
    document.getElementById("seuSalario").textContent = "Seu salário neste mês é: " + salario.toFixed(2);
});