/*TMODJS:{"version":21,"md5":"224e26e925e9d60b539bfc01460046ac"}*/
template('template/addCheckbox.select.inner',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,item=$data.item,$index=$data.$index,$escape=$utils.$escape,jsonToString=$helpers.jsonToString,type=$data.type,nameField=$data.nameField,$out='';$each(data,function(item,$index){
$out+=' <label> <span class="c-search-add-check" data ="';
$out+=$escape(jsonToString(item));
$out+='" type="';
$out+=$escape(type);
$out+='"> ';
$out+=$escape(item[nameField]);
$out+=' </span> </label> ';
});
$out+=' ';
return new String($out);
});