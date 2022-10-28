const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'desenvolvedor'
}

const andre: {nome: string, idade: number, profissao: string} = {
  nome:'Andre',
  idade: 25,
  profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
  nome:'Paula',
  idade: 25,
  profissao: 'Desenvolvedora'
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudade extends Pessoa {
  materiais: string[]
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 28,
  profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
  nome: 'Maria',
  idade: 28,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudade = {
  nome: 'Jéssica',
  idade: 27,
  profissao: Profissao.Professora,
  materiais: ['Matemática', 'Programação']
}

const monica: Estudade = {
  nome: 'Mônica',
  idade: 27,
  materiais: ['Matemática', 'Programação', 'Lógica de Programação']
}

function listar(lista: string[]){
  for (const item of lista) {
    
    console.log ('- ' , item)
    
  }
}

listar(jessica.materiais)