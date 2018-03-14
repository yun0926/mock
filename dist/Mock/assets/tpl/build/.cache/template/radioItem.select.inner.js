/*TMODJS:{"version":3,"md5":"536b4b18d7b6af4c7349e00f5b182968"}*/
template('template/radioItem.select.inner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,field=$data.field,item=$data.item,valueField=$data.valueField,nameField=$data.nameField,$out='';$out+='<label> <input type="radio" name="';
$out+=$escape(field);
$out+='" ';
$out+=$escape(item.checke ? "checke" : "");
$out+=' value="';
$out+=$escape(valueField ? item[valueField] : item.value);
$out+='"> <span class="radio-text">';
$out+=$escape(nameField ? item[nameField] : item.name);
$out+='</span> </label>';
return new String($out);
});