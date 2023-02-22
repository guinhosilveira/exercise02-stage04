/*

    nome;
    nota da primeira prova;
    nota da segunda prova.

Depois de criada a lista:

    [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/


const students = [
    {
        name: 'Igor',
        firstNote: 10,
        secondNote: 8
    }, 
    {
        name: 'Jaque',
        firstNote: 6,
        secondNote: 4
    }, 
    {
        name: 'Cláudio',
        firstNote: 10,
        secondNote: 3
    }, 
    {
        name: 'Afonso',
        firstNote: 6,
        secondNote: 3
    } 
];

function calcAverage(note1, note2) {
    return ((note1 + note2) / 2).toFixed(1);
}

for (const student of students) {
    let average = calcAverage(student.firstNote, student.secondNote);
    let condition = average >= 7;
    let result;

    if (condition) {
        result = `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
    } else {
        result = `Não foi dessa vez, ${student.name}! Tente novamente!`;
    }

    alert(`A média do(a) aluno(a) é: ${average}
    ${result}`);

}