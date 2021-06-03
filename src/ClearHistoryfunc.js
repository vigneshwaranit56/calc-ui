let btnClear = document.querySelector('button');
let models =  document.querySelectorAll('model');

btnClear.addEventListener('click',()=>{
        
    models.forEach(model=> model.value = '');
});