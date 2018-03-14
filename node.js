const  {MyServer,SystemLog}  = require("./dist/server.dist");
const ServerConfig = require("./server.config.json");
try {
    ServerConfig.forEach(function (item,index) {
        new MyServer(item);
    });
}catch (e){
    SystemLog.error(e);
}


