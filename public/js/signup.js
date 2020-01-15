$(document).ready(function () {
    $('.select').click(function () {
        $(this).removeClass('text-muted')
        $(this).addClass('text-light')

    })
    $('#cfpassword').on('keyup', function () {
        var password = $('#password').val();
        var cfpassword = $('#cfpassword').val();
        if(cfpassword == password){
            $('#button').attr('disabled', false);
        }
        else{
            $('#button').attr('disabled', true);
        }
        
    })

    $('#password').on('keyup', function () {
        var password = $('#password').val();
        var cfpassword = $('#cfpassword').val();
        if(cfpassword == password){
            $('#button').attr('disabled', false);
        }
        else{
            $('#button').attr('disabled', true);
        }
        
    })
});