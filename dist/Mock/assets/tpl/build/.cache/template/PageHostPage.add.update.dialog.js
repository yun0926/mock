/*TMODJS:{"version":2,"md5":"fbe05465bc78d1d0668fae8d4083f3bc"}*/
template('template/PageHostPage.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,pagehostId=$data.pagehostId,$each=$utils.$each,pageEnum=$data.pageEnum,page=$data.page,$index=$data.$index,pageId=$data.pageId,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="pagehostId" value="';
$out+=$escape(pagehostId);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>关联页面:</label> <div class="col-sm-5"> <select name="pageId" class="form-select"> <option selected="selected"></option> ';
$each(pageEnum,function(page,$index){
$out+=' <option value="';
$out+=$escape(page.id);
$out+='" ';
$out+=$escape(pageId == page.id ? "selected" : "");
$out+=' >';
$out+=$escape(page.tag);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div>  </div> </form>';
return new String($out);
});