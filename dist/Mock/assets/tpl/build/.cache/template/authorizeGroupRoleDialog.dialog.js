/*TMODJS:{"version":2,"md5":"6aaada662273dd424e34b3bbe8e3355e"}*/
template('template/authorizeGroupRoleDialog.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="duallistbox ztree" id="dialog_tree"></div> </div> </div> </form>';
return new String($out);
});