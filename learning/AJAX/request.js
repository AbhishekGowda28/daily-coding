let httpRequest;
if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open("Get", "../drag_and_drop");
httpRequest.send();