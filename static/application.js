$(document).ready(function(){
  preventBackUp()
  $(document).keypress(typeKey)
  setInterval(function(){$("#cursor").toggle()}, 600)
})

function setCommands(){
  return {
    "ls": listAll,
    "run": runProgram,
    "clear": clear,
    "read": read
  }
}

function downOneLine(){}

var listAll = function(){
  $("#reader-table").prepend("<tr><td>interview.py</td><td>: A walk through a few potential interview questions </td></tr>")
  $("#reader-table").prepend("<tr><td>resume.py</td><td>: A copy of Stephanie Hutson's resume </td></tr>")
  $("#reader-table").prepend("<tr><td>contact.txt</td><td>: How to get in contact </td></tr>")
  $("#reader-table").prepend("<tr><td>projects.txt</td><td>: A few projects that Stephanie has worked on</td></tr>")
}

var runProgram = function(name){
  var parsed = name.replace('.py', '_output.txt')
  $.get("cgi-bin/"+parsed, function(response){
      response = response.replace(/\r?\n/g, '<br />').replace(/\s\s/g,'<span id= "hidden">&nbsp&nbsp</span>')
      $("#reader-table").prepend("<tr><td>"+ name +"</td><td>"+response+"</td></tr>")
  })
  return "runProgram"
}

var clear = function(){
  $("#reader-table").empty()
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
      response = response.replace(/\r?\n/g, '<br />').replace(/\s\s/g,'<span id= "hidden">&nbsp&nbsp</span>')
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
    console.log(e)
    $("#reader-table").prepend("<tr><td>"+ input[0] +"</td><td>: Command not found</td></tr>")
  }
  $(".input").html("")
}

var commands = setCommands()
