function addTodo(){
    let tempTodo = model.tempTodo; 
    let todos = model.todos; 
    
    if (tempTodo != '' && tempTodo != undefined){
        
        db.collection('todos').add({
            todo: tempTodo,
            finished: false,
        });
        
        getTodos();
        return true
    }else{
        console.log('error');
        return 'error';
    }
    model.tempTodo = '';
}
function finishTodo(todoId){
    const todo = model.todos[todoId]; 
    
    if(todo != undefined){
        todo.finished = true;
        db.collection('todos').doc(todo.id).update({
            finished: true, 
        })
        updateView();
        return true
    }else{
        return 'error'
    }
    
}

function updateTodo(todoId){
    const todo = model.todos[todoId]; 
    const tempTodo = model.tempTodo;

    if (tempTodo != '' && tempTodo != undefined && todo != undefined){
        
        db.collection('todos').doc(todo.id).update({
            todo: todo.tempTodo, 
        })
        model.todos = [];
        getTodos();
    }else{
        return 'error';
    }    
}

function deleteTodo(id){
    let todo = model.todos[id];
    let todos = model.todos; 
    if(db.collection('todos').doc(todo.id)){    
        db.collection('todos').doc(todo.id).delete().then(function(){
            updateView();
        });
        todos.splice(id, 1); 
            
    }else{
        return 'error';
    }
    
    
}

function getTodos(){
    model.todos =[];
    db.collection('todos').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
           if( doc.data().todo != undefined){
            model.todos.push ({
                todo: doc.data().todo, 
                finished: doc.data().finished,
                id: doc.id,
            });
           }
            
        });
        updateView();
    });

   
}
