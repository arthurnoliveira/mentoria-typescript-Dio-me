//## Resposta 1
let employee: { code?: number, name?: string } = {} 
employee.code = 10
employee.name = 'John'


//## Resposta 2
interface Aluno {
  code: number,
  name: string,
};

let joao: Aluno = {
  code: 100,
  name: 'João'
}

//## Reposta 3
const Fulano: {code: number, nome: string} = {
  code: 13,
  nome: 'DeTal'
}
console.log(employee, joao, Fulano)