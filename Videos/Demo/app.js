var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000;

var execFile = require('child_process').execFile;
var exec = require('child_process').exec;

var update = 'sudo apt-get update';
var node = 'sudo apt-get install nodejs';
var npm = 'sudo apt-get install npm';


app.use(bodyParser());

app.post('/install/:data', function(req, res) {
    var params = req.params.data
    var node = params.split(',');
    var find = "which " + node[0];

    for (var i = 0; i <= node.length - 1; i++) {
        if (node.length == 1) {
            console.log(find);
        } else {
            var find = find.concat(" && which " + node[i])
        }
        var str = find;
    }
    console.log(str);
    exec(update, function(err, stdout, stderr) {
        if (err) {
            throw err;
        }
        res.send(stdout);
    })
    // if(node[0]=='node'){
    // 	var child=execFile('node',['--version'],function(error,stdout,stderr){
    // 		if(error){
    // 			throw error;
    // 		}
    // 		var result=stdout.trim();
    // 		console.log(result=='v6.0.0');
    // 	})
    // }
})

// app.get('/install',function(req,res){
//  //update

//  //node

//  //npm

//  //mongo
// var child = execFile('mongo', ['--version'], function(error, stdout, stderr)  {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });
// })

// app.get('/update',function(req,res){
// 	exec(cmd,function(error,stdout,stderr){
// 		 if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });
// 	})
app.listen(port, function() {
    console.log('server running on ' + port);
})