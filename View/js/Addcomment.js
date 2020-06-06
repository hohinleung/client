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
            //console.log(data.username);
            if (data.username == '') {
                alert("Login Plz")
                window.location = '/'
            }else {
                $('#username').text(data.username);
            }
            
            
        }
    })

    $('#add_comment').click(function () {
        var comment = $('#addcomment').val()
        var username = $('#username').text()
        console.log(username)
        $.ajax({
            url: "http://localhost:4000/addcomment",
            type: "POST",
            dataType: "application/json",
            data: {
                Text: comment,
                username: username
            },
            success: function (data) {
                
            },
            complete: window.location = '/LoginMain'
        
        })
    })
    })
