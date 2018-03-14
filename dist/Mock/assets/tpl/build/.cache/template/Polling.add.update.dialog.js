/*TMODJS:{"version":4,"md5":"d032b8268a06e0aaab1403f220d21210"}*/
template('template/Polling.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,polling=$data.polling,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>轮询时间（分钟）:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="polling" value="';
$out+=$escape(polling);
$out+='"> </div> </div> </div> </div> </form>';
return new String($out);
});