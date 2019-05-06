function addClick(){
    window.location.href="index.html";
}

$(window).load(function() {

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/employee/34154"
    }).done(function(data) {
        var resp=JSON.parse(data);
        $('#cardContent').append('<div><br/><br/>DATA FROM A WEB-API : '+resp.employee_name+" "+resp.employee_salary+" "+resp.employee_age+'</div>');
        $("#loader").css("display", "none");
        $("#cardContent").css("display", "block");
    });
});
