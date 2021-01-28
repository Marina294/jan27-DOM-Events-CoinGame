const btn = document.querySelector('button');
const title = document.querySelector('h1');

btn.addEventListener('click', function(){
    // alert('CLICKED!');
    title.style.color = 'yellow'
})

btn.addEventListener('click', function(){
    // alert('SECOND CLICK!');
    title.style.backgroundColor = 'magenta'
})

btn.addEventListener('mouseover', function(){
    btn.innerText = 'Chira~'
})

btn.addEventListener('mouseout', function(){
    btn.innerText = 'Click Me!'
})

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING!');
})