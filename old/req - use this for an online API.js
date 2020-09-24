function getUsers(pageNumber){
    $.ajax({
        url: "https://reqres.in/api/users?page="+ String(pageNumber),
        type: "GET",
        success: function(response){
            //var objUsers = JSON.parse(response);
            renderUsers(response);
            console.log("got")
        }
    });

    /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users?page="+ String(pageNumber), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var objUsers = JSON.parse(xhr.responseText);
            renderUsers(objUsers);
        }
        else{
            alert("Error "+xhr.status)
        }
    
    }
    xhr.send();*/
    //console.log("got")
}
function renderUsers(objUsers){
    //console.table(objUsers)
    console.log("rendered")
    var newData = objUsers.data
    /*var origUser0 = document.getElementById("user1");
    var origUser1 = document.getElementById("user2");
    var origUser2 = document.getElementById("user3");
    var origUser3 = document.getElementById("user4");
    var origUser4 = document.getElementById("user5");
    var origUser5 = document.getElementById("user6");*/
    //console.log(origUser1.innerHTML)
    for (var i = 0; i < 6; i++) {
        document.getElementById("user"+(i+1)).innerHTML = '<td>'+newData[i].id+'</td><td>'+newData[i].email+'</td><td>'+newData[i].first_name+'</td><td>'+newData[i].last_name+'</td><td><img src="'+newData[i].avatar+'" class="img-rounded" alt="avatar"></td>'
    }
        //console.table(newData)
}

function nextPage(){
    var pageCurrent = document.getElementById("pageNumber")
    //console.log(pageCurrent)
    if (pageCurrent.innerText == "1"){
    console.log("next")
    getUsers(2);
    pageCurrent.innerText = "2"
    }
}
function prevPage(){
    var pageCurrent = document.getElementById("pageNumber")
    //console.log(pageCurrent)
    if (pageCurrent.innerText == "2"){
    console.log("prev")
    getUsers(1);
    pageCurrent.innerText = "1"
    }
}
function user1Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 1
        }
    if (pageCurrent.innerText == "2"){
        userID = 7
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 1 got")
            }
        }); 
   
    /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user1 got")*/
}
function user2Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 2
        }
    if (pageCurrent.innerText == "2"){
        userID = 8
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 2 got")
            }
        });    
    
    /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user2 got")*/
}
function user3Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 3
        }
    if (pageCurrent.innerText == "2"){
        userID = 9
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 3 got")
            }
        });
    
        /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user3 got")*/
}
function user4Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 4
        }
    if (pageCurrent.innerText == "2"){
        userID = 10
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 4 got")
            }
        });
   
        /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user4 got")*/
}
function user5Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 5
        }
    if (pageCurrent.innerText == "2"){
        userID = 11
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 5 got")
            }
        });
    
        /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user5 got")*/
}
function user6Get(){
    var pageCurrent = document.getElementById("pageNumber")
    var userID = 0
    if (pageCurrent.innerText == "1"){
        userID = 6
        }
    if (pageCurrent.innerText == "2"){
        userID = 12
        }   
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: "GET",
            success: function(response){
                //var objUsers = JSON.parse(response);
                userRender(response);
                console.log("user 6 got")
            }
        });

        /*var xhr = new XMLHttpRequest
    xhr.open("GET", "https://reqres.in/api/users/"+ String(userID), true);
    xhr.onload= function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            var userInfo = JSON.parse(xhr.responseText);
            userRender(userInfo);
            //console.table(userInfo)
        }
        else{
            alert("Error "+xhr.status)
        }
    }
    xhr.send();
    console.log("user6 got")*/
}
function userRender(userInfo){
    console.table(userInfo)
    var usrAvatar = document.getElementById("userAvatar")
    var lastName = userInfo.data.last_name
    //usrAvatar = userInfo.avatar
    usrAvatar.src = (userInfo.data.avatar)
    document.getElementById("userID").value = userInfo.data.id
    document.getElementById("userEmail").value = userInfo.data.email
    document.getElementById("userFirstName").value = userInfo.data.first_name
    document.getElementById("userLastName").value = lastName
    console.log("rendered usr info")
}

function createUser(){
    var usrName = document.getElementById("userName").value
    var usrJob = document.getElementById("userJob").value
    if(usrName && usrJob){
        //console.log(usrName)
        //console.log(usrJob)  
            postCreateUser(usrName,usrJob);
            console.log("create user")  
    }else{
        console.log("No info")
    }
}

function postCreateUser(usrName,usrJob){
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
            name: usrName,
            job: usrJob
        },
        success: function(response){
            console.log(response);
        }
    });
}
function deleteUser(){
    userID = document.getElementById("userID").value
    if(userID){
        $.ajax({
            url: "https://reqres.in/api/users/"+ String(userID),
            type: 'DELETE',
            statusCode: {
                204: function() {
                  console.log("user ID:"+userID+" deleted")
                }
            }
          });
    }
}
function updateUser(){
    userID = document.getElementById("userID").value
    userEmail = document.getElementById("userEmail").value
    userFirst = document.getElementById("userFirstName").value
    userLast = document.getElementById("userLastName").value 
    if(userID && userEmail && userFirst && userLast){
    $.ajax({
        url: "https://reqres.in/api/users/"+ String(userID),
        type: "PUT",
        data: {
            id: userID,
            email: userEmail,
            first_name: userFirst,
            last_name: userLast
        },
        success: function(response){
            console.log(response);
        }
    });
}else{
    console.log("missing info for update")
}
}