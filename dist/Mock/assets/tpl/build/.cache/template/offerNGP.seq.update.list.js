/*TMODJS:{"version":19,"md5":"a1ffaa77c629d9d87ad1b55f7356dd1a"}*/
template('template/offerNGP.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,$out='';$each(data,function(dataItem,on){
$out+=' <li class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> <span class="seq-tb" style="width:234px;" title="';
$out+=$escape(dataItem.title);
$out+='"> ';
$out+=$escape(dataItem.title);
$out+='</span> <span class="seq-tb" style="width:252px;" title="';
$out+=$escape(dataItem.countryName);
$out+='"> ';
$out+=$escape(dataItem.countryName);
$out+='</span> <span class="seq-tb" style="width:100px;" title="';
$out+=$escape(dataItem.countryName);
$out+='"> ';
$out+=$escape(dataItem.category);
$out+='</span> <span class="seq-tb" style="width:97px;" title="';
$out+=$escape(dataItem.dpsName);
$out+='">';
$out+=$escape(dataItem.dpsName);
$out+='</span> <span class="seq-tb seq" style="width:80px;" title="';
$out+=$escape(dataItem.weight);
$out+='">';
$out+=$escape(dataItem.weight);
$out+='</span> </li> ';
});
$out+=' ';
return new String($out);
});