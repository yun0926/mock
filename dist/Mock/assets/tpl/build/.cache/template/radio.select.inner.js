/*TMODJS:{"version":10,"md5":"11ea5dd2a81a250b355395b9942eae54"}*/
template('template/radio.select.inner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,field=$data.field,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,valueField=$data.valueField,nameField=$data.nameField,$out='';$out+='<label> <input type="radio" name="';
$out+=$escape(field);
$out+='" checked="checked" value=""> <span class="radio-text">所有</span> </label> ';
$each(data,function(item,$index){
$out+=' <label> <input type="radio" name="';
$out+=$escape(field);
$out+='" ';
$out+=$escape(item.checke ? "checke" : "");
$out+=' value="';
$out+=$escape(valueField ? item[valueField] : item.value);
$out+='"> <span class="radio-text">';
$out+=$escape(nameField ? item[nameField] : item.name);
$out+='</span> </label> ';
});
$out+=' ';
return new String($out);
});