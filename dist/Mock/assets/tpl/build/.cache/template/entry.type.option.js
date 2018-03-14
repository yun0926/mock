/*TMODJS:{"version":2,"md5":"e90325c0c1f6aa9ca21d221491776266"}*/
template('template/entry.type.option',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,entryType=$data.entryType,$out='';$out+='<option value="2" ';
$out+=$escape(entryType === 2 ? "selected" : "");
$out+='>page</option> <option value="1" ';
$out+=$escape(entryType === 1 ? "selected" : "");
$out+='>pageHost</option>';
return new String($out);
});