

document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector('form')
  
  form.addEventListener('submit' , (e) => {
    e.preventDefault() //prevent form element/checkbox from doing its default behavior (appearing checked upon click)   
    buildToDo(e.target.new_todo.value)
    form.reset()
      })
    })



    function buildToDo(todo){
      console.log(todo)
      let li = document.createElement('li')
      
      let bttn = document.createElement('button')
      bttn.textContent= ' x'
      bttn.addEventListener('click', handleDelete)

      li.textContent=todo;
      console.log(li)
      li.appendChild(bttn)
      console.log(li)
      document.getElementById('list').appendChild(li) 

    }

    function handleDelete(e){
     e.target.parentNode.remove()
     // e.target get the target of the event which is the button
     //remove the todo item which is the node, don't just delete bttn
     //delete li

    }