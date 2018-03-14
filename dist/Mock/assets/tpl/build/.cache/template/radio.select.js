/*TMODJS:{"version":2,"md5":"d77223c30878b6b9e93dc82d9cfd327f"}*/
template('template/radio.select',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,field=$data.field,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,valueField=$data.valueField,nameField=$data.nameField,$out='';$out+='<li> <label> <input type="radio" name="';
$out+=$escape(field);
$out+='" checked="checked" value=""> <span class="radio-text">所有</span> </label> </li> ';
$each(data,function(item,$index){
$out+=' <li> <label> <input type="radio" name="';
$out+=$escape(field);
$out+='" ';
$out+=$escape(item.checke ? "checke" : "");
$out+=' value="';
$out+=$escape(valueField ? item[valueField] : item.value);
$out+='"> <span class="radio-text">';
$out+=$escape(nameField ? item[nameField] : item.name);
$out+='</span> </label> </li> ';
});
$out+=' ';
return new String($out);
});