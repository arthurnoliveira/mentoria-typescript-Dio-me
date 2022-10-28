"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
var stringTest = 'Verificar';
stringTest = anyEstaDeVolta;
var unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
unknowValor = 'vai sim';
var stringTeste2 = 'agora vai';
// não aceita  sem ser validado por ser unknow (stringTeste2 = unknowValor)
//Unknow precisa ser validado para ser aceito (unknowValor = 'vai sim' = string)
if (typeof unknowValor === 'string') {
    stringTeste2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu merda', 540);
//# sourceMappingURL=Any-Unknow-Never.js.map