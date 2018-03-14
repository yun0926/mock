/*TMODJS:{"version":2,"md5":"6d6d018d3ac15ad93a980d109222fa0a"}*/
template('template/template.preview.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,name=$data.name,template=$data.template,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>模板</label> <div class="col-sm-9"> <textarea class="form-control" rows="25" name="template">';
$out+=$escape(template);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});