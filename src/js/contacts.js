import '../css/contacts.css';
import a from '../js/refs.js';

const { contacts } = a;
const game = ["stone", "scissors", "paper"];

function createBtn(array) {
    return array.map((el) => {
        const btn = document.createElement("button");
        btn.textContent = el;
        btn.dataset.value = el;
        return btn;
    });
}
const buttons = createBtn(game);
console.log(buttons);

contacts.append(...buttons);



// === универсальная функция возвращает число любого массива ===
function randomIdx(array) {
    let idx =Math.round(Math.random() * (array.length - 1));
    return idx;
}

const p = document.createElement('p');
p.style.fontSize = "30px";
contacts.append(p);

contacts.addEventListener('click', (e) => {
    // console.log(e.target.dataset.value);
   p.textContent = myGame(e, game, p);
});

function myGame(e, array, place) {
    let user = e.target.dataset.value;
    console.log(user);
    
    let comp = array[randomIdx(array)];
    console.log(comp);
 
    let msg = place.textContent;
    
    if (user === comp) {
        msg = `юзер: ${user} - компютер: ${comp} = ничья`;
    } else {
        if ((user === 'stone' && comp === 'scissors') ||
            (user === 'scissors' && comp === 'paper') ||
            (user === 'paper' && comp === 'stone')
        ){
            msg = `Юзер со значением ${user} выиграл`;
        } else {
            msg = `Компютер со значением ${comp} выиграл`;
        }
    }
    return msg;
}
