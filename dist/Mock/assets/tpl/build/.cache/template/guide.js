/*TMODJS:{"version":4,"md5":"2580cd57b73caa145aca1a87808a4dae"}*/
template('template/guide',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,roles=$data.roles,role=$data.role,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="navbar navbar-fixed-top nav-shadow" data-hover="dropdown"> <div class="navbar-inner"> <div class="navbar-container tb"> <div class="b-navbar-left td"> <a href="#" class="navbar-brand"> <small> <img src="static/assets/app/img/global/logo9.png" alt=""> </small> </a> </div> <div class="b-navbar-menu td"> <div class="top-menu"> <ul class="clearfix"> ';
$each(roles,function(role,$index){
$out+=' <li> <a id="m_';
$out+=$escape(role.className);
$out+='" class="router" href="#';
$out+=$escape(role.staticUrl);
$out+='" role="';
$out+=$escape(role.id);
$out+='"> <i class="';
$out+=$escape(role.icon);
$out+='"></i>';
$out+=$escape(role.name);
$out+=' </a> </li> ';
});
$out+='  </ul>  </div> </div> <div class="b-navbar-right td"> <div class="clearfix setting-warp"> <div class="setting dropdown"> <a class="setting-btn" data-hover="dropdown" data-delay="100" data-close-others="false"aria-expanded="false"> <i class="icon glyphicon glyphicon-cog"></i> </a> <ul class="dropdown-menu dropdown-submenu" style="left: -70px;"> <li id="refreshCache"> <label> <i class="icon glyphicon glyphicon-cog"></i> <a class="radio-text">刷新缓存</a> </label> </li> <li id="exit"> <label> <i class="icon glyphicon glyphicon-cog"></i> <a class="radio-text">退出系统</a> </label> </li> </ul> </div> </div> </div> </div> </div> </div> <div class="main-container container-fluid" id="guide-page"> <div class=\'page-container-warp\'></div> </div>';
return new String($out);
});