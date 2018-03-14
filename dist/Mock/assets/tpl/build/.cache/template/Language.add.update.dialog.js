/*TMODJS:{"version":2,"md5":"b432f8ef6ddb51308f89c934bb69438f"}*/
template('template/Language.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,language=$data.language,remark=$data.remark,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>code:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="language" value="';
$out+=$escape(language);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="remark">';
$out+=$escape(remark);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});