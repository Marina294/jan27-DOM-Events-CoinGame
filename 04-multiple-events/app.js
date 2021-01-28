const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'white',
    'black'
];

const changeColor = function(){
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box'); //<div class="box" style="background-color: ??? "></div>
    container.appendChild(box);

    box.addEventListener('click', function(){
        console.log(box.style.backgroundColor);
    })
    box.addEventListener('click', changeColor);
}