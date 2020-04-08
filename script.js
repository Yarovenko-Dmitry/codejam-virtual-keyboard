/* eslint-disable no-plusplus */
const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
document.body.append(divWrapper);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
divWrapper.append(textArea);

const divKeyboard = document.createElement('div');
divKeyboard.className = 'keyboard';
divWrapper.append(divKeyboard);

const divRow1 = document.createElement('div');
divRow1.className = 'row1';
divKeyboard.append(divRow1);

const divRow2 = document.createElement('div');
divRow2.className = 'row2';
divKeyboard.append(divRow2);

const divRow3 = document.createElement('div');
divRow3.className = 'row3';
divKeyboard.append(divRow3);

const divRow4 = document.createElement('div');
divRow4.className = 'row4';
divKeyboard.append(divRow4);

const divRow5 = document.createElement('div');
divRow5.className = 'row5';
divKeyboard.append(divRow5);


const keySmallEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del'],
  ['capsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
  ['shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '←', '↓', '→'],
];

const keyBigEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '`', 'ENTER' ],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyShiftEn = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\'', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', ' Alt', '←', '↓', '→', 'Ctrl'],
];

const keySmallRu = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
  ['capsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
  ['shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '←', '↓', '→'],
];

const keyBigRu = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
  ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyShiftRu = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const dataCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const keyPressed = new Set();

// let keyValue = keySmallEn;
// let keyValue = keyBigEn;
// let keyValue = keyShiftEn;
// let keyValue = keySmallRu;
// let keyValue = keyBigRu;
// let keyValue = keyShiftRu;

const rows = Array.from(divKeyboard.children);

const deleteKeyboardLayoutKeys = () => {
  rows.forEach((el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  });
};

const changeKeyboardLayout = (keyValue) => {
  for (let j = 0; j < keyValue.length; j++) {
    for (let i = 0; i < keyValue[j].length; i++) {
      const divKey = document.createElement('div');
      divKey.className = 'key';
      if ((j === 0 && i === 13)
        || (j === 2 && i === 0)
        || (j === 2 && i === 12)
        || (j === 2 && i === 12)
        || (j === 3 && i === 0)
        || (j === 4 && i === 0)
        || (j === 4 && i === 5)) {
        divKey.className = 'key keyBiggerSize';
      }

      if (j === 4 && i === 3) {
        divKey.className = 'key space';
      }

      divKey.setAttribute('data-code', dataCode[j][i]);
      divKey.innerText = keyValue[j][i];

      if (j === 0) {
        divRow1.append(divKey);
      } else if (j === 1) {
        divRow2.append(divKey);
      } else if (j === 2) {
        divRow3.append(divKey);
      } else if (j === 3) {
        divRow4.append(divKey);
      } else if (j === 4) {
        divRow5.append(divKey);
      }
    }
  }
};

changeKeyboardLayout(keySmallEn);

document.addEventListener('keydown', (event) => {
  const pressKey = document.querySelector(`div[data-code = ${event.code}]`);
  pressKey.classList.add('press-key');
  console.log(event.code);
  keyPressed.add(event.code);
  if ((keyPressed.has('ShiftLeft')) && (keyPressed.has('ControlLeft'))) {
    console.log('cool');
    deleteKeyboardLayoutKeys();
    changeKeyboardLayout(keySmallRu);
  }
});

document.addEventListener('keyup', (event) => {
  const unPressKey = document.querySelector(`div[data-code = ${event.code}]`);
  unPressKey.classList.remove('press-key');
  keyPressed.clear();
});
