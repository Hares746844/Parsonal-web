$(document).reay(function(){
    $('menu').click(function(){
        $(this).toggleclass('fa-time');
        $('header').toggleclass('toggle'); 
    });
    $(winow).on('scroll loa',function(){
        $('menu').removeclass('fa-time');
        $('header').removeclass('toggle');       
    })
});