/*TMODJS:{"version":7,"md5":"c832912bda62a58b27bd718f3e77311c"}*/
template('template/checkbox.select.inner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,$escape=$utils.$escape,field=$data.field,valueField=$data.valueField,nameField=$data.nameField,$out='';$each(data,function(item,$index){
$out+=' <label> <input type="checkbox"name="';
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