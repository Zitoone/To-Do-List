const button = document.querySelector('button')

button.addEventListener('click', ()=>{
let task=document.querySelector('input')
let ul=document.querySelector('ul')
ul.insertAdjacentHTML('beforeend',`<li> ${task.value} <button class="del">Supprimer</button> </li>` );
task.value= " ";
task.focus();

const liste = document.querySelector('li')
const del = document.querySelector('.del')

del.addEventListener('click', ()=>{
    liste.remove()
    })

});






