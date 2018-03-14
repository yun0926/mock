/*TMODJS:{"version":2,"md5":"b40718de962465cb6f915ae84a1a8449"}*/
template('template/checkbox.select',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,$escape=$utils.$escape,field=$data.field,valueField=$data.valueField,nameField=$data.nameField,$out='';$each(data,function(item,$index){
$out+=' <li> <label> <input type="checkbox" name="';
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