/*TMODJS:{"version":17,"md5":"3e6071e159d81a2c6152751cc6b58b31"}*/
template('template/Tag.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,tag=$data.tag,$each=$utils.$each,ngpTagEnum=$data.ngpTagEnum,tagE=$data.tagE,$index=$data.$index,ngpTagCode=$data.ngpTagCode,selItem=$data.selItem,remark=$data.remark,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>分类名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="tag" value="';
$out+=$escape(tag);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >关联NGP分类:</label> <div class="col-sm-5"> <select name="ngpTagCode[]" class="form-select" multiple> ';
$each(ngpTagEnum,function(tagE,$index){
$out+=' <option value="';
$out+=$escape(tagE);
$out+='"';
$each(ngpTagCode,function(selItem,$index){
$out+=$escape(tagE == selItem ? "selected" : "");
});
$out+='>';
$out+=$escape(tagE);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >备注</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="remark">';
$out+=$escape(remark);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});