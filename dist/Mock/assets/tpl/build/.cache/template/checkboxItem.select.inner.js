/*TMODJS:{"version":9,"md5":"33b69a891afce4a9343984f3cd29e8bf"}*/
template('template/checkboxItem.select.inner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,field=$data.field,item=$data.item,valueField=$data.valueField,nameField=$data.nameField,$out='';$out+='<label> <input type="checkbox"name="';
$out+=$escape(field);
$out+='" ';
$out+=$escape(item.checke ? "checke" : "");
$out+=' value="';
$out+=$escape(valueField ? item[valueField] : item.value);
$out+='"> <span class="radio-text">';
$out+=$escape(nameField ? item[nameField] : item.name);
$out+='</span> </label> ';
return new String($out);
});