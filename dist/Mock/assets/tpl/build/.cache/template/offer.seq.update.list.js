/*TMODJS:{"version":4,"md5":"d185ed0fbc2c0f3f5995ba1db51d6596"}*/
template('template/offer.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,offerImgTypesEnum=$helpers.offerImgTypesEnum,$out='';$each(data,function(dataItem,on){
$out+=' <li class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> <span class="seq-tb" title="';
$out+=$escape(dataItem.remark);
$out+='"> ';
$out+=$escape(dataItem.remark);
$out+='</span> <span class="seq-tb" title="';
$out+=$escape(offerImgTypesEnum(dataItem));
$out+='"> ';
$out+=$escape(offerImgTypesEnum(dataItem));
$out+='</span> <span class="seq-tb" style="width:200px;" title="';
$out+=$escape(dataItem.countryNames);
$out+='"> ';
$out+=$escape(dataItem.countryNames);
$out+='</span> <span class="seq-tb" title="';
$out+=$escape(dataItem.tags);
$out+='"> ';
$out+=$escape(dataItem.tags);
$out+='</span> <span class="seq-tb seq" style="width:107px;" title="';
$out+=$escape(dataItem.seq);
$out+='">';
$out+=$escape(dataItem.seq);
$out+='</span> </li> ';
});
$out+=' ';
return new String($out);
});