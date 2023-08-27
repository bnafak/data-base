function loadTodos(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>
        `
    }
}

loadTodos()