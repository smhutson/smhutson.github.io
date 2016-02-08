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
  $("#reader-table").prepend("<tr><td>interview.py</td><td>: A walk through a few potential interview questions </td></tr>")
  $("#reader-table").prepend("<tr><td>resume.py</td><td>: A copy of Stephanie Hutson's resume </td></tr>")
}

var runProgram = function(name){
  $("#reader-table").prepend("<tr><td>test</td><td>resume</td></tr>")
  return "runProgram"
}

var quit = function(){
  return "quit"
}



var typeKey = function(event){
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


var read = function(name){
  try {file = readFile(name)}
  catch (e){
    $("#reader-table").prepend("<tr><td>"+ name +"</td><td>Is not an available file</td></tr>")
  }

}

var readFile = function(name){
  $.ajax({
    url: "cgi-bin/"+name,
    success: function(response){
      response = response.replace(/\r?\n/g, '<br />').replace(/\s\s/g,'<span id= "hidden">__</span>')
      $("#reader-table").prepend("<tr><td>"+ name +"</td><td>"+response+"</td></tr>")
    },
    fail: function(response){
      console.log(response)
    }
  })
}

var interpret = function(){
  var input = ($(".input").html()).split(" ")
  var command = input[0]
  try {
    commands[command](input[1])
  } catch (e){
    $("#reader-table").prepend("<tr><td>"+ input[0] +"</td><td>: Command not found</td></tr>")
  }
  $(".input").html("")
}

var commands = setCommands()
