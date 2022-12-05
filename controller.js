

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
    <input type="text" id="name" class="field" placeholder="name"/><br/>
    <input type="text" id="age" class="field" placeholder="age"/><br/>
    <input type="text" id="gender" class="field" placeholder="gender"/><br/>
    <br/>
`;

document.getElementById("profilerCenter").innerHTML += `
    <div>
        <button id="addbtn" onclick="addInfo()">Add</button>
        <button id="submitbtn" onclick="sendInfo()">Submit</button>
    </div>
`;
}


function addInfo(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

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
        </div>
    `;
    }
}


document.getElementById("sideBar").innerHTML += btnTest();

function btnTest(){
    return "<button>Testing feature</button>";
}



loadProfile();
