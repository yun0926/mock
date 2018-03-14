/*TMODJS:{"version":1,"md5":"968f28ec1e6e35d8fc8f04fc66272d66"}*/
template('template/ngpOffer.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,$out='';$each(data,function(dataItem,on){
$out+=' <li class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> ';
$out+=$escape(dataItem.title);
$out+=' ';
$out+=$escape(dataItem.weight);
$out+=' </li> ';
});
$out+=' ';
return new String($out);
});