const express = require('express')
const app = express()
const request= require('request')
//--------------------------------------------------------------------------------------------
app.set('view engine',"ejs")
//--------------------------------------------------------------------------------------------
app.get("/",function(req,res){
    console.log("Someone Requested For The Home Page")
    res.render('index')
})
app.get("/results",function(req,res){
    console.log("Someone Requested For The Movies Page")
    var query = req.query.search
    var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb"
    request(url, function(error,response,body){
    if(!error && response.statusCode==200)
    {
        var data = JSON.parse(body)
        //res.send(results["Search"][0])
        res.render('results',{data : data})
    }
    })
})




app.listen(3000,function(){
    console.log("Server Has Started Successfully")
});