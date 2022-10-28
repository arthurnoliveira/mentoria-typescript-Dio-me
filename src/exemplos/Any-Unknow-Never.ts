let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5

let stringTest: string = 'Verificar'
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim'

let stringTeste2: string = 'agora vai';
// não aceita  sem ser validado por ser unknow (stringTeste2 = unknowValor)


//Unknow precisa ser validado para ser aceito (unknowValor = 'vai sim' = string)
if (typeof unknowValor === 'string') {
  stringTeste2 = unknowValor
}


function jogaErro(erro: string, codigo: number): never {
  throw {error: erro, code: codigo}
}

jogaErro('deu merda', 540)