/*TMODJS:{"version":2,"md5":"a19ad491f0f9697cec2fed81582f26f8"}*/
template('template/adsense.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,name=$data.name,url=$data.url,remark=$data.remark,code=$data.code,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">下载地址:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="url" value="';
$out+=$escape(url);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">备注:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="remark" value="';
$out+=$escape(remark);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">源码</label> <div class="col-sm-9"> <textarea class="form-control" rows="20" name="code">';
$out+=$escape(code);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});