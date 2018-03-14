/**
 * Created by MW on 2017/1/20.
 */
define(function (require, exports, module) {
    window.jQuery = window.$ = require("jquery");
    window.Backbone = require("backbone");
    require("bootstrap");
    require("bootstrap.hover.dropdown");
    require("jquery.mCustomScrollbar");
    require("bootstrap-dialog");
    require("template");
    require("jquery.serializejson");
    require("jsoneditor");

    var BaseLux = require("Core/baseLux");
    var me = BaseLux.extend({
        className: "mock-content",
        tpl:"template/base.guide",
        editState:false,
        events: function(){
            return {
                "click #url-search-content .url-list":"bindListClick",
                "submit #url-search-from":"searchFromSubmit",
                "submit #url-config-from":"urlConfigFromSubmit",
                "change .isover":"onchange",
            }
        },

        bindListClick:function(e){

            $("#url-search-content .url-list").removeClass("select");
            $(e.currentTarget).addClass("select");
            var key = $(e.currentTarget)[0].id;
            var data = this.urlData[key];

            this.renderTopForm(data);
            this.unableBack();



        },
        unableBack:function () {
            if(this.backData){
                $("#revoked").removeClass("disabled")
            }else {
                $("#revoked").addClass("disabled")
            }
        },
        onchange:function () {
            var data = $("#url-config-from").serializeJSON();
            if(data.isover){
                $("#isover-text").text("是否覆盖:是");
            }else {
                $("#isover-text").text("是否覆盖:否");
            }
        },
        urlConfigFromSubmit:function (e) {

            var _this = this;

            var data = $(e.currentTarget).serializeJSON();


            try {
                data.ctx = JSON.stringify(this.jsonEdit.get() || null);
            }catch (e){
                BootstrapDialog.alert("json错误:"+e);
                return false;
            }

            $.ajax({
                data:data,
                url:window.submitMockUrl,
                method:"post",
                success:function (json) {
                    if(typeof json == "string"){
                        json = JSON.parse(json);
                    }
                    if(json.msg && json.msg.length > 0){
                        BootstrapDialog.alert(json.msg);
                    }else {
                        _this.renderRight();
                        BootstrapDialog.alert("提交成功");
                    }
                }

            });



            return false;
        },
        searchFromSubmit:function(e){
            var data = $(e.currentTarget).serializeJSON();
            this.renderRight(data.key || null);
            return false;
        },
        renderRight:function (searchKey) {
            var _this = this;

            var tpl = this.getObj("_template");
            var htmlArray = [];
            $.ajax({
                url:window.getMockUrlList,
                dataType:"json",
                method:"get",
                success:function (json) {
                    drawHtml(json);
                    _this.$("#url-search-content").html(htmlArray.slice(""));
                }
            });

            function drawHtml(json) {
                for (var key in json){
                    var  node = json[key];
                    node.name = key;
                    if(searchKey){
                       if( key.indexOf(searchKey) >= 0){
                           htmlArray.push(tpl("template/url.list",node))
                       }
                    }else {
                        htmlArray.push(tpl("template/url.list",node))
                    }

                }

                _this.urlData = json;
            }


        },
        renderTopForm:function (data) {
            var defaultData = {
                url:(data && data.name)|| null,
                isover:null,
                ctx:(data && data.data)|| null,
                sleep:null,
                msg:null,
            };
            var data = data || {};
            var parameter = $.extend({},defaultData,data);
            var html = this.getObj("_template")("template/base.guide.from",parameter);
            $("#top-form").html(html);
            this.jsonEdit.set(parameter.ctx || {});
            this.$('[data-hover="dropdown"]').dropdownHover()
        },
        showed:function () {

            var container = $("#json-editor")[0];
            var options = {
                modes: [ 'code','tree','text', 'form', 'view'],
                mode: 'code',
                history:true,
                ace: ace
            };


            this.jsonEdit = new JSONEditor(container, options);


            this.renderRight();

            this.renderTopForm();





            this.$(".url-search-content").mCustomScrollbar();


        }
    });
    module.exports = new me();


});