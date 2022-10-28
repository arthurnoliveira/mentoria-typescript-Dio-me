"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedor'
};
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const paula = {
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
const vanessa = {
    nome: 'Vanessa',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 28,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jéssica',
    idade: 27,
    profissao: Profissao.Professora,
    materiais: ['Matemática', 'Programação']
};
const monica = {
    nome: 'Mônica',
    idade: 27,
    materiais: ['Matemática', 'Programação', 'Lógica de Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materiais);
