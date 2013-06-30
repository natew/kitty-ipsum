var express = require("express")
var app = express()
var _ = require("underscore")

app.get('/', function (req, res) {
  var body = Sentence(3).call
  res.end(body)
})

app.get('/paragraph/:sentences', function (req, res) {
  var body = new Paragraph(req.params.sentences).call()
  console.log("body", body)
  res.end(body)
})

app.get('/:words', function (req, res) {
  console.log(req)
  var body = Sentence(req.params.words)
  res.end(body)
})

app.listen(8000)
console.log("Listening on port 8000")

var Paragraph = function (numSentences) {
  var numSentences = parseInt(numSentences, 10)
  return {
    call: function () {
      var sentencesArray = new Array(numSentences)
      return _.map(sentencesArray, function () {
        console.log(this)
        var sentence = new Sentence(5).call
        return sentence
      }).join(" ")
    }
  }
}

var Sentence = function (words) {
  var words = parseInt(words, 10) 
  var meow = "meow "
  var sentence = Array(words+1).join(meow).toString()
  sentence += "\n"
  return {
    call: sentence
  }
}

