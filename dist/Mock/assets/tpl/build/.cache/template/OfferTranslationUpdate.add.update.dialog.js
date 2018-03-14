/*TMODJS:{"version":2,"md5":"76c792eb69a36e8792cc11038f17c01a"}*/
template('template/OfferTranslationUpdate.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,offerId=$data.offerId,translationId=$data.translationId,$each=$utils.$each,LanguageEnum=$data.LanguageEnum,item=$data.item,$index=$data.$index,language=$data.language,type=$data.type,name=$data.name,$out='';$out+='<form class="form-horizontal dialog-form" role="form" id="add_parameter_imei_form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="offerId" value="';
$out+=$escape(offerId);
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
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>类型:</label> <div class="col-sm-5"> <select name="type" class="form-select"> <option value="1" ';
$out+=$escape(type == 1 ? "selected" : "");
$out+='>名称</option> <option value="2" ';
$out+=$escape(type == 2 ? "selected" : "");
$out+='>描述</option> <option value="3" ';
$out+=$escape(type == 3 ? "selected" : "");
$out+='>详情描述</option> </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>翻译:</label> <div class="col-sm-5"> <textarea class="form-control" rows="5" name="name">';
$out+=$escape(name);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});