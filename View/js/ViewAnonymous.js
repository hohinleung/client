$(document).ready(function () {


    
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
        url: "http://localhost:4000/addanonymous",
        method: "get",
    
        success: function (data) {
            var username = $('#username').text()
            console.log(username)
            for (i = 0; i < data.anonymous.length; i++) {
                console.log(data.anonymous)
                $('#anonymous').append(
    
                    '<br><table style="width:100%">'+
                    '<tr> <th> Post Date </th><td>'+ data.anonymous[i].date + '</td></tr>'+
                    '<tr><td colspan="2">Comment <tr></td>' + '<tr><td colspan="2">' +data.anonymous[i].Text + '<tr></td></table>' +
    
                    ( username == data.anonymous[i].username ?
    
                    '<form onsubmit="setTimeout(function () { window.location.reload() }, 10)" method="post" action="http://localhost:4000/addanonymous/{{id}}?_method=DELETE">' +
                        '<input type="hidden" name="_method" value="' + data.anonymous[i]._id + '" </input>' +
                        '<button type="button" data-toggle="modal" data-target="#ModalCenter' + i + '">Edit</button>' +
                        '<button type="submit" onClick="setTimeout(function () { window.location.reload() }, 10)" id="btn_anonymous' + i + '"' + '>Delete</button>' + 
                        '</form>'
                    : '' ) +
                    '<div class="modal fade" id="ModalCenter'+ i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
                    '<div class="modal-dialog modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<h5 class="modal-title" id="exampleModalCenterTitle">Modify Your Choosing anonymous</h5>' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<form onsubmit="setTimeout(function () { window.location.reload(); }, 50)" method="POST" action="http://localhost:4000/addanonymous/{{id}}?_method=PUT">' +
                    '<div class="modal-body">' +
                    '<input type="hidden" name="edit_anonymous" value=' + data.anonymous[i]._id + '>' +
                    '<input type="text" class="form-control" name="anonymous" required>'+
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                    '<button type="submit" onClick="setTimeout(function () { window.location.reload() }, 50)" class="btn btn-primary">Save changes</button>' +
                    '</div>' +
                    '</form>'+
                    '</div>' +
                    '</div>'
                )
                }
        }
    })
    
    
    })