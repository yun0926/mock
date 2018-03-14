/*TMODJS:{"version":2,"md5":"9b3981a4fed6d8b13eda3e6678739650"}*/
template('template/Pagehost.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,remark=$data.remark,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="remark" value="';
$out+=$escape(remark);
$out+='"> </div> </div> </div> </div> </form>';
return new String($out);
});