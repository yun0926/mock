/*TMODJS:{"version":5,"md5":"a8edf8e23af1d0160da81c7b5cabe19b"}*/
template('template/offerLevel.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,$out='';$each(data,function(dataItem,on){
$out+=' <li class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> <span class="seq-tb"> ';
$out+=$escape(dataItem.offerId);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.offerName);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.countryName);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.tag);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.resourceType === 1  &&  "客户资源-直下资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 2  &&  "客户资源-跳转资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 3  &&  "客户资源-H5资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 4  &&  "客户资源-WEB资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 5  &&  "客户资源-PAGE资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 6  &&  "Bingcoo-直下资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 7  &&  "Bingcoo-跳转资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 8  &&  "Bingcoo-H5资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 9  &&  "Bingcoo-WEB资源");
$out+=' ';
$out+=$escape(dataItem.resourceType === 10  &&  "Bingcoo-PAGE资源");
$out+=' </span> </li> ';
});
$out+=' ';
return new String($out);
});