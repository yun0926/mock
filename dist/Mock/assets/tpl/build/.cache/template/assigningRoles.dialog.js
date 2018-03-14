/*TMODJS:{"version":2,"md5":"2e9c1cccf8628cc240e027e279c9f6bd"}*/
template('template/assigningRoles.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,nickname=$data.nickname,$each=$utils.$each,RoleEnum=$data.RoleEnum,item=$data.item,$index=$data.$index,rid=$data.rid,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="uid" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">用户:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="nickname" value="';
$out+=$escape(nickname);
$out+='" disabled="disabled"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>角色:</label> <div class="col-sm-5"> <select name="rid" class="form-select"> <option value=""></option> ';
$each(RoleEnum,function(item,$index){
$out+=' <option value="';
$out+=$escape(item.id);
$out+='" ';
$out+=$escape(rid == item.id ? "selected" :"");
$out+='>';
$out+=$escape(item.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> </div> </form>';
return new String($out);
});