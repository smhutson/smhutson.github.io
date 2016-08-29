var Snake = function(){
  self.score = 0
  self.length = 5
}

Snake.prototype.setUp = function() {
  $('#reader-table').hide()
  $('#snake').show()
  $('#snake').html(
    "<h2>Welcome to:</h2>" +
    "<p>----SSSSS----NNN----NN-------AAA--------KK---KKK---EEEEEE---</p>" +
    "<p>---SS--------NN-N---NN------AA-AA-------KK--KK-----EE-------</p>" +
    "<p>-----SSSS----NN--N--NN-----AAaaaAA------KKKK-------EEEEE----</p>" +
    "<p>---s----SS---NN---N-NN----AA-----AA-----KK--KK-----EE-------</p>" +
    "<p>----SSSSS----NN----NNN---AA-------AA----KK---KKK---EEEEEE---</p>" +
    "</br><p>Eat as many <span class='red'>Red Apples</span> as you can " +
    "while avoiding the <span class='blue'>Blue barriers</span>.</p>" +
    "<p>Press the space bar to begin.</p>"
  )
}

Snake.prototype.tearDown = function(){
  $('#reader-table').show()
  $('#snake').hide()
}

snake = new Snake()
