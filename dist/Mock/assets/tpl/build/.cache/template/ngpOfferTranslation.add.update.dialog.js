/*TMODJS:{"version":2,"md5":"7b9eb8372a4abcc2a188e835d46022bd"}*/
template('template/ngpOfferTranslation.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,ngpOfferId=$data.ngpOfferId,translationId=$data.translationId,$each=$utils.$each,LanguageEnum=$data.LanguageEnum,item=$data.item,$index=$data.$index,language=$data.language,name=$data.name,description=$data.description,detail=$data.detail,$out='';$out+='<form class="form-horizontal dialog-form" role="form" id="add_parameter_imei_form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="ngpOfferId" value="';
$out+=$escape(ngpOfferId);
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
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>描述:</label> <div class="col-sm-5"> <textarea class="form-control" rows="5" name="description">';
$out+=$escape(description);
$out+='</textarea> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>详情描述:</label> <div class="col-sm-5"> <textarea class="form-control" rows="5" name="detail">';
$out+=$escape(detail);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});