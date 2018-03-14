/*TMODJS:{"version":4,"md5":"35ddcbb39b2f7a33321605aca8881b82"}*/
template('template/CustomerStrategy.add.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,$each=$utils.$each,customerEnum=$data.customerEnum,customer=$data.customer,$index=$data.$index,cid=$data.cid,codeEnum=$data.codeEnum,country=$data.country,countryCode=$data.countryCode,remarkEnum=$data.remarkEnum,remark=$data.remark,pagehostId=$data.pagehostId,$out='';$out+='<form class="form-horizontal dialog-form" role="form" id="add_parameter_imei_form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>客户:</label> <div class="col-sm-5"> <select name="cid" class="form-select"> ';
$each(customerEnum,function(customer,$index){
$out+=' <option value="';
$out+=$escape(customer.value);
$out+='" ';
$out+=$escape(cid == customer.value ? "selected" : "");
$out+=' >';
$out+=$escape(customer.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>国家:</label> <div class="col-sm-5"> <select name="countryCode" class="form-select"> ';
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
$out+=' </select> </div> </div> </div>  </div> </form>';
return new String($out);
});