/*TMODJS:{"version":2,"md5":"5bc87e768e5e7eebfd32320c0394288b"}*/
template('template/left.menu',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,roleMenu=$data.roleMenu,oneMenu=$data.oneMenu,$index=$data.$index,$escape=$utils.$escape,twoMenu=$data.twoMenu,$out='';$out+='<div class="slimScrollDiv"> <ul class="nav sidebar-menu"> ';
$each(roleMenu,function(oneMenu,$index){
$out+=' ';
if(oneMenu.child.length > 0){
$out+=' <li class="open"> <a class="menu-dropdown"> <i class="';
$out+=$escape(oneMenu.icon);
$out+='"></i> <span class="menu-text">';
$out+=$escape(oneMenu.name);
$out+='</span> <i class="menu-expand"></i> </a> <ul class="submenu" style="display: block;"> ';
if(oneMenu.staticUrl.length > 0){
$out+=' <li> <a href="#';
$out+=$escape(oneMenu.staticUrl);
$out+='" roleName="';
$out+=$escape(oneMenu.staticUrl.replace(/\//g,""));
$out+='" role="';
$out+=$escape(oneMenu.id);
$out+='"> <span class="menu-text">';
$out+=$escape(oneMenu.name);
$out+='</span> </a> </li> ';
}
$out+=' ';
$each(oneMenu.child,function(twoMenu,$index){
$out+=' <li> <a href="#';
$out+=$escape(twoMenu.staticUrl);
$out+='" roleName="';
$out+=$escape(twoMenu.staticUrl.replace(/\//g,""));
$out+='" role="';
$out+=$escape(twoMenu.id);
$out+='"> <i class="';
$out+=$escape(twoMenu.icon);
$out+='"></i> <span class="menu-text">';
$out+=$escape(twoMenu.name);
$out+='</span> </a> </li> ';
});
$out+=' </ul> </li> ';
}else{
$out+=' <li> <a href="#';
$out+=$escape(oneMenu.staticUrl);
$out+='" roleName="';
$out+=$escape(oneMenu.staticUrl.replace(/\//g,""));
$out+='" role="';
$out+=$escape(oneMenu.id);
$out+='"> <i class="';
$out+=$escape(oneMenu.icon);
$out+='"></i> <span class="menu-text">';
$out+=$escape(oneMenu.name);
$out+='</span> </a> </li> ';
}
$out+=' ';
});
$out+=' </ul> </div> ';
return new String($out);
});