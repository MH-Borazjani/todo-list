document.addEventListener("DOMContentLoaded",() => {
    const addTodoButton = document.getElementById("add-todo");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    addTodoButton.addEventListener("click",addTodo);
    todoList.addEventListener("click",removeTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if(todoText!==''){
            const li = document.createElement("li");
            li.className="flex justify-between items-center max-w-[38.5rem] w-full border-b-2 border-purple-project/15 rounded pb-1"
            li.innerHTML=`
            <div class="flex items-center gap-4">
              <svg class="h-7 w-7 text-purple-project">
                <use xlink:href="#square"></use>
              </svg>
              <span class="font">${todoText}</span>
            </div>
            <div class="flex gap-3">
              <button>
                <svg class="w-4 h-4 text-purple-project/20">
                  <use xlink:href="#pencill"></use>
                </svg>
              </button>
              <button>
                <svg class="w-4 h-4 text-purple-project/20">
                  <use xlink:href="#delete"></use>
                </svg>
              </button>
            </div>
            `
            todoList.appendChild(li);
            todoInput.value = '';
        }
    }
});
