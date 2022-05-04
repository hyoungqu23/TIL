var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(url, queryData);

    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    
    // console.log(__dirname + _url); // 해당 페이지의 주소

    response.end(fs.readFileSync(__dirname + _url));
    // 유저가 요청할 때마다 해당 주소의 파일을 조회하거나 생성한다. -> 따라서 유저에게 제공하는 페이지가 변경된다.
    // 즉, 유저에게 제공할 데이터를 생성한다는 강점이 있다.
 
});

app.listen(3000);     // 'localhost:3000'이 주소가 된다.