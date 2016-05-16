var express=require('express')
	,router=express.Router()
	,Home=require('../model/home')
	,home=new Home();

router.get('/home',function(req,res){
	home.get(function(err,data){
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	})
})
module.exports=router;