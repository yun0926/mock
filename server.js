/**
 * Created by MW on 2017/2/10.
 */

import express from "express";
import Mock from "mockjs";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import iconv from "iconv-lite";
import cors from "cors";
import log4js from "log4js";

log4js.configure({
    appenders: [
        { type: 'file', filename: 'log/system.log', category: 'system' }
    ]
});
const SystemLog = log4js.getLogger('system');

SystemLog.setLevel("ERROR");


function MyServer(obj) {
    Object.assign(this, MyServer.defaults, obj);

    this.app = new express();

    console.log(path.join(__dirname,"aaa"));

    //缓存地址目录规则  项目名称加 后缀 _mock_file


    this.cacheDataPath = __dirname + path.sep + this.projectName + "_" + this.cacheDataPatchAnchor;


    //按照时间戳备份文件
    this.backTitmeFilePath = this.cacheDataPath+path.sep + this.bakJsonFileName;




    this.initLog();




    this.initProjectInitFile();



}


MyServer.prototype.initLog = function () {
    log4js.addAppender(log4js.appenders.file("log"+path.sep+this.projectName+".log"),this.projectName);

    this.logger  =  log4js.getLogger(this.projectName);
    this.logger.setLevel(this.logLevel);

    this.app.use(log4js.connectLogger(this.logger, { level: 'auto' }));

}



MyServer.prototype.initProjectInitFile = function () {


    //按照时间戳备份文件
    if(fs.existsSync(this.backTitmeFilePath)){
        console.log("---------找到备份文件 备份文件 start--------");


        var readStream = fs.createReadStream(this.backTitmeFilePath);

     /*   var date = dateFormat.call(new Date(),"yyyy_MM_dd_HH:mm:ss");*/


        var writeStream = fs.createWriteStream(this.cacheDataPath+path.sep + new Date().getTime()+".json");


        readStream.pipe(writeStream);


        readStream.on('end', function () {
            console.log('copy end');


            this.deleteFileToCreactFile();
            this.startServer();
        }.bind(this));


        readStream.on('error', function () {
            console.log('copy error');
        }.bind(this));




    }else {
        console.log("------没有找到备份文件 项目第一次启动 开始创建文件 start------");
        this.deleteFileToCreactFile();
        this.startServer();
        console.log("------end------");
    }

}


MyServer.prototype.deleteFileToCreactFile = function () {
    var cacheDataPath = this.cacheDataPath;
    //创建文件目录
    if (fs.existsSync(cacheDataPath)) {
        console.log(cacheDataPath + '\n' + '已经有该目录\n');
        this.writeFile();
    } else {
/*       this.mkdirsSync(cacheDataPath);*/
        fs.mkdirSync(cacheDataPath)
        console.log('更新目录已创建成功\n' + cacheDataPath);
        this.writeFile();
    }

    //读取文件初始化文件到内存
    this.readFileSyncToCacheData();
}

MyServer.prototype.writeFile = function () {
    var jsFile = this.cacheDataPath + path.sep + this.cacheDatafileName;

    var jsonString = "{}";
    if (fs.existsSync(this.backTitmeFilePath)) {
        jsonString = fs.readFileSync(this.backTitmeFilePath, "utf-8");
    }

    var buffer = iconv.encode(jsonString, 'utf8');

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.writeFileSync(jsFile, buffer, "utf-8");

}

MyServer.prototype.readFileSyncToCacheData = function () {
    var readFileState = true;
    var jsFile = this.cacheDataPath + path.sep + this.cacheDatafileName;

    var jsonString = fs.readFileSync(jsFile, "utf-8");

    var json = JSON.parse(jsonString);

    this.Mdata = json;

    return readFileState;
}


MyServer.prototype.corsInit = function () {
    var corsOptions = {
        origin: this.origin,
        optionsSuccessStatus: 200
    }
    this.app.use(cors(corsOptions))
}

MyServer.prototype.startServer = function () {
    // this.app.use(express.static(__dirname + '/html'));
    this.corsInit();


    this.app.use(express.static(__dirname + '/Mock',{
        index:"index.html"
    }));



    this.app.use(express.static(this.cacheDataPath));


  /*  this.app.use(express.static(__dirname + '/eworkpal_database_file'));*/

    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(bodyParser.json());


/*    this.app.all("*", this.initHeader);*/

    //初始化 mock

    for (var key in this.Mdata) {
        this.helpReg(key);
    }

    this.initRoute();

    this.app.listen(this.listenPort);

    console.log("----startServer----------");
    console.log(this.Mdata);
}

MyServer.prototype.helpReg = function (key) {
    let x = (req,resp,next)=>{
        var k = req.url.replace(/\?.*/i,''),
            s = this.Mdata[k].sleep,
            data = this.Mdata[k].data;

        //输入参数返回给客户端
        data.query = req.query||{};
        if(s>0){
            // sleep.sleep(s);
            setTimeout(function() {
                resp.send(Mock.mock(data));
            }, s*1000);
        }else{
            resp.send(Mock.mock(data));
        }

    };
    this.app.route(key).get(x).post(x);
}


MyServer.prototype.initRoute = function () {

    //url是否可以使用 判断地址是否可用
    this.app.route("/lux/test").get(function (req, resp) {
        var {url, ctx, sleep, msg, isover} = req.query,
            url = url.replace(/\?.*/i, ''),
            body = this.Mdata[url] ? this.Mdata[url].data : {msg: url + ": 可以使用"};
        resp.send(body);
    }.bind(this));





    //新增地址
    this.app.route("/lux/data").post(function (req, resp) {
        var {url, ctx, sleep, msg, isover} = req.body,
            url = url.replace(/\?.*/i, '').toLowerCase(),
            d = new Date(), body, readData;


        try {



            if (!/^\//.test(url)) {
                throw new Error("url 地址必需以 \"/\" 开头,比如: /public/getEnum");
            }

            if (!/^[\/\w\.]+$/.test(url)) {
                throw new Error('请输入正确的url');
            }
            body = (JSON.parse(ctx));

            if (!/^[1-9]\d{0,1}$/.test(sleep)) {
                // throw new Error('sleep输入的不是有效数字,不能以0开头');
                sleep = 0;
            }
            readData = {
                msg: msg || "暂无备注",
                sleep: Number(sleep),
                at: d.toLocaleString() + " " + d.toLocaleTimeString(),
                data: body
            };
            if (this.Mdata[url]) {
                if (isover === "true") {
                    this.Mdata[url] = readData;
                } else {
                    throw new Error("已经存在了该请求的url的内容,请检查内容后选择是否进行覆盖");
                }
            } else this.Mdata[url] = readData;

            this.helpReg(url);
            fs.writeFile(this.backTitmeFilePath, JSON.stringify(this.Mdata), 'utf8');
        } catch (err) {
            body = {
                "msg": err.message || "上传错误，检查您的json是否为标准的\"json"
            }
        }
        resp.send(body);
    }.bind(this));
}

MyServer.defaults = {
    origin:"*",
    projectName: "eworkpal",//项目名称
    cacheDataPatchAnchor:"database_file",//路径锚点

    cacheDatafileName:"web_mock.json",//初始化 进入读取文件缓存名称  建议不变
    bakJsonFileName:'web_mock_bak.json',//备份的文件名


    mock_file_url: "mock_file",//备份文件名
    listenPort: 9090,

    logLevel:"ERROR" // ERROR 日志错误级别  log4js.levels.INFO
}





export {
    MyServer,
    SystemLog
}

