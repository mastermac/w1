function addClick(){
    window.location.href="index.html";
}

$(function() {
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/3"
    }).done(function(data) {
        var resp=JSON.parse(JSON.stringify( data));
        $('#w1_cardPanel #cardContent').append('<div><br/>DATA FROM A WEB-API : '+resp.userId+" "+resp.title+" "+resp.body+'</div>');
        $("#w1_cardPanel #loader").css("display", "none");
        $("#w1_cardPanel #cardContent").css("display", "block");
    });
});
