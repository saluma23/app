var express =require('express');
var app = express.createServer(express.logger());

app.use(express.static(__dirname));

app.get('/',function(request, response)
{response.render("index");
});

var port= process.env.PORT || 5000;

app.listen(port,function()
{console.log("loging on"+ port);
});
