

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

//made for arrays of objects profile
let profileList = [];

function loadProfile(){
    document.getElementById("profileBox").innerHTML = `
    <div id="profilerCenter"></div>`;

    document.getElementById("profilerCenter").innerHTML += `
    <h1>Movie Tickets</h1>
    <input type="text" id="name" class="field" placeholder="name"/><br/>
    <input type="number" id="age" class="field" placeholder="age"/><br/>
    <input type="text" id="gender" class="field" placeholder="gender"/><br/>
    <br/>
`;

document.getElementById("profilerCenter").innerHTML += `
    <div>
        <button id="addbtn" onclick="addInfo()">Add</button>
        <button id="submitbtn" onclick="deleteProfile()">Remove</button>
    </div>
`;
}


function addInfo(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    if(name.length < 1){
        alert("You forgot to enter a name!");
        return;
    }

    profileList.push( new Profile(name, age, gender));

    
    console.log(profileList);
    sideBarUpdate();
    loadProfile();
    
}


function sideBarUpdate(){
    document.getElementById("sideBar").innerHTML = "";
    for(let i = 0; i < profileList.length; i++){
        document.getElementById("sideBar").innerHTML += `
        <div class="profileAdded">
          ${profileList[i].name}, ${profileList[i].age}, ${profileList[i].gender}
          <button onclick="deleteProfile(${i})">X</button>
        </div>
    `;
    }
}

function deleteProfile(target){
    profileList.splice(target,1);
    sideBarUpdate();
}

//document.getElementById("sideBar").innerHTML += btnTest();

// function btnTest(){
//     return "<button>Testing feature</button>";
// }



loadProfile();
