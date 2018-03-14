/*TMODJS:{"version":2,"md5":"45a394324db2be0f29c62e56d1552138"}*/
template('template/search','<div class="clearfix search-mode" batch=""> <div class="search-normal"> <form class="search-form" action="www.baidu.com"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> 排序 <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input type="radio" name="order" checked="checked" value="1"> <span class="radio-text">默认排序</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="order" value="2"> <span class="radio-text">升序</span> </label> </li> <li> <label> <input type="radio" name="order" value="3"> <span class="radio-text">降序</span> </label> </li> <li class="divider"></li> <li> <label> <input type="radio" name="order" value="4"> <span class="radio-text">按时间升序</span> </label> </li> <li> <label> <input type="radio" name="order" value="5"> <span class="radio-text">按时间降序</span> </label> </li> </ul> </div> </li> <li class="kit-item"> <div class="map-filter dropdown "> <a class="btn btn-group-sm" data-hover="dropdown" data-delay="100"> 筛选 <i class="bingcoo-caret-down"></i> </a> <div class="dropdown-menu search-filter"> <div class="search-filter-container"> <div class="row"> <div class="filter-group"> <div class="filter-head clearfix"> <div class="filter-title pull-left"> 包名 </div> <div class="pull-right"> <input field="pack" class="filter-input" type="text" placeholder="请输入包名"> </div> </div> <div class="filter-body clearfix"> <div class="filter-select"> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">阅读</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">搞笑</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">阅读</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">搞笑</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> </div> </div> </div> </div> <div class="row"> <div class="filter-group"> <div class="filter-head clearfix"> <div class="filter-title pull-left"> 日期 </div> </div> <div class="filter-body clearfix"> <div class="filter-query"> 起 <label class="filter-query-warp"> <input class="filter-input datetimepicker" type="text" placeholder="请输起始日期"> </label> 至 <label class="filter-query-warp"> <input class="filter-input datetimepicker" type="text" placeholder="请输结束日期"> </label> </div> </div> </div> </div> <div class="row"> <div class="filter-group"> <div class="filter-head clearfix"> <div class="filter-title pull-left"> 响应方式 </div> <div class="pull-right"> <input class="filter-input" type="text" placeholder="请输入包名"> </div> </div> <div class="filter-body clearfix"> <div class="filter-select"> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">阅读</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">搞笑</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">阅读</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">搞笑</span> </label> <label> <input type="checkbox" name="pack" value="1"> <span class="radio-text">天气</span> </label> </div> </div> </div> </div> <div class="row"> <div class="clearfix"> <div class="btn btn-group-sm pull-right btn-primary"> <i class="menu-icon glyphicon glyphicon-tasks"></i> 重置 </div> </div> </div> </div> </div> </div> </li> <li class="kit-item map-search"> <div class="map-search"> <i class="bingcoo-search" title="搜索"></i> <input blur field="keyWord" name="keyWord" class="form-control" type="text" placeholder="搜索"/> </div> </li> </ul> </div> </form> <div class="pull-right"> <ul class="kit-warp"> <li class="kit-item"> <div id="show-columns"></div> </li> <li class="kit-item"> <a class="btn btn-success btn-sm"> <i class="bingcoo-plus-thin"></i>导入 </a> </li> <li class="kit-item"> <a class="btn btn-success btn-sm"> <i class="bingcoo-plus-thin"></i>导出 </a> </li> <li class="kit-item"> <a class="btn btn-success btn-sm"> <i class="bingcoo-plus-thin"></i>新建任务 </a> </li> </ul> </div> </div> <div class="search-batch"> <div class="pull-left"> <ul class="kit-warp"> <li class="kit-item"> <a class="btn btn-sm"> <i class="bingcoo-plus-thin"></i>批量删除 </a> </li> <li class="kit-item"> <a class="btn btn-sm"> <i class="bingcoo-plus-thin"></i>批量关注 </a> </li> </ul> </div> </div> </div> ');