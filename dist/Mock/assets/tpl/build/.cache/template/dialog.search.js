/*TMODJS:{"version":22,"md5":"90352a90e31d0eff8ee2c7dcb86d5c87"}*/
template('template/dialog.search','<form class="search-dialog-form"> <div class="seq-search-banner"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="orderType" value="3"> <span class="radio-text">权重升序</span> </label> </li> <li> <label> <input type="radio" checked="checked" name="orderType" value="4"> <span class="radio-text">权重降序</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 在线状态 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="online" value=""> <span class="radio-text">所有</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" checked="checked" name="online" value="0"> <span class="radio-text">上线</span> </label> </li> <li> <label> <input type="radio" name="online" value="1"> <span class="radio-text">下线</span> </label> </li> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false" aria-expanded="false"> 图片类型 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="1"> <span class="radio-text">小图标</span> </label> </li> <li class="divider"></li> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="2"> <span class="radio-text">横幅</span> </label></li> <li> <label> <input type="checkbox" name="imgTypesArray[]" value="3"> <span class="radio-text">大图</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 国家 <i class="bingcoo-caret-down"></i> </a> <div class="dropdown-menu" style="width: 350px"> <div class="search-filter-container"> <div class="row"> <div class="c-search"> <label class="c-search-title" style="width: 70px">国家名称:</label>  <input class="c-search-text" field="searchCountry" name="country:skip" type="text" value=""> <input type="text" value="" style="display: none"> </div> <div class="c-search-res"> <div class="filter-body clearfix"> <div class="filter-select" id="dialog-search-country-enum"></div> </div> </div> </div> <div class="row c-line"> <div class="filter-body clearfix"> <div class="filter-select" id="dialog-country-enum">  </div> </div> </div> </div> </div> </div> </li> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 分类 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order" id="dialog-tag-enum"> <li> <label> 正在加载 </label> </li> </ul> </div> </li> </ul> </div> </form> ');