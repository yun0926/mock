/*TMODJS:{"version":61,"md5":"0b612eea21cdf274c80c3de3a7f46453"}*/
template('template/offer.ddl.search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,type=$data.type,$each=$utils.$each,button=$data.button,bt=$data.bt,$index=$data.$index,checkButton=$data.checkButton,item=$data.item,$out='';$out+='<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form"> <input type="hidden" name="type" value="';
$out+=$escape(type);
$out+='"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="orderType" value="1"> <span class="radio-text">创建时间升序</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="orderType" value="2"> <span class="radio-text">创建时间降序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="3"> <span class="radio-text">权重升序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="4"> <span class="radio-text">权重降序</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 在线状态 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="online" value=""> <span class="radio-text">所有</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="online" value="0"> <span class="radio-text">上线</span> </label> </li> <li> <label> <input type="radio" name="online" value="1"> <span class="radio-text">下线</span> </label> </li> </li> </ul> </div> </li> ';
if(type <= 5){
$out+=' <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 客户 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order" id="customer-enum"> <li> <label> 正在加载 </label> </li> </ul> </div> </li> ';
}
$out+='  <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 图片类型 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="1"> <span class="radio-text">小图标</span> </label> </li> <li class="divider"></li> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="2"> <span class="radio-text">横幅</span> </label> </li> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="3"> <span class="radio-text">大图</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false">国家<i class="bingcoo-caret-down"></i> </a> <div class="dropdown-menu" style="width: 350px"> <div class="search-filter-container"> <div class="row"> <div class="c-search"> <label class="c-search-title" style="width: 70px">国家名称:</label>  <input class="c-search-text" field="searchCountry" name="country:skip" type="text" value=""> </div> <div class="c-search-res"> <div class="filter-body clearfix"> <div class="filter-select" id="search-country-enum"></div> </div> </div> </div> <div class="row c-line"> <div class="filter-body clearfix"> <div class="filter-select" id="country-enum">  </div> </div> </div> </div> </div> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 分类 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order" id="tag-enum"> <li> <label> 正在加载 </label> </li> </ul> </div> </li> <li class="kit-item map-advice-search"> <div class="input-group"> <input blur field="keyword" name="keyword" class="form-control" type="text"/> <div class="input-group-btn"> <div type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="key-radio-title">名称</span> <span class="caret"></span> </div> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="key" value="remark"> <span class="radio-text">名称</span> </label> </li> <li> <label> <input type="radio" name="key" value="package_name"> <span class="radio-text">包名</span> </label> </li> </ul> </div> </div> </li> </ul> </div> </form> <div class="pull-right"> <ul class="kit-warp"> <li class="kit-item"> <div id="show-columns"></div> </li> ';
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