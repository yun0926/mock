/*TMODJS:{"version":2,"md5":"9e13df5d2ba6cd90c5a182886385e8df"}*/
template('template/offer.web.preview.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,remark=$data.remark,type=$data.type,cid=$data.cid,action=$data.action,tags=$data.tags,countryNames=$data.countryNames,onlineState=$data.onlineState,typeName=$data.typeName,createDate=$data.createDate,modifyDate=$data.modifyDate,author=$data.author,actionUrl=$data.actionUrl,$out='';$out+='<div class="form-horizontal offer-form"> <div id="per-detail"> <ul class="nav nav-tabs hr-nav-tabs"> <li class="active"><a href="#offer-info" role="tab" data-toggle="tab">基本信息</a></li>  </ul> <div class="staff-panel tab-content"> <div role="tabpanel" class="tab-pane fade active in" id="offer-info"> <fieldset class="pk-fieldset"> <legend class="pk-legend">基本信息</legend> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">名称：</label> <div class="col-xs-8 col-sm-3"> <p class="form-control-static">';
$out+=$escape(remark || '未设置');
$out+='</p> </div> ';
if(type <= 5){
$out+=' <label class="col-xs-4 col-sm-2 control-label">客户代码：</label> <div class="col-xs-8 col-sm-4"> <p class="form-control-static">';
$out+=$escape(cid || '未设置');
$out+='</p> </div> ';
}
$out+=' </div> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">响应方式：</label> <div class="col-xs-8 col-sm-4"> <p class="form-control-static">';
$out+=$escape(action || '未设置');
$out+='</p> </div> </div> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">分类：</label> <div class="col-xs-8 col-sm-3"> <p class="form-control-static">';
$out+=$escape(tags || '未设置');
$out+='</p> </div> </div> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">国家：</label> <div class="col-xs-8 col-sm-3"> <p class="form-control-static">';
$out+=$escape(countryNames || '未设置');
$out+='</p> </div> <label class="col-xs-4 col-sm-2 control-label">上下线状态：</label> <div class="col-xs-8 col-sm-4"> <p class="form-control-static">';
$out+=$escape(onlineState ? '下线' : '上线');
$out+='</p> </div> </div> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">类型：</label> <div class="col-xs-8 col-sm-3"> <p class="form-control-static">';
$out+=$escape(typeName || '未设置');
$out+='</p> </div> </div> <div class="form-group"> <label class="col-xs-4 col-sm-2 control-label">创建时间：</label> <div class="col-xs-8 col-sm-3"> <p class="form-control-static">';
$out+=$escape(createDate || '未设置');
$out+='</p> </div> <label class="col-xs-4 col-sm-2 control-label">修改时间：</label> <div class="col-xs-8 col-sm-4"> <p class="form-control-static">';
$out+=$escape(modifyDate || '未设置');
$out+='</p> </div> </div> <div class="form-group"> <label class="col-xs-2 control-label">备注：</label> <div class="col-xs-10"> <p class="form-control-static">';
$out+=$escape(author || '未设置');
$out+='</p> </div> </div> </fieldset> <fieldset class="pk-fieldset"> <legend class="pk-legend">参数</legend> <div class="form-group"> <label class="col-xs-2 control-label">URL地址：</label> <div class="col-xs-10"> <p class="form-control-static">';
$out+=$escape(actionUrl || '未设置');
$out+='</p> </div> </div> </fieldset> </div> </div> </div> </div>';
return new String($out);
});