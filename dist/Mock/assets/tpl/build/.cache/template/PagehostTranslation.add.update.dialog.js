/*TMODJS:{"version":2,"md5":"e079e7b9011bdf0c2c6baffa7c240cb7"}*/
template('template/PagehostTranslation.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,pagehostId=$data.pagehostId,translationId=$data.translationId,$each=$utils.$each,LanguageEnum=$data.LanguageEnum,item=$data.item,$index=$data.$index,language=$data.language,name=$data.name,$out='';$out+='<form class="form-horizontal dialog-form" role="form" id="add_parameter_imei_form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="pagehostId" value="';
$out+=$escape(pagehostId);
$out+='"> <input type="hidden" name="translationId" value="';
$out+=$escape(translationId);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>语言:</label> <div class="col-sm-5"> <select name="language" class="form-select"> ';
$each(LanguageEnum,function(item,$index){
$out+=' <option value="';
$out+=$escape(item.language);
$out+='" ';
$out+=$escape(language == item.language ? "selected" : "");
$out+=' >';
$out+=$escape(item.language);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>页面名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> </div> </form>';
return new String($out);
});