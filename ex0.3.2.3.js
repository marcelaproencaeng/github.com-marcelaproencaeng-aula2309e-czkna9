// run `node index.js` in the terminal


const tarefas = [
  {
    titulo: 'Ir a feira',
    concluida: true,
    dias: 10,
  },
  {
    titulo: 'Ir na academia',
    concluida: false,
    dias: 30,
  },
  {
    titulo: 'Terminar o plano de negocios',
    concluida: false,
    dias: 3,
  },
  {
    titulo: 'Buscar consertos na costureira',
    concluida: false,
    dias: 1,
  }
];
const tarefasFinalizadasAbaixo30Dias = tarefas.filter(tarefa => tarefa.finalizada.abaixo30 === true
);
console.log(tarefasFinalizadasAbaixo30Dias);
