/*TMODJS:{"version":2,"md5":"aea2cb92e030e6071f942e96e8878110"}*/
template('template/batchApp.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,source=$data.source,$each=$utils.$each,languageEnum=$data.languageEnum,languageItem=$data.languageItem,$index=$data.$index,name=$data.name,templateEnum=$data.templateEnum,templateItem=$data.templateItem,template=$data.template,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>应用包名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="package" value="';
$out+=$escape(source);
$out+='" disabled="disabled"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>选择应用:</label> <div class="col-sm-9"> <select id="app_offer" name="offerId"></select> <div class="offerIdError"></div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>语言:</label> <div class="col-sm-5"> <select name="languages[]" id="languageId" class="form-select" multiple>  ';
$each(languageEnum,function(languageItem,$index){
$out+=' <option value="';
$out+=$escape(languageItem.language);
$out+='">';
$out+=$escape(languageItem.remark);
$out+='</option> ';
});
$out+=' </select> </div> <div class="col-sm-5"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>备注:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>选择模板:</label> <div class="col-sm-5"> <select name="templateId" class="form-select"> ';
$each(templateEnum,function(templateItem,$index){
$out+=' <option value="';
$out+=$escape(templateItem.id);
$out+='" ';
$out+=$escape(template && template.id == templateItem ? "selected" : "");
$out+=' >';
$out+=$escape(templateItem.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">广告资源:</label> <div class="col-sm-9"> <select id="advert_offer" name="advertId"></select> </div> </div> </div>  </div> </div> </form>';
return new String($out);
});