define(function (require, exports, module) {
    var BaseLux = Backbone.View.extend({
        _import: {},
        tpl:"",
        tplData: {},
        //显示到界面 相当于init
        init: $.noop,
        showed: $.noop,
        initPackage: function () {
            $.extend(this._import, {
                "_template": require('base.template')
            });
        },
        getObj: function(key,config,bool){
            var k = key,c = config;
            if(/^_/.test(k))
                return this._import[k];
            if(/\$\./.test(k))
                return null;
            if(!this[k] || bool === true){
                this[k] = new this._import[k](c||{});
            }
            return this[k];
        },
        getRenderTpl: function () {
            if ($.isFunction(this.tplData)) {
                this.tplData = this.tplData.call(this);
            }
            var tpl = this.getObj("_template");
            return tpl(this.tpl,this.tplData);
        },
        apply: function (option) {
            $.extend(this, option);
            return this;
        },
        close: function () {
            this.off();
            this.undelegateEvents();
            this.remove();
        },
        render:function($el){
            this.$el.html(this.getRenderTpl());
            if ($el instanceof $) {
                this.$el.appendTo($el);
            }
            this.init();
            this.showed();
            this.undelegateEvents();
            this.delegateEvents();
            return this;
        },
        initialize: function (option) {
            this.tplData = {};
            $.extend(this,option);
            this.initPackage();
        }
    });
    module.exports = BaseLux;
});