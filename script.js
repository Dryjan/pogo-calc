import { Types } from './types.js';

function lol(n, arr = [], j = 0) {
  if(!n) {
    console.log(arr);
  } else {
    for(let i = j; i < 18 ; i++) {
      let arr2 = arr.concat([Types[i]]);
      lol(n-1, arr2, i+1);
    }
 }
}

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

lol(3);