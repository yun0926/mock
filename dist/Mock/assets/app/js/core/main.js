define(function (require, exports, module) {
    window.jQuery = window.$ = require("jquery");
    window.Backbone = require("backbone");
    window._ = require('underscore');
    require("Backbone.ModelBinder");
    require("Backbone.CollectionBinder");

    require("bootstrap");
    require("bootstrap.hover.dropdown");
    require("jquery.mCustomScrollbar");
    require("bootstrap-dialog");
    require("template");
    require("bootstrap-select");
    require("bootstrap-select-zh-CN");
    require("select2");
    require("select2-zh-CN");
    require("jquery.serializejson");
    require("bootstrap-combobox");
    var mask = require("../tpl/html/mask.html");

    $.ajaxSetup = function (target, settings) {
        var beforeFn, completeFn, successFn;

        beforeFn = settings.beforeSend;
        completeFn = settings.complete;
        successFn = settings.success;


        if (debug == true) {
            $.extend(settings, {
                dataType: 'json',
                url: root + "/assets/app/data/" + settings.url + ".json"
            });
        } else {
            $.extend(settings, {
                url: root + settings.url
            });
        }

        $.extend(settings, {
            error:function(e){
             /*   console.log(arguments);
                alert("服务器请求错误连接失败("+e+")!");*/
            },
            success: function (r) {
                if (r && r.success === false && r.message && r.message == 403) {
                    window.location.href = "http://" + window.location.host + window.root + "login";
                    return;
                }
                if (r && r.success === false && r.message && r.message.length > 0) {
                    BootstrapDialog.alert(r.message);
                    return;
                }
                if (this.mask === true) {
                    $(".loading-container").remove();
                }
                if (successFn)
                    successFn.apply(settings.scope || this, arguments);
            },
            beforeSend: function () {
                if (settings.mask === true) {
                    $(mask).appendTo(document.body);
                }
                if (beforeFn)return beforeFn.apply(settings.scope || this, arguments);
                return true;
            },
            complete: function (xhr) {
                if (this.mask === true) {
                    $(".loading-container").remove();
                }
                if (completeFn)
                    completeFn.apply(settings.scope || this, arguments);
            }
        });

        //private
        //扩展ajax参数专用方法
        function ajaxExtend(target, src) {
            var deep, key,
                flatOptions = $.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    ( flatOptions[key] ? target : ( deep || (deep = {}) ) )[key] = src[key];
                }
            }
            if (deep) {
                $.extend(true, target, deep);
            }
            return target;
        }

        return settings ?
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
            ajaxExtend(jQuery.ajaxSettings, target);
    }


    /*    $.fn.serializeJson = function () {
     var serializeObj = {};
     var array = this.serializeArray();
     $(array).each(function () {
     if (serializeObj[this.name]) {
     if ($.isArray(serializeObj[this.name])) {
     serializeObj[this.name].push(this.value);
     } else {
     serializeObj[this.name] = [serializeObj[this.name], this.value];
     }
     } else {
     serializeObj[this.name] = this.value;
     }
     });
     return serializeObj;
     };*/


    var guide = new (require("Core/guide"));

    var me = Backbone.Router.extend({
        //"at/([^/]+)/([^/]+)(?:/(.*?))?"
        routes: {
            '': 'home',
            /*       '/at/:module/:action(/!*_)': 'loadModule',*/
            'log': "log",
            "*actions": "loadModule"
        },
        home: function () {
            this.loadModule('tactics/');
        },
        //按照/module/action(/conditions)格式的請求自動加載模块
        loadModule: function (path, con) {
            var self = this;
            var pathAttr = path.split("?");
            var action = pathAttr[0];
            var par = pathAttr[1];

            // #/page/pagehost?id=1&asd=33
            var cj = {};

            if (con && con.indexOf('=') > -1) {
                con.replace(/((?!\&).)*\=*([\w-]+)/g, function (a, b, c) {
                    var mo = a.split("=");
                    mo && (cj[mo[0]] = mo[1]);
                });
                /*    con.replace(/(\w+)\s*\=\s*([\w-]+)/g, function (a, b, c) {
                 b && (cj[b] = c);
                 });*/
            } else {
                cj = con;
            }
            //加载module目录下对应的模块
            if (guide) {
                var actionArray = action.split("/");
                var actionMode = actionArray[0] || "";
                var actionMethod = actionArray[1] || "welcome";
                try {
                    guide.apply({action: action, parameter: cj, actionMode: actionMode, actionMethod: actionMethod});
                    if (this.preActionMode && this.preActionMode == actionMode) {
                        guide.renderListPage();
                    } else {
                        guide.renderMenuView();
                        guide.renderListPage();
                    }
                } catch (e) {

                }
                this.preActionMode = actionMode;

            }
        }
    });


    module.exports = new me();

});