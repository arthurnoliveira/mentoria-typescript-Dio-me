"use strict";
var valorAny;
valorAny = 3;
valorAny = 'olá';
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
var valorSring2 = 'testao';
valorSring2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorSring2);
somarString('Olá, ', 'como vai?');
//# sourceMappingURL=any.js.map