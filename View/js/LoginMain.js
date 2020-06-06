$(document).ready(function () {


    
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
    url: "http://localhost:4000/addcomment",
    method: "get",

    success: function (data) {
        var username = $('#username').text()
        console.log(username)
        for (i = 0; i < data.comment.length; i++) {
            console.log(data.comment)
            $('#comment').append(

                '<br><table style="width:100%">'+
                '<tr><th> Username </th> <th> Post Date </th></tr>'  + '<tr><td>'+ data.comment[i].username + '</td>' +
                '<td>'+ data.comment[i].date + '</td></tr>'+
                '<tr><td colspan="2">Comment <tr></td>' + '<tr><td colspan="2">' +data.comment[i].Text + '<tr></td></table>' +

                ( username == data.comment[i].username ?

                '<form onsubmit="setTimeout(function () { window.location.reload() }, 10)" method="post" action="http://localhost:4000/addcomment/{{id}}?_method=DELETE">' +
                    '<input type="hidden" name="_method" value="' + data.comment[i]._id + '" </input>' +
                    '<button type="button" data-toggle="modal" data-target="#ModalCenter' + i + '">Edit</button>' +
                    '<button type="submit" onClick="setTimeout(function () { window.location.reload() }, 10)" id="btn_comment' + i + '"' + '>Delete</button>' + 
                    '</form>'
                : '' ) +
                '<div class="modal fade" id="ModalCenter'+ i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h5 class="modal-title" id="exampleModalCenterTitle">Modify Your Choosing Commnet</h5>' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<span aria-hidden="true">&times;</span>' +
                '</button>' +
                '</div>' +
                '<form onsubmit="setTimeout(function () { window.location.reload(); }, 50)" method="POST" action="http://localhost:4000/addcomment/{{id}}?_method=PUT">' +
                '<div class="modal-body">' +
                '<input type="hidden" name="edit_comment" value=' + data.comment[i]._id + '>' +
                '<input type="text" class="form-control" name="comment" required>'+
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