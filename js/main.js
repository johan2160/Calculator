// add event listeners to all buttons
const characters = document.querySelectorAll('.character');
const clear = document.querySelector('.clear')
const result = document.querySelector('.result')

let characterStr = ''
let equation = document.querySelector('.display-equation');

characters.forEach(character => {
  character.addEventListener('click', e => {
    characterStr += character.innerText
    equation.innerHTML = characterStr
  })
});


clear.addEventListener('click', e => {
  characterStr = ''
  equation.innerHTML = characterStr
})

result.addEventListener('click', e => {
  equation.innerHTML = eval(characterStr);
  characterStr = ''
})


