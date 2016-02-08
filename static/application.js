$(document).ready(function(){
  preventBackUp()
  $(document).keypress(typeKey)
  setInterval(function(){$("#cursor").toggle()}, 600)
})

function setCommands(){
  return {
    "ls": listAll,
    "run": runProgram,
    "quit": quit,
    "read": read
  }
}

function downOneLine(){}

var listAll = function(){
  $("#reader-table").prepend("<tr><td>resume.py</td><td>resume</td></tr>")
  console.log($('#test'))
}

var runProgram = function(name){
  $("#reader-table").prepend("<tr><td>test</td><td>resume</td></tr>")
  console.log(name)
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
    $(".input").append
(String.fromCharCode(event.which))
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


var read = function(){}

var interpret = function(){
  var input = ($(".input").html()).split(" ")
  var command = input[0]
  // console.log("input is "+command)
  try {
    commands[command](input[1])
  } catch (e){
    $("#reader-table").prepend("<tr><td>"+ input +"</td><td>Is not a command</td></tr>")
  }
  downOneLine()
}

var commands = setCommands()
