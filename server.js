// 导入 hhtp 模块
const http = require("http");
const fs = require('fs')
 
// 创建服务器实例
const server = http.createServer();
 
// 监听客户端请求事件
// req 是此次请求，res 则是此次请求的结果
server.on("request", (req, res) => {
  var url = req.url;

  if (url.endsWith('.ico')) {
    return
  }

  //客户端输入的url，例如如果输入localhost:8888/index.html
  //那么这里的url == /index.html 

  var file = 'C://Heart' + url;
  console.log(url);
  //E:/PhpProject/html5/websocket/www/index.html 

  fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });
});
 
// 启动服务器
server.listen(8080, () => { // 8080 是服务开启在本机的 8080 端口
  console.log("服务器启动成功！");
});