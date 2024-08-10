let students = [
  {
      name: 'Kauan',
      noteOne: 8,
      noteTwo: 8,
  },
  {
      name: 'João',
      noteOne: 6,
      noteTwo: 7,
  },
  {
      name: 'Victor',
      noteOne: 4,
      noteTwo: 5,
  },
];

function somaDaMedia(student) {
  const finalNote = (student.noteOne + student.noteTwo) / 2
  return {
      finalNote: finalNote
  }
}

for (let index in students) {
  const student = students[index];
  const studentFinalNote = somaDaMedia(student).finalNote;
  if (studentFinalNote >= 7) {
      alert(`O aluno ${student.name} está aprovado com nota ${studentFinalNote}`)
  } else {
      alert(`O aluno(a) ${student.name} foi reprovado(a) com nota ${studentFinalNote}`)
  }
}


