const express = require('express');
const bodyParser = require('body-parser');
const query = require('querystring');
const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

let buzzwordList = [];
let point = 0;

//GET method
// app.get('/', (req, res) => {
//   res.send('index.html')
// });

app.get('/buzzwords', (req, res, next) => {
  res.json({'buzzwords': buzzwordList})
});

//POST Requests
app.post('/buzzwords', (req, res, next) => {

  buzzwordList.push(req.body)
  //buzzwordList.push(req.body.points)
  res.json({'success' : true})

  console.log("this is body:", req.body) // {}
  console.log("this is buzzword:", req.body.buzzwords) //it is undefined
  console.log("this is point:", req.body.points) //it is undefined

});
app.post('/reset', (req, res, next) => {
});

//PUT Requests
app.put('/buzzwords', (req, res, next) => {
  let scores = buzzwordList.push(req.body.points)
  for(var i = 0; i < buzzwordList.length; i++){
    if(req.body.buzzwords === buzzwordList[i]) {
      res.send({'heard' : true})
      res.json({'buzzwords': buzzwordList, 'success' : true})
    }//if statement
  }//forloop

});

//DELETE Requests
app.delete('/buzzwords', (req, res, next) => {
});

const server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  //console.log(`server running on ${host}, at port ${port}`)
});