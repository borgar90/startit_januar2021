let app= document.getElementById("app");

getTodos();
function updateView(){
    
    if(model.todoScreen == 'init') {
        updateViewInit();
    }else if(model.todoScreen == 'updateTodo'){
        updateViewEditTodo();
    }
}
function updateViewInit(){
    html='';
    const todos = model.todos; 

    html += `<div class="todoWrapper"><h1>Todo-list</h1><br>
            <input type="text" onchange="model.tempTodo= this.value;" placeholder="Write your todo"> <span onclick="addTodo()" class="add">+</span> </div>`;

    for(let i=0; i < todos.length; i++ ){
        if(todos[i].finished == true){
            html += '<li class="lineTrough">';
        }else{
            html += '<li>';
        }
       /* if (i % 2 === 0 && i != 0){
            html += '<li class="gray">'
        }*/
        
        html += `<p>${todos[i].todo}</p><button onclick="finishTodo(${i})">fullfør</button></li>`;
    }
    html += `<button class="noMargin" onclick="model.todoScreen= 'updateTodo';  updateView()">Edit Todo's</button>`;
    app.innerHTML = html;
} 

function updateViewEditTodo(){
    let html =``; 
    const todos = model.todos;
    html += `<h1>Edit / Delete Todos</h1>`;
    for(let i=0; i < todos.length; i++ ){
        if(todos[i].finished == true){
            html += '<li class="lineTrough">';
        }else{
            html += '<li>';
        }
        
        html += `<input value="${todos[i].todo}"  onchange="model.todos[${i}].tempTodo = this.value"/><button onclick="updateTodo(${i})" class="save">Lagre</button><button onclick="deleteTodo(${i})" class="delete">Slett</button></li>`;
    }
    html += `<button class="noMargin" onclick="model.todoScreen= 'init';  updateView()">Todo's</button>`;
    app.innerHTML = html;
}
