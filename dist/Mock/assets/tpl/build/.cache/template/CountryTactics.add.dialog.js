/*TMODJS:{"version":2,"md5":"1055e56fd4b0c7b916ae1882071f5808"}*/
template('template/CountryTactics.add.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,$each=$utils.$each,codeEnum=$data.codeEnum,country=$data.country,$index=$data.$index,countryCode=$data.countryCode,remarkEnum=$data.remarkEnum,remark=$data.remark,pagehostId=$data.pagehostId,state=$data.state,$out='';$out+='<form class="form-horizontal dialog-form" role="form" id="add_parameter_imei_form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>国家:</label> <div class="col-sm-5"> <select name="countryCode" class="form-select"> ';
$each(codeEnum,function(country,$index){
$out+=' <option value="';
$out+=$escape(country.code);
$out+='" ';
$out+=$escape(countryCode == country.code ? "selected" : "");
$out+=' >';
$out+=$escape(country.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>关联页面:</label> <div class="col-sm-5"> <select name="pagehostId" class="form-select"> ';
$each(remarkEnum,function(remark,$index){
$out+=' <option value="';
$out+=$escape(remark.id);
$out+='" ';
$out+=$escape(pagehostId == remark.id ? "selected" : "");
$out+='>';
$out+=$escape(remark.remark);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">是否默认</label> <div class="col-sm-9"> <select name="state" class="form-select"> <option value="0" ';
$out+=$escape(state ? "selected" : "");
$out+='>否</option> <option value="1" ';
$out+=$escape(state ? "selected" : "");
$out+='>是</option> </select> </div> </div> </div> </div> </form>';
return new String($out);
});