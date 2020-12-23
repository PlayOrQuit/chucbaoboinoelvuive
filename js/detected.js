
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var hostname = window.location.origin;
    window.location.href = hostname + "/index2.html";
}