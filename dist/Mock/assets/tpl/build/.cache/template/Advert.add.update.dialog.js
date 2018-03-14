/*TMODJS:{"version":2,"md5":"8d54c2bff667eadc982e2d7ce6e0dd9b"}*/
template('template/Advert.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,type=$data.type,source=$data.source,remark=$data.remark,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="type" value="';
$out+=$escape(type);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>配置参数:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="source" value="';
$out+=$escape(source);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>备注</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="remark">';
$out+=$escape(remark);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});