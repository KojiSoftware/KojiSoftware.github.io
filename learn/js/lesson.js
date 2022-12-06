window.onload = function() {
  document.getElementById("lesson").innerHTML = "<h1>Learn JavaScript</h1><div id='comp1'></div>";
  document.getElementById("comp1").innerHTML = "<big>Basic Info</big><div id='info'></div>";
  document.getElementById("info").innerHTML = "<p>in this part of the lesson you will learn how to do the basics<br/>logging, windows, & variables</p><div id='comp2'></div>";
  document.getElementById("comp2").innerHTML = "<button onclick='part1()'>Start Coding</button>";
}
        
function part1() {
  document.getElementById("lesson").innerHTML = "<h1>JavaScript Logging</h1><div id='comp3'></div>";
  document.getElementById("comp3").innerHTML = "How to log to the console, this is to print something to the terminal try so how you do this is you type <b>console.log('your message');</b><div id='comp4'></div>";
  document.getElementById("comp4").innerHTML = "<button onclick='try_part1()'>Try it</button>";
}
      
function try_part1() {
  document.getElementById("lesson").innerHTML = "<h1>Try Console Logging</h1><div id='comp5'></div>";
}
