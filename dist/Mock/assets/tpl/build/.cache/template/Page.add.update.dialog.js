/*TMODJS:{"version":4,"md5":"b998b7e74ee52d04b68564ac4e499126"}*/
template('template/Page.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,remark=$data.remark,$each=$utils.$each,tagsEnum=$data.tagsEnum,tagItem=$data.tagItem,$index=$data.$index,tag=$data.tag,customerEnum=$data.customerEnum,customer=$data.customer,cidsArray=$data.cidsArray,cidItem=$data.cidItem,style=$data.style,preload=$data.preload,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="remark" value="';
$out+=$escape(remark);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>分类:</label> <div class="col-sm-5"> <select name="tag" class="form-select"> ';
$each(tagsEnum,function(tagItem,$index){
$out+=' <option value="';
$out+=$escape(tagItem.name);
$out+='" ';
$out+=$escape(tagItem.name == tag ? "selected" : "");
$out+=' >';
$out+=$escape(tagItem.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">客户代码:</label> <div class="col-sm-5"> <select name="cid[]" class="form-select" multiple> ';
$each(customerEnum,function(customer,$index){
$out+=' <option value="';
$out+=$escape(customer.cid);
$out+='" ';
$each(cidsArray,function(cidItem,$index){
$out+=$escape(customer.cid == cidItem ? "selected" : "");
});
$out+='>';
$out+=$escape(customer.cid);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>显示风格:</label> <div class="col-sm-5"> <select name="style" class="form-select"> <option selected="selected"></option> <option value="0" ';
$out+=$escape(style == 0 ? "selected" : "");
$out+=' >长条的page</option> <option value="1" ';
$out+=$escape(style == 1 ? "selected" : "");
$out+=' >宫格型的page</option> <option value="2" ';
$out+=$escape(style == 2 ? "selected" : "");
$out+=' >整页的样式</option> <option value="3" ';
$out+=$escape(style == 3 ? "selected" : "");
$out+=' >WebView</option> </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">是否预加载:</label> <div class="col-sm-5"> <select name="preload" class="form-select"> <option selected="selected"></option> <option value="true" ';
$out+=$escape(preload == true ? "selected" : "");
$out+=' >是</option> <option value="false" ';
$out+=$escape(preload == false ? "selected" : "");
$out+=' >否</option> </select> </div> </div> </div> </div> </form>';
return new String($out);
});