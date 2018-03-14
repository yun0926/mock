/*TMODJS:{"version":2,"md5":"653b2cd3b9a865f1007d7543fefbc79f"}*/
template('template/Country.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,code=$data.code,name=$data.name,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>国家代码:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="code" value="';
$out+=$escape(code);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>国家名称</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="name">';
$out+=$escape(name);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});