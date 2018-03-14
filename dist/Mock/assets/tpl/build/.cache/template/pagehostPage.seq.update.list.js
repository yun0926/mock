/*TMODJS:{"version":2,"md5":"f107ec9145ea119b798f847c5f3c3735"}*/
template('template/pagehostPage.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,$out='';$each(data,function(dataItem,on){
$out+=' <li class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> <span class="seq-tb"> ';
$out+=$escape(dataItem.id);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.pagehostRemark);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.pageTag);
$out+=' </span> </li> ';
});
$out+=' ';
return new String($out);
});