var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all the learning"
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool"
    },
    {
        username: "Mitch",
        timeline: "JavaScript is pretty cool"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user,pass){
    for(var i=0 ; i<database.length ; i++){
        if(database[i].username === user && pass === database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(user, pass){
    if(isUserValid(user,pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username or password");
    }
}

signIn(userNamePrompt,passwordPrompt);