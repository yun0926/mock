/*TMODJS:{"version":73,"md5":"c7d6d24ff1bbe4f43c271d7a77c1f8f4"}*/
template('template/base.guide.from',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,url=$data.url,sleep=$data.sleep,msg=$data.msg,$out='';$out+='<div class="col-md-12"> <div class="form-group"> <label class="col-md-2 control-label" style="width: 110px;"><span class="red">*</span>url:</label> <div class="col-md-5"> <input class="form-control" type="text" name="url" value="';
$out+=$escape(url);
$out+='"> </div> <div class="col-md-5"> <div class="col-md-6"> <div class="map-sequence dropdown"> <a class="sequence-target btn btn-group-sm" data-hover="dropdown" data-delay="100" data-close-others="false"> <samp id="isover-text">是否覆盖:否</samp> <i class="bingcoo-caret-down"></i> </a> <ul class="dropdown-menu dropdown-submenu search-order"> <li> <label> <input class="isover" type="radio" name="isover:boolean" value="true"> <span class="radio-text">是</span> </label> </li> <li> <label> <input class="isover" type="radio" checked="checked" name="isover:boolean" value="false"> <span class="radio-text">否</span> </label> </li> </ul> </div> </div> <div class="col-md-6"> <button type="submit" class="btn btn-blue">提交</button> </div> </div> </div> </div> <div class="col-md-12"> <div class="form-group"> <label class="col-md-2 control-label" style="width: 110px;">sleep:</label> <div class="col-md-5"> <input class="form-control" type="text" name="sleep" value="';
$out+=$escape(sleep);
$out+='"> </div> </div> </div> <div class="col-md-12"> <div class="form-group"> <label class="col-md-2 control-label" style="width: 110px;">备注:</label> <div class="col-md-10"> <input class="form-control" type="text" name="msg" value="';
$out+=$escape(msg);
$out+='"> </div> </div> </div>';
return new String($out);
});