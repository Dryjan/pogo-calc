import { Types } from './types.js';

const table = document.getElementById('main');

for(let i = 0; i < 18; i++) {
  const row = document.createElement('tr');
  for(let j = 0; j < 18; j++) {
    const col = document.createElement('td');
    col.style.backgroundColor = Types[i].Eff[j] === 25/64 ? 'black' : Types[i].Eff[j] === 5/8 ? 'red' : Types[i].Eff[j] === 8/5 ? 'green' : 'white';
    row.appendChild(col);
  }
  table.appendChild(row);
}

for(let i=0; i<18; i++) {
  for(let j=i; j<18; j++) {
    if(Types[15].Eff[i] * Types[15].Eff[j] > 1) {
      if(i === j) {
        console.log(Types[i].Name);
      } else {
        console.log(Types[i].Name + ' ' + Types[j].Name);
      }
    }
  }
}