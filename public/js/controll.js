
        $(document).ready(function() {
alert(200);
function test(){
var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pdftoword.cyclic.app/",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "username": "iuui",
            "password": "12345678"
        }
    }
    
    $.ajax(settings).done(function (data) {
            alert(2);
      alert(data.thumb[1].url);
      // alert(data.items.mimetype);
    }).fail(function (jqXHR, textStatus) {
    alert(404);
});

}
test();
           
                alert(77);
        });
