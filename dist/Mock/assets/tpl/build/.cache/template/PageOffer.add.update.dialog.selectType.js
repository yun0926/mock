/*TMODJS:{"version":36,"md5":"6ac12b22349717f380e6ecd3f9d5ffc0"}*/
template('template/PageOffer.add.update.dialog.selectType',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,selSource=$data.selSource,$escape=$utils.$escape,type=$data.type,source=$data.source,$out='';if(selSource === 1){
$out+=' <option value="1" ';
$out+=$escape(type == 1 && source == 1 ? "selected" : "");
$out+='>客户资源-直下资源</option> <option value="2" ';
$out+=$escape(type == 2 && source == 1 ? "selected" : "");
$out+='>客户资源-跳转资源</option> <option value="3" ';
$out+=$escape(type == 3 && source == 1 ? "selected" : "");
$out+='>客户资源-H5资源</option> <option value="4" ';
$out+=$escape(type == 4 && source == 1 ? "selected" : "");
$out+='>客户资源-web资源</option> <option value="5" ';
$out+=$escape(type == 5 && source == 1 ? "selected" : "");
$out+='>客户资源-page资源</option> <option value="6" ';
$out+=$escape(type == 6 && source == 1 ? "selected" : "");
$out+='>客户资源-pagehost资源</option> ';
}
$out+=' ';
if(selSource === 2){
$out+=' <option value="1" ';
$out+=$escape(type == 1 && source == 2 ? "selected" : "");
$out+='>Bingcoo-直下资源</option> <option value="2" ';
$out+=$escape(type == 2 && source == 2 ? "selected" : "");
$out+='>Bingcoo-跳转资源</option> <option value="3" ';
$out+=$escape(type == 3 && source == 2 ? "selected" : "");
$out+='>Bingcoo-H5资源</option> <option value="4" ';
$out+=$escape(type == 4 && source == 2 ? "selected" : "");
$out+='>Bingcoo-web资源</option> <option value="5" ';
$out+=$escape(type == 5 && source == 2 ? "selected" : "");
$out+='>Bingcoo-page资源</option> <option value="6" ';
$out+=$escape(type == 6 && source == 2 ? "selected" : "");
$out+='>Bingcoo-pagehost资源</option> <option value="7" ';
$out+=$escape(type == 7 && source == 2 ? "selected" : "");
$out+='>Bingcoo-NGP资源</option> ';
}
$out+=' <!-- ';
if(selSource === 3){
$out+=' <option value="1" ';
$out+=$escape(type == 1 && source == 3 ? "selected" : "");
$out+='>pagehost资源</option> <option value="2" ';
$out+=$escape(type == 2 && source == 3 ? "selected" : "");
$out+='>page资源</option> ';
}
$out+=' --> ';
if(selSource === 4){
$out+=' <option value="1" ';
$out+=$escape(type == 1 && source == 4 ? "selected" : "");
$out+='>facebook资源</option> <option value="2" ';
$out+=$escape(type == 2 && source == 4 ? "selected" : "");
$out+='>admob资源</option> <option value="3" ';
$out+=$escape(type == 3 && source == 4 ? "selected" : "");
$out+='>CM资源</option> ';
}
$out+=' ';
return new String($out);
});