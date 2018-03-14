/*TMODJS:{"version":2,"md5":"5e478160991138f6f3a009863137afdc"}*/
template('template/group.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,name=$data.name,icon=$data.icon,seq=$data.seq,description=$data.description,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">icon:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="icon" value="';
$out+=$escape(icon);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">级别:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="seq" value="';
$out+=$escape(seq);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">角色描述:</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="description">';
$out+=$escape(description);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});