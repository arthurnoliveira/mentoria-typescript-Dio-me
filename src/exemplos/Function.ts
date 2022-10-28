  type input = number | string;
  
  function somarValores1(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
      return input1.toString() + input2.toString()
    }
    else {
      return input1 + input2
    }
  };

  console.log(somarValores1(1, 5));
  console.log(somarValores1('Olá, ', 'Tudo Bem?'));
  console.log(somarValores1('1', 5));


  // VOID ausência de retorno

function printarValoresNumericos(numero1: number, numero2: number): void {
  console.log(numero1 + numero2)
}


function somarvaloresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
  let resultado = numero1 + numero2;
  return callback(resultado);
}

function AoQuadrado(numbero: number): number {
  return numbero * numbero;
}

function DividirPEle(num: number): number {
  return num / num
}

console.log(somarvaloresNumericosETratar(2, 4, AoQuadrado));
console.log(somarvaloresNumericosETratar(2, 4, DividirPEle));