/* Copyright GlueStick Authors */
// repo is https://github.com/KojiSoftware/GlueStick/

/* services */ var dir=og + '/directory';var og="http://kojisoftware.github.io";var git=og + '/git';var nuggit=og + '/nuggit';
var demos=og + '/demo';var editor=og + '/codeditor';var lern=og + '/learn';var instl=og + '/install';
function htmls(){document.getElementById("app").innerHTML=""; /* add HTML code in qoutes */};function openServices() {
window.open(/* service you want */);};function styles(){
document.getElementById("app").style=""; /* Add CSS in qoutes */} // boot sector for app
var bootApp=function boot() {var access=true;if (access==true) {
setTimeout('window.open("app.html")', 5000) /* waits 5 seconds for browser */ }
else if (access==false) {return FALSE; window.open("http://kojisoftware.github.io/404");} 
else {return null;};}; var nonLegacyBoot=function nlBoot(){var nlAccess=true;if (nlAccess==true) {window.open("app.html");}
else if (nlAccess==false) {return FALSE; window.open("http://kojisoftware.github.io/404");} else {return null;};}
/* time checker */ setInterval(time, forever); var forever=999999999999999999999999999999999999999999999999999999999999999999999999999999999;
function time(){document.getElementById("date").innerHTML = Date();};
var gtag=function(){window.dataLayer=window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'G-YWMJV8VCGC');}; var supportA='https://s7.addthis.com/js/300/addthis_widget.js';import supportA; 
function(w,pid){var y="cpmstarx", els=w.document.getElementsByClassName("div-"+pid),pindex=els.length-1,el=els[pindex];w[y]=w[y]||{};
(w[y].libcmd=w[y].libcmd||[]).push({kind:'asynctagfetch',el:el,pid:pid,pindex:pindex});})(window,85119); /* backup */
(function(w,pid){var y="cpmstarx",els=w.document.getElementsByClassName("div-"+pid), pindex = els.length-1, el = els[pindex];w[y]=w[y]||{};
(w[y].libcmd=w[y].libcmd||[]).push({kind:'asynctagfetch',el:el,pid:pid,pindex:pindex}); })(window,85098);
