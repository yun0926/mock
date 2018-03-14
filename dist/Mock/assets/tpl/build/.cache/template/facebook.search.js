/*TMODJS:{"version":2,"md5":"84a9e0d508eef0750e9f54f0d56d631b"}*/
template('template/facebook.search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,button=$data.button,bt=$data.bt,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="orderType" checked="checked" value="1"> <span class="radio-text">默认排序</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="orderType" value="1"> <span class="radio-text">创建时间升序</span> </label> </li> <li> <label> <input type="radio" name="orderType" value="2"> <span class="radio-text">创建时间降序</span> </label> </li> </ul> </div> </li> <li class="kit-item map-advice-search"> <div class="input-group"> <input blur field="keyword" name="keyword" class="form-control" type="text"/> <div class="input-group-btn"> <div type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="key-radio-title">备注</span> <span class="caret"></span> </div> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" checked="checked" name="key" value="remark"> <span class="radio-text">备注</span> </label> </li> <li> <label> <input type="radio" name="key" value="source"> <span class="radio-text">配置参数</span> </label> </li> </ul> </div> </div> </li> </ul> </div> </form> <div class="pull-right"> <ul class="kit-warp"> <li class="kit-item"> <div id="show-columns"></div> </li> ';
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