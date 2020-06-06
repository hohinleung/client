$(document).ready(function () {

    $('#logout').click(function (){
        $.ajax({
            url: "http://localhost:4000/logout",
            method: "get",
        
            success: function (data) {
                window.location = '/'
                
            }
        })
    })

    $.ajax({
        url: "http://localhost:4000/user",
        method: "get",
    
        success: function (data) {
            if (data.username == '') {
                alert("Login Plz")
                window.location = '/'
            }else {
                $('#username').text(data.username);
            }
            
            
        }
    })

    $('#add_anonymous').click(function () {
        var anonymous = $('#addanonymous').val()
        var username = $('#username').text()
        console.log(anonymous)
        console.log(username)
        $.ajax({
            url: "http://localhost:4000/addanonymous",
            type: "POST",
            dataType: "application/json",
            data: {
                anonymous: anonymous,
                username: username
            },
            success: function (data) {
                
            },
            //complete: window.location = '/ViewAnonymous'
            
        
        })
    })
    })