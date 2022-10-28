export{}
enum Profissao {
  Atriz,
 Padeiro
}

interface Pessoa {
  nome?: string,
  idade?: number,
  profissao?: Profissao
}

type Pessoa2 = {
  nome: string,
  idade: number,
  profissao: string
}

let pessoa1: Pessoa = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2: Pessoa = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: Pessoa2 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoa2= {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}