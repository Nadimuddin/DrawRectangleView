var EventEmitter=require('events').EventEmitter
	,util=require('util');

function home(){
	EventEmitter.call(this);
}
util.inherits(home,EventEmitter);
home.prototype.get = function(cb){
	 cb(null,'hello');
};
module.exports=home;