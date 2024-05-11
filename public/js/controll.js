
        $(document).ready(function() {
alert(200);
function test(){
var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://ytmate.cyclic.app",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "username": "user@company.com",
            "password": "12345678"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
            alert(9);
    });

}
test();
           
                alert(77);
        });
