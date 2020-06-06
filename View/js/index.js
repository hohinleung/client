


$(document).ready(function () {

    $('#btn_login').click(function () {
        var logemail = $('#logemail').val()
        var password = $("#logpassword").val()
        $.ajax({
            url: "http://localhost:4000/",
            data: {
                logemail: logemail,
                logpassword: password
            },
            type: "POST",
            dataType: "application/json",
            success: function (data) {
                
            },complete:  setTimeout(function () {
                $.ajax({
                    url: "http://localhost:4000/user",
                    method: "get",
            
                    success: function (data) {
                        if (data.username == ''){
                            alert("Wrong password or email");
                        } else {
                            window.location = '/LoginMain'
                        }
                        
                        
                    }
                })
        },100)
    
        });
    
    
        
    
    
    
    })

    $.ajax({
        url: "http://localhost:4000/user",
        method: "get",

        success: function (data) {
            if (data.username == ''){

            } else {
                window.location = '/LoginMain'
            }
            
            
        }
    })



    $.ajax({
        url: "http://localhost:4000/test",
        data: {
            name: "123"
        },
        type: "POST",
        dataType: "application/json",
        success: function (data) {
            console("123")
        }


    });




});