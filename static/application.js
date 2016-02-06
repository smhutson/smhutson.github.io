$(document).ready(function(){
  preventBackUp()
  $(document).keypress(typeKey)
  setInterval(function(){$("#cursor").toggle()}, 600)
})

function setCommands(){
  return {
    "ls": listAll,
    "run": runProgram,
    "quit": quit
  }
}

function downOneLine(){}

var listAll = function(){
  $("table").append("<tr><td>resume.py</td><td>resume</td></tr>")
  console.log($('#test'))
}

var runProgram = function(name){
  $("table").append("<tr><td>test</td><td>resume</td></tr>")

  return "runProgram"
}

var quit = function(){
  return "quit"
}

var typeKey = function(event){
  console.log(event.which)
  if (event.which == 13){
    interpret()
  }else {
    $(".input").append(String.fromCharCode(event.which))
  }
}
var preventBackUp = function(){
  var rx = /INPUT|SELECT|TEXTAREA/i;
  $(document).bind("keydown keypress", function(e){
    if( e.which == 8 ){ // 8 == backspace
      if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
        e.preventDefault();
        var innerText = $(".input").text()
        $(".input").html(innerText.substr(0,innerText.length-1))
      }
    }
  });
}

var interpret = function(){
  var input = $(".input").html()
  console.log("input is "+input)
  console.log(commands[input]())
  downOneLine()
}

var commands = setCommands()
