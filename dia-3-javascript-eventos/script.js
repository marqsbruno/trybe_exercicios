function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDias(){
  let diasDoMes = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index++){
    let dias = dezDaysList[index];
    let diaLista = document.createElement('li');
    if (dias === 24 || dias === 31){
      diaLista.className = 'day holiday';
      diaLista.innerHTML = dias;
      diasDoMes.appendChild(diaLista);
    } else if (dias === 4 || dias === 11 || dias === 18){
      diaLista.className = 'day friday';
      diaLista.innerHTML = dias;
      diasDoMes.appendChild(diaLista);
    } else if (dias === 25){
      diaLista.className = 'day friday holiday';
      diaLista.innerHTML = dias;
      diasDoMes.appendChild(diaLista);
    } else {
      diaLista.className = 'day'
      diaLista.innerHTML = dias;
      diasDoMes.appendChild(diaLista);
    }

  }
}
criarDias();


function criarBotao (string){
  let botao = document.querySelector(".buttons-container");
  let elementoBotao = document.createElement('button');

  elementoBotao.id = "btn-holiday";
  botao.appendChild(elementoBotao);
  elementoBotao.innerHTML = (string);

}

criarBotao('Feriados');