const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const addTodo = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`

list.innerHTML += html
}

const filteredResult = (term) => {
    Array.from(list.children)
    .filter(todo => {if (!todo.textContent.includes(term)) {
        return todo.classList.add('filtered')
    }})  
    // .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter(todo => {if (todo.textContent.includes(term)) {
        return todo.classList.remove('filtered')
    }})  
        
    
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim()
    addTodo(todo)
    addForm.reset()
})

list.addEventListener('click', e => {
   if (e.target.classList.contains('delete')) {
       e.target.parentElement.remove()
   }
})

search.addEventListener('keyup', e => {
    const term = e.target.value.trim()
    filteredResult(term)
})