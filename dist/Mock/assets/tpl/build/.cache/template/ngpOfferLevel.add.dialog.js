/*TMODJS:{"version":2,"md5":"814b82f95eb3dfea9f2eff79c3a1c69b"}*/
template('template/ngpOfferLevel.add.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,selectType=$data.selectType,$each=$utils.$each,selectData=$data.selectData,select=$data.select,$index=$data.$index,countryEnum=$data.countryEnum,countryItem=$data.countryItem,selectCountry=$data.selectCountry,selCountryItem=$data.selCountryItem,tagsEnum=$data.tagsEnum,tagItem=$data.tagItem,selectTags=$data.selectTags,selTagItem=$data.selTagItem,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="resourceType" value="';
$out+=$escape(selectType);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>已选择offer:</label> <div class="col-sm-5"> <select name="offersId[]" class="form-select" multiple="multiple" rows="10"> ';
$each(selectData,function(select,$index){
$out+=' <option value="';
$out+=$escape(select.id);
$out+='" selected>';
$out+=$escape(select.remark);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>国家代码:</label> <div class="col-sm-5"> <select name="countryCode[]" class="form-select" multiple="multiple"> ';
$each(countryEnum,function(countryItem,$index){
$out+=' ';
$each(selectCountry,function(selCountryItem,$index){
$out+=' ';
if(selCountryItem == countryItem.code ){
$out+=' <option value="';
$out+=$escape(countryItem.code);
$out+='" selected="selected" >';
$out+=$escape(countryItem.name);
$out+='</option> ';
}
$out+=' ';
});
$out+=' ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>分类:</label> <div class="col-sm-5"> <select name="tag[]" class="form-select" multiple="multiple"> ';
$each(tagsEnum,function(tagItem,$index){
$out+=' ';
$each(selectTags,function(selTagItem,$index){
$out+=' ';
if(selTagItem == tagItem.name ){
$out+=' <option value="';
$out+=$escape(tagItem.name);
$out+='" selected="selected" >';
$out+=$escape(tagItem.name);
$out+='</option> ';
}
$out+=' ';
});
$out+=' ';
});
$out+=' </select> </div> </div> </div> </div> </form>';
return new String($out);
});