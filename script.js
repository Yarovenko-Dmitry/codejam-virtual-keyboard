let divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

let textArea = document.createElement('textarea');
textArea.className = 'textarea';
divWrapper.append(textArea);

let divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard';
divWrapper.append(divKeyboard);

let divRow1 = document.createElement('div');
divRow1.className = 'row1';
divKeyboard.append(divRow1);

let divRow2 = document.createElement('div');
divRow2.className = 'row2';
divKeyboard.append(divRow2);

let divRow3 = document.createElement('div');
divRow3.className = 'row3';
divKeyboard.append(divRow3);

let divRow4 = document.createElement('div');
divRow4.className = 'row4';
divKeyboard.append(divRow4);

let divRow5 = document.createElement('div');
divRow5.className = 'row5';
divKeyboard.append(divRow5);

const keyValue = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '`', 'ENTER' ],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const dataCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspase'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

for (let j = 0; j < keyValue.length; j++)
for (let i = 0; i < keyValue[j].length; i++) {
  let divKey = document.createElement('div');
  divKey.className = 'key';
   if ((j == 0 && i == 13)
    || (j == 2 && i == 0)
    || (j == 2 && i == 12)
    || (j == 2 && i == 12)
    || (j == 3 && i == 0)
    || (j == 4 && i == 0)
    || (j == 4 && i == 5) ){
    divKey.className = 'key keyBiggerSize';
   }
      
   if (j == 4 && i == 3) {
    divKey.className = 'key space';
   }

  divKey.setAttribute('data-code', dataCode[j][i]);
  divKey.innerText = keyValue[j][i];

  if (j == 0) {
    divRow1.append(divKey);
  } else  if (j == 1) {
    divRow2.append(divKey);
  } else  if (j == 2) {
    divRow3.append(divKey);
  } else  if (j == 3) {
    divRow4.append(divKey);
  } else if (j == 4) {
    divRow5.append(divKey);
  }
}

document.addEventListener( 'keydown', (event) => {
  let pressKey = document.querySelector(`div[data-code = ${event.code}]`);
  pressKey.classList.add( 'press-key');
});

document.addEventListener( 'keyup', ( event ) => {
  let unPressKey = document.querySelector(`div[data-code = ${event.code}]`);
  unPressKey.classList.remove( 'press-key' );
});
