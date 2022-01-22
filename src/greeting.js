const loginForm = document.body.querySelector("#login-form");
const username = document.body.querySelector("#username");
const loginBtn = document.body.querySelector("#login-btn");
const logoutBtn = document.body.querySelector("#logout-btn");

const whoRU=document.body.querySelector("#who-r-u");
const sayHello=document.body.querySelector("#say-hello");
const whoUR=sayHello.querySelector("span:last-child");

//let usernames=[];
//const savedUsers=localStorage.getItem("usernames");
//usernames.push(savedUsers);

function logInOut(event){
    event.preventDefault();
    if(loginBtn.type==="submit"){ //login 하였을때 
        event.preventDefault();
        whoUR.innerText=username.value;
        changeType("in");
        const savedToDos = localStorage.getItem(username.value);
        if(savedToDos){
            const parsedToDos = JSON.parse(savedToDos);
            toDos = parsedToDos;
            parsedToDos.forEach(paintToDo);
        }
    } else{
        changeType("out");
        username.value="";
        while(toDoList.hasChildNodes()){
            toDoList.removeChild(toDoList.firstChild);
        }
        toDos=[];
    }
}

function changeType(logInOrOut){
    if(logInOrOut==="in"){
        whoRU.classList.add("hidden");
        sayHello.classList.remove("hidden");
        username.type="hidden"
        loginBtn.type="hidden";
        logoutBtn.type="submit";
    }else{
        username.type="text"
        loginBtn.type="submit";
        logoutBtn.type="hidden";
    }
}

loginForm.addEventListener("submit", logInOut);

/////todos

const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

function saveToDos(){
    localStorage.setItem(username.value, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(toDos){
    const li = document.createElement("li");
    li.id = toDos.id;
    const span = document.createElement("span");
    span.innerText = toDos.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    if(username.value===""){
        alert("Write your name, please");
        return;
    }
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);