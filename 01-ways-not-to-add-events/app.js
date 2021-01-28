const btn = document.querySelector('#clicker');
const title = document.querySelector('h1');

//this is fine....but there is a better way to do this.... :)
// btn.onclick = function(){
    
// }
btn.onclick = () => {
    // console.log("I GOT CLICKED FROM THE APP.JS");
    title.style.color = 'yellow';
}
btn.onclick = () => {
    title.style.backgroundColor = 'purple'
}

function greet(){
    alert('HEY BUDDY!');
}