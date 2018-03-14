/*TMODJS:{"version":3,"md5":"2888361206c5dad3a2125f9ca44c9c60"}*/
template('template/offer.search.black',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,placeholder=$data.placeholder,$each=$utils.$each,button=$data.button,bt=$data.bt,$index=$data.$index,$out='';$out+='<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="orderType" checked="checked" value="1"> <span class="radio-text">创建时间升序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="2"> <span class="radio-text">创建时间降序</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 国家 <i class="bingcoo-caret-down"></i> </a> <div class="dropdown-menu" style="width: 350px"> <div class="search-filter-container"> <div class="row"> <div class="c-search"> <label class="c-search-title" style="width: 70px">国家名称:</label>  <input class="c-search-text" field="searchCountry" name="country:skip" type="text" value=""> </div> <div class="c-search-res"> <div class="filter-body clearfix"> <div class="filter-select" id="search-country-enum"></div> </div> </div> </div> <div class="row c-line"> <div class="filter-body clearfix"> <div class="filter-select" id="country-enum">  </div> </div> </div> </div> </div> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 分类 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order" id="tag-enum"> <li> <label> 正在加载 </label> </li> </ul> </div> </li> <li class="kit-item map-search"> <div class="map-search"> <i class="bingcoo-search" title="搜索"></i> <input blur field="keyword" name="keyword" class="form-control" type="text" placeholder="';
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