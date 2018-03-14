/*TMODJS:{"version":19,"md5":"0b9ae88fc9f2cd069546ab56474735db"}*/
template('template/url.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,at=$data.at,$out='';$out+='<div class="url-list" href="';
$out+=$escape(name);
$out+='" id="';
$out+=$escape(name);
$out+='" data-toggle="tooltip" data-placement="top" title="Tooltip on top"> <div class="url"> <a href="';
$out+=$escape(name);
$out+='" target="_blank"> <h4>';
$out+=$escape(name);
$out+='</h4> </a> </div> <div class="create-data">';
$out+=$escape(at);
$out+='</div> </div> ';
return new String($out);
});