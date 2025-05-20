const button = document.querySelector('button')


button.addEventListener('click', ()=>{
const task=document.querySelector('input')
const ul=document.querySelector('ul')

const liste = document.createElement('li')
liste.textContent = task.value

const del = document.createElement('button')
del.textContent = "supprimer"

liste.appendChild(del)
ul.appendChild(liste)

del.addEventListener('click', ()=>{   
    liste.remove()
    });
    
task.value= "";
task.focus();
})

// ['click','ontouchstart'].forEach( evt => 
//     element.addEventListener(evt, dosomething, false)
// );






