
const container = document.getElementById('container')
const colors = ['red', 'greenyellow', 'blue', 'yellow', 'orange', 'cyan', 'indigo']
const squares = 500

for(let i = 0; i < squares; i++){

    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)


}   

function setColor(element){

    const color = getRandomColor()
    element.style.background = color
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`


}

function removeColor(element){

    element.style.background = 'rgb(51, 50, 50)'
    element.style.boxshadow = `0 0 2px #000`

}

function getRandomColor(){

    return colors[Math.floor(Math.random() * colors.length)]

}
