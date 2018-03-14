/*TMODJS:{"version":2,"md5":"b9a7425c9924285f49d7e0a229426713"}*/
template('template/PageHostPage.search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,pageHostId=$data.pageHostId,placeholder=$data.placeholder,$each=$utils.$each,button=$data.button,bt=$data.bt,$index=$data.$index,$out='';$out+='<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form"> <input type="hidden" name="pageHostId" value="';
$out+=$escape(pageHostId);
$out+='"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="orderType" value="1"> <span class="radio-text">权重升序</span> </label> </li> <li> <label> <input type="radio" name="orderType" checked="checked" value="2"> <span class="radio-text">权重降序</span> </label> </li> </ul> </div> </li> <li class="kit-item map-search"> <div class="map-search"> <i class="bingcoo-search" title="搜索"></i> <input blur field="keyword" name="keyword" class="form-control" type="text" placeholder="';
$out+=$escape(placeholder || "搜索");
$out+='"/> </div> </li> </ul> </div> </form> <div class="pull-right"> <ul class="kit-warp"> <li class="kit-item"> <div id="show-columns"></div> </li> ';
$each(button,function(bt,$index){
$out+=' <li class="kit-item"> <a class="btn btn-success btn-sm" id="';
$out+=$escape(bt.id);
$out+='"> <i class="';
$out+=$escape(bt.icon);
$out+='"></i>';
$out+=$escape(bt.title);
$out+=' </a> </li> ';
});
$out+=' </ul> </div> </div> <div class="search-batch"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <a class="btn btn-sm"> <i class="bingcoo-plus-thin"></i>功能开发中 </a> </li>  </ul> </div> </div> </div> ';
return new String($out);
});