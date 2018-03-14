/*TMODJS:{"version":318,"md5":"708352655e2c43a4ff01436573ea9768"}*/
template('template/app.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,offer=$data.offer,$each=$utils.$each,languageEnum=$data.languageEnum,languageItem=$data.languageItem,$index=$data.$index,language=$data.language,name=$data.name,templateEnum=$data.templateEnum,templateItem=$data.templateItem,templateId=$data.templateId,appOffer=$data.appOffer,appAdSense=$data.appAdSense,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>应用包名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="package" value="';
$out+=$escape(offer && offer.packageName);
$out+='" disabled="disabled"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>选择应用:</label> <div class="col-sm-9"> <select id="app_offer" name="offerId"> ';
if(offer){
$out+=' <option value="';
$out+=$escape(offer.id);
$out+='" selected>';
$out+=$escape(offer.remark);
$out+='</option> ';
}
$out+=' </select> <div class="offerIdError"></div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>语言:</label> <div class="col-sm-5"> <select name="language" id="languageId" class="form-select"> ';
$each(languageEnum,function(languageItem,$index){
$out+=' <option value="';
$out+=$escape(languageItem.language);
$out+='" ';
$out+=$escape(languageItem.language == language && 'selected');
$out+=' >';
$out+=$escape(languageItem.remark);
$out+='</option> ';
});
$out+=' </select> </div> <div class="col-sm-5"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>备注:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>模板:</label> <div class="col-sm-5"> <select name="templateId" class="form-select"> <option></option> ';
$each(templateEnum,function(templateItem,$index){
$out+=' <option value="';
$out+=$escape(templateItem.id);
$out+='" ';
$out+=$escape(templateId == templateItem.id ? "selected" : "");
$out+=' >';
$out+=$escape(templateItem.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <!-- <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label">广告资源:</label> <div class="col-sm-1"> <div class="widget-buttons"> <label> ';
if((!(appOffer && appOffer[0] && appOffer[0].offer)) &&  (!(appOffer && appOffer[0] && appOffer[0].offer))){
$out+=' <input class="checkbox-slider slider-icon colored-success only-offer" name="offerCheck" value="1" checked="checked" type="radio" > ';
}else{
$out+=' <input class="checkbox-slider slider-icon colored-success only-offer" name="offerCheck" value="1" ';
$out+=$escape((appOffer && appOffer[0] && appOffer[0].offer) ? "checked" :"");
$out+=' type="radio" > ';
}
$out+=' <span class="text"></span> </label> </div> </div> <label class="col-sm-1 control-label">AdSense:</label> <div class="col-sm-1"> <div class="widget-buttons"> <label> <input class="checkbox-slider slider-icon colored-success only-offer" name="offerCheck" value="2" ';
$out+=$escape((appAdSense && appAdSense[0] && appAdSense[0].adsense) ? "checked" :"");
$out+=' type="radio" > <span class="text"></span> </label> </div> </div> </div> </div>--> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >广告资源:</label> <div class="col-sm-9"> <select id="advert_offer" name="advertId"> ';
if(appOffer && appOffer[0] && appOffer[0].offer){
$out+=' <option value="';
$out+=$escape(appOffer[0].offer.id);
$out+='" selected>';
$out+=$escape(appOffer[0].offer.remark);
$out+='</option> ';
}
$out+=' </select> </div> </div> </div> <!-- <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >AdSense:</label> <div class="col-sm-9"> <select id="adAdSense_offer" name="adAdSenseId"> ';
if(appAdSense && appAdSense[0] && appAdSense[0].adsense){
$out+=' <option value="';
$out+=$escape(appAdSense[0].adsense.id);
$out+='" selected>';
$out+=$escape(appAdSense[0].adsense.remark);
$out+='</option> ';
}
$out+=' </select> </div> </div> </div> --> </div> </div> </form>';
return new String($out);
});