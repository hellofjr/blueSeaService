$(function(){ 
    $('#getData').click(function (){
        let nameV = $("#name").val();
        $.ajax({
            type:'get',
            url:'http://localhost:2000/getdata',
            data: {
                name: nameV
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
        let idV = $("#pid").val();
        let nameV = $("#name").val();
        $.ajax({
            type:'post',
            url:'http://localhost:2000/add',
            data: {
                id: idV,
                name: nameV
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
        let idV = $("#pid").val();
        $.ajax({
            type:'get',
            url:'http://localhost:2000/del',
            data: {
                id: idV,
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
        let idV = $("#pid").val();
        let nameV = $("#name").val();
        $.ajax({
            type:'post',
            url:'http://localhost:2000/edit',
            data: {
                id: idV,
                name: nameV
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