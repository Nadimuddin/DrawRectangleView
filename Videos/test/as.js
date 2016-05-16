var fs = require('fs');
var async = require('async');

var path = './async.txt';
async.waterfall([
    // check if async.txt exists
    function(cb) {
        fs.stat(path, function(err, stats) {
            if (stats == undefined) cb(null);
            else console.log('async.txt exists');
        });
    },
    // read the contents of this file
    function(cb) {
        console.log('inside first cb' +cb.toString());

        fs.readFile(__filename, function(err, content) {
            var code = content.toString();
            cb(null, code);
        });
    },
    // write the content to async.txt
    function(code, cb) {
        // console.log(code+" and "+cb);

        fs.writeFile(path, code, function(err) {
            if (err) throw err;
            console.log('async.txt created!');
        });
    }
]);