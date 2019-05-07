function addClick(){
    window.location.href="index.html";
}

$(window).load(function() {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/3"
    }).done(function(data) {
        var resp=JSON.parse(JSON.stringify( data));
        $('#cardContent').append('<div><br/>DATA FROM A WEB-API : '+resp.UserId+" "+resp.Title+" "+resp.Body+'</div>');
        $("#loader").css("display", "none");
        $("#cardContent").css("display", "block");
    });
});
