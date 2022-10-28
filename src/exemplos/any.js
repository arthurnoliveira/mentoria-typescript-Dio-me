"use strict";
let valorAny;
valorAny = 3;
valorAny = 'olá';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorSring2 = 'testao';
valorSring2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorSring2);
somarString('Olá, ', 'como vai?');
