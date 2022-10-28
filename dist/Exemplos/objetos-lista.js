"use strict";
var pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedor'
};
var andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
var paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: 'Maria',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: 'Jéssica',
    idade: 27,
    profissao: Profissao.Professora,
    materiais: ['Matemática', 'Programação']
};
var monica = {
    nome: 'Mônica',
    idade: 27,
    materiais: ['Matemática', 'Programação', 'Lógica de Programação']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(jessica.materiais);
//# sourceMappingURL=objetos-lista.js.map