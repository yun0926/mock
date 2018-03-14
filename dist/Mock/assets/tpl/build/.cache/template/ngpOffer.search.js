/*TMODJS:{"version":10,"md5":"90fecf24cb5a1bfa5ca6a8e1b7867673"}*/
template('template/ngpOffer.search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,button=$data.button,bt=$data.bt,$index=$data.$index,$escape=$utils.$escape,checkButton=$data.checkButton,item=$data.item,$out='';$out+='<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="orderType" value="1"> <span class="radio-text">创建时间升序</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="orderType" value="2"> <span class="radio-text">创建时间降序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="3"> <span class="radio-text">权重升序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="4"> <span class="radio-text">权重降序</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 国家 <i class="bingcoo-caret-down"></i> </a> <div class="dropdown-menu" style="width: 350px"> <div class="search-filter-container"> <div class="row"> <div class="c-search"> <label class="c-search-title" style="width: 70px">国家名称:</label>  <input class="c-search-text" field="searchCountry" name="country:skip" type="text" value=""> </div> <div class="c-search-res"> <div class="filter-body clearfix"> <div class="filter-select" id="search-country-enum"></div> </div> </div> </div> <div class="row c-line"> <div class="filter-body clearfix"> <div class="filter-select" id="country-enum">  </div> </div> </div> </div> </div> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 分类 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order" id="tag-enum"> <li> <label> 正在加载 </label> </li> </ul> </div> </li> <li class="kit-item map-advice-search"> <div class="input-group"> <input blur field="keyword" name="keyword" class="form-control" type="text"/> <div class="input-group-btn"> <div type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="key-radio-title">DSP</span> <span class="caret"></span> </div> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="key" value="dps_name"> <span class="radio-text">DSP</span> </label> </li> <li> <label> <input type="radio" name="key" value="title"> <span class="radio-text">标题</span> </label> </li> <li> <label> <input type="radio" name="key" value="category"> <span class="radio-text">分类</span> </label> </li> <li> <label> <input type="radio" name="key" value="package_name"> <span class="radio-text">包名</span> </label> </li> </ul> </div> </div> </li> </ul> </div> </form> <div class="pull-right"> <ul class="kit-warp"> <li class="kit-item"> <div id="show-columns"></div> </li> ';
$each(button,function(bt,$index){
$out+=' <li class="kit-item"> <a class="btn btn-success btn-sm" id="';
$out+=$escape(bt.id);
$out+='"> <i class="';
$out+=$escape(bt.icon);
$out+='"></i>';
$out+=$escape(bt.title);
$out+=' </a> </li> ';
});
$out+=' </ul> </div> </div> <div class="search-batch"> <div class="pull-left"> <ul class="kit-warp"> ';
$each(checkButton,function(item,$index){
$out+=' <li class="kit-item"> <a class="btn btn-sm" id="';
$out+=$escape(item.id);
$out+='"> <i class="';
$out+=$escape(item.icon);
$out+='"></i>';
$out+=$escape(item.title);
$out+=' </a> </li> ';
});
$out+=' </ul> </div> </div> </div> ';
return new String($out);
});