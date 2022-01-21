const loginForm = document.body.querySelector("#loginform");
const username = document.body.querySelector("#username");
const loginBtn = document.body.querySelector("#loginbtn");
const logoutBtn = document.body.querySelector("#logoutbtn");


function logInOut(event){
    event.preventDefault();
    if(loginBtn.type==="submit"){ //login 하였을때 
        changeType("in");
        const usernameValue = username.value;
        localStorage.setItem("usernames",usernameValue);    

    } else{
        changeType("out");
        username.value="";
    }
}

function changeType(logInOrOut){
    if(logInOrOut==="in"){
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