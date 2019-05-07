function addClick(){
    window.location.href="https://mastermac.github.io/w1/index.html";
}

$(function() {
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/3"
    }).done(function(data) {
        var resp=JSON.parse(JSON.stringify( data));
        $('.w1 #cardContent').append('<div><br/>DATA FROM A WEB-API : '+resp.userId+" "+resp.title+" "+resp.body+'</div>');
        $(".w1 #loader").css("display", "none");
        $(".w1 #cardContent").css("display", "block");
    });
});
