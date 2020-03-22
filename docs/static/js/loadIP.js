var ipconfig = {
    vpnserver_ip : "1.1.1.1",
}


$(document).ready(function () {
    for(key in ipconfig){
        var value = ipconfig[key];
        $('#' + key).attr("href",value);
    }
});

