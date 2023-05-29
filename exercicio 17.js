/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano Aumento
A -> 10%
B -> 15%
C -> 20%

Faça uma função que leia o plano de trabalho e o salário atual de um
funcionário e calcula e imprime o seu novo salário. Use a estrutura
switch e faça um caso default que indique que o plano é inválido.

*/

const aumento = function (salarioAtual, planos){
    //Percentuais do aumento de cada plano
   let planoA = 10
   let planoB = 15
   let planoC = 20

    //Cálculo do percentual
   let dezPorCento = (salarioAtual * planoA) / 100 //Calcular 10% de 3200 (320)
   let quinzePorCento = (salarioAtual * planoB) / 100 //Calcular 15% de 3200 (480)
   let vintePorCento = (salarioAtual * planoC) / 100 //Calcular 20% de 3200 (640)

   //Condições para cada plano
   switch(planos){
        case "a":
            console.log(salarioAtual + dezPorCento)
            break
        case "b":
            console.log(salarioAtual + quinzePorCento)
            break
        case "c":
            console.log(salarioAtual + vintePorCento)
            break
        default:
            console.log("Plano inválido!")
   }
}

aumento(3200, "a")
aumento(3200, "b")
aumento(3200, "c")
aumento(3200,"d")