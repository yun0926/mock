/**
 * Created by Administrator on 2016/5/9.
 */
define(function(require, exports, module) {
    var BaseLux = require("Core/baseLux");
    function GetRandomNum(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
  //  var c = GetRandomNum(100,200);
    var me = BaseLux.extend({
        actionMode:"",
        actionMethod:"",
        parameter:{},
        ListPageView:null,
        LeftMenuView:null,
        tpl:"template/guide",
        className:"page-container",
        dtd:null,
        guideLeftMenu:function(){
            var self = this,dtd  = $.Deferred();
            require.async("Module/"+self.actionMode+"/left.menu",function(obj){
                if(obj)self.LeftMenuView =  new obj({
                    parameter:self.parameter,
                    actionMethod:self.actionMethod,
                    actionMode:self.actionMode,
                    action:self.action
                });
                dtd.resolve();
            });
            return dtd;
        },
        guideListPage:function(){
            var self = this,dtd  = $.Deferred();
            if(this.actionMethod == "welcome"){
                require.async(['Module',"/component/welcome"].join('/'),function(obj){
                    dtd.resolveWith(self,[obj]);
                });
            }else{
                require.async(['Module',self.actionMode+"/"+self.actionMethod].join('/'),function(obj){
                    dtd.resolveWith(self,[obj]);
                });
            }
            return dtd;
        },
        renderListPage:function(){
            if(this.ListPageView){
                this.ListPageView.close();
                this.ListPageView = null;
            }
            if(this.dtd && this.dtd.reject){
                this.dtd.reject();
            }
            this.dtd =  this.guideListPage();
            if(this.actionMethod.length > 0){
                $.when(this.dtd).done(function(obj){
                    if(obj)this.ListPageView =  new obj({
                        parameter:this.parameter,
                        actionMethod:this.actionMethod,
                        actionMode:this.actionMode,
                        action:this.action
                    });
                    this.ListPageView && this.ListPageView.render(this.$(".page-container-warp"));
                }).fail(function(){
                    console.log("加载页面引导页出错");
                });
            }
        },
        renderMenuView:function(){
            if(this.actionMode.length > 0){
                $.when(this.guideLeftMenu()).done($.proxy(function(){
                    this.LeftMenuView && this.LeftMenuView.render(this.$(".page-container-warp"));
                },this)).fail(function(){
                    alert("加载菜单引导页出错");
                });
            }
        },
        refreshCache:function(){
            var self = this;
            return $.ajax({
                method:"get",
                mask:true,
                url:"setting/cache",
                success:function(res){
                    BootstrapDialog.alert(res.message || "刷新缓存成功");
                }
            });
        },
        exit:function(){
            var self = this;
            return $.ajax({
                method:"get",
                url:"setting/exit",
                success:function(res){
                    window.location.href = "http://"+window.location.host+window.root+"login";
                }
            });
        },
        showed:function(){
            var self = this;
            this.$("#guide-page").mCustomScrollbar();
            this.$('[data-hover="dropdown"]').dropdownHover();
            this.$("#refreshCache").bind("click",function(e){
                self.refreshCache();
            });
            this.$("#exit").bind("click",function(e){
                self.exit();
            });
        },
        loadRootMenu:function(){
            var self = this;
            $.ajax({
                url:"user/queryUserAndResourceChild",
                success: function (res) {
                    self.tplData.roles =  res.data;
                    self.loadRootMenuCallBack();
                }
            });
        },
        loadRootMenuCallBack:function(){
            this.render($(document.body));
            Backbone.history.start();
        },
        initialize: function(option){
            me.__super__.initialize.apply(this,arguments);
            this.loadRootMenu();
        }
    });
    module.exports = me;
});
