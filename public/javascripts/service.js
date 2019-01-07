$(function(){ 
    $('#getData').click(function (){
        let nameV = $("#name").val();
        $.ajax({
            type:'get',
            url:'http://localhost:2000/users/userValid',
            data: {
                name: nameV,
            },
            success:function(data){
                console.log(data);
            },
            error:function(){
                console.log('error');
            }
        })
    });
    $('#addData').click(function (){
        let nameV = $("#name").val();
        let pwdV = $("#password").val();
        $.ajax({
            type:'post',
            url:'http://localhost:2000/users/add',
            data: {
                name: nameV,
                password: pwdV
            },
            success:function(data){
                console.log(data);
            },
            error:function(){
                console.log('error');
            }
        })
    });
    $('#delData').click(function (){
        let nameV = $("#name").val();
        $.ajax({
            type:'get',
            url:'http://localhost:2000/users/del',
            data: {
                name: nameV,
            },
            success:function(data){
                console.log(data);
            },
            error:function(){
                console.log('error');
            }
        })
    });
    $('#editData').click(function (){
        let nameV = $("#name").val();
        let pwdV = $("#password").val();
        $.ajax({
            type:'post',
            url:'http://localhost:2000/users/edit',
            data: {
                name: nameV,
                password: pwdV
            },
            success:function(data){
                console.log(data);
            },
            error:function(){
                console.log('error');
            }
        })
    });
});