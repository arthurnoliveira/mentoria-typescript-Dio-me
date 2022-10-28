let valorAny: any;
valorAny = 3;
valorAny = 'olá';
valorAny = true;


let valorString: string = 'teste';
valorString = valorAny;
let valorSring2: string = 'testao';
valorSring2 = valorAny;


function somarString(string1: string, string2: string) {
  console.log(string1 + string2)
}

somarString(valorString, valorSring2)

somarString('Olá, ', 'como vai?')