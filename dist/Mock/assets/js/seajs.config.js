/**
 * Created by yk on 2016/1/27.
 */
seajs.config({
    alias: {
        "jquery": "CommonPath/jquery/jquery.js",
        "underscore":"CommonPath/underscore/underscore.js",
        "backbone": "CommonPath/backbone/backbone.js",
        "Backbone.CollectionBinder":"CommonPath/backbone/Backbone.CollectionBinder.js",
        "Backbone.ModelBinder":"CommonPath/backbone/Backbone.ModelBinder.js",
        "jquery-mousewheel": "CommonPath/mCustomScrollbar/jquery.mousewheel.js",
        "jquery.mCustomScrollbar": "CommonPath/mCustomScrollbar/jquery.mCustomScrollbar.js",
        "jquery.hash": "CommonPath/jquery.hash.js",
        "bootstrap":"CommonPath/bootstrap/bootstrap.js",
        "bootstrap.hover.dropdown":"CommonPath/bootstrap/bootstrap-hover-dropdown.js",
        "bootstrap-table":"CommonPath/bootstrapTable/bootstrap-table.js",
        "bootstrap-table-zh-CN":"CommonPath/bootstrapTable/locale/bootstrap-table-zh-CN.js",
        "bootstrap-table-editable":"CommonPath/bootstrapTable/extensions/editable/bootstrap-table-editable.js",
        "bootstrap-datetimepicker":"CommonPath/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js",
        "bootstrap-dialog":"CommonPath/bootstrap-dialog/js/bootstrap-dialog.js",
        "bootstrap-select":"CommonPath/bootstrap-select/js/bootstrap-select.js",
        "bootstrap-select-zh-CN":"CommonPath/bootstrap-select/js/i18n/defaults-zh_CN.js",
        "bootstrap-combobox":"CommonPath/bootstrap-combobox/bootstrap-combobox.js",
        "bootstrap-multiselect":"CommonPath/bootstrap-multiselect/js/bootstrap-multiselect.js",
        "select2":"CommonPath/select2/js/select2.js",
        "select2-zh-CN":"CommonPath/select2/js/i18n/zh-CN.js",
        "jquery.validate":"CommonPath/validate/jquery.validate.js",
        "template":"CommonPath/template.js",
        "base.template":"assets/tpl/build/template.js",
        "jquery.ztree":"CommonPath/jquery.ztree.js",
        "jquery.serializejson":"CommonPath/jquery.serializejson/jquery.serializejson.js",
        "dragula":"CommonPath/dragula/jsoneditor/dragula.js",
        "additional-methods":"CommonPath/validate/additional-methods.js",
        "code.prettify":"CommonPath/prettify/prettify.js",
        "jquery.cookie":"CommonPath/jquery.cookie/jquery.cookie.js",
        "jsoneditor":"CommonPath/jsoneditor/jsoneditor-minimalist.js",
    },
    vars: {
        dev: 'assets',
        app:'example'
    },
    paths: {
        "Tpl":"assets/app/js/tpl",
        "Module":"assets/app/js/module",
        "Core":"assets/app/js/core",
        "CommonPath": "{dev}/js/plugins"
    },
    map: [
        /*[ '.js', '-min.js' ],*/
        [/^(.*\.(?:css|js))(.*)$/i, '$1?t=21051021.14.02']
    ],
    charset: 'utf-8',
    timeout: 20000,
    debug: false
});