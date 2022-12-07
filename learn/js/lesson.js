window.onload = function() {
  document.getElementById("lesson").innerHTML = "<h1>Learn JavaScript</h1><div id='comp1'></div>";
  document.getElementById("comp1").innerHTML = "<big>Basic Info</big><div id='info'></div>";
  document.getElementById("info").innerHTML = "<p>in this part of the lesson you will learn how to do the basics<br/>logging, windows, & variables</p><div id='comp2'></div>";
  document.getElementById("comp2").innerHTML = "<button onclick='part1()'>Start Coding</button>";
}
        
function part1() {
  document.getElementById("lesson").innerHTML = "<h1>JavaScript Logging</h1><div id='comp3'></div>";
  document.getElementById("comp3").innerHTML = "How to log to the console, this is to print something to the terminal<br/>try so how you do this is you type <b>console.log('your message');</b><br/><br/><div id='comp4'></div>";
  document.getElementById("comp4").innerHTML = "<button onclick='try_part1()'>Try it</button>";
}
      
function try_part1() {
  document.getElementById("lesson").innerHTML = "<h1>Try Console Logging</h1><div id='comp5'></div>";
  document.getElementById("comp5").innerHTML = "<form method='GET'><input type='text' id='getter' placeholder='enter in console.log(&quot;hello world&quot;);'/><input type='submit' value='compile' onclick='compile()'/></form><br/><div id='terminal'></div>";
}

function compile()
{
  let compiler = document.getElementById('getter').value;
  
  if (compiler == "console.log('hello world');") {
    part2();
  } else if (compiler == 'console.log("hello world");') {
    part2();
  } else if (compiler == 'console.log("hello world")') {
    part2();
  } else if (compiler == "console.log('hello world')") {
    part2();
  } else {
    // do nothing
  }
}

function part2() {
  document.getElementById("lesson").innerHTML = "<h1>JavaScript Variables</h1></div><div id='comp6'></div>";
  document.getElementById("comp6").innerHTML = "How to add variables, well first if you don't know what variables are they are something that stores data like var hi = 'hello'<div id='comp7'></div>";
  document.getElementById("comp7").innerHTML = "which basically means when I call hi you say 'hello' you can make a variable with these three keywords<br/>const, let, var<div id='comp8'></div>";
  document.getElementById("comp8").innerHTML = "const (is a value that never changes), let &amp; var mean the same thing but we recommed using let instead of var if you get an error then use var!<div style='height:10px;'></div><div id='comp9'></div>";
  document.getElementById("comp9").innerHTML = "<button onclick='try_part2'()>Try it</button>";
}

function try_part2() {
}

function compile_part2() {
}
