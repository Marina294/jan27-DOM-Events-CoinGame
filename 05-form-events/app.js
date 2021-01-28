const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#tnc');
const fruitsSelect = document.querySelector('#fruits');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('cc', creditCardInput.value);
    console.log('tnc', termsCheckbox.checked);
    console.log('fruits', fruitsSelect.value);

    //send form data to db....
    //append the data to page 
});