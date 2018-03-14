/*TMODJS:{"version":9,"md5":"c1c83e2b398f96ff66c50b0d4570ec03"}*/
template('template/urlList',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,at=$data.at,name=$data.name,$out='';$out+=' <div class="url-list" id="';
$out+=$escape(at);
$out+='"> <div class="url"> <h4>';
$out+=$escape(name);
$out+='</h4> </div> <div class="create-data">';
$out+=$escape(at);
$out+='</div> </div> ';
return new String($out);
});