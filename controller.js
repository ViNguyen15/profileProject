

//prompt user to enter number of profiles
//prompt user to enter information (name, age, gender)
//Store user information (with objects and arrays)
//Send user information to the backend (GET, POST, PUT, DELETE)

class Profile{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let profileList = [];

document.getElementById("profileBox").innerHTML += `
    <input type="text" id="name" class="field" placeholder="name"/><br/>
    <input type="text" id="age" class="field" placeholder="age"/><br/>
    <input type="text" id="gender" class="field" placeholder="gender"/><br/>
    <br/>
`;


document.getElementById("profileBox").innerHTML += `
    <button id="btn" onclick="getInfo()">Submit</button>
`;

function getInfo(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    profileList.push( new Profile(name, age, gender));

    console.log(profileList);
}

