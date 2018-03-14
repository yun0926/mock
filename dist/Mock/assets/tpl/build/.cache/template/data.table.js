/*TMODJS:{"version":2,"md5":"c8f7e227de0bf4294834b88269229c9d"}*/
template('template/data.table',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,height=$data.height,$out='';$out+='<div class="col-xs-12 col-md-12"> <div class="widget"> <div class="widget-header "> <span class="widget-caption">';
$out+=$escape(title);
$out+='</span> <div class="widget-buttons"> <a href="#" data-toggle="maximize"> <i class="fa fa-expand"></i> </a> <a href="#" data-toggle="collapse"> <i class="fa fa-minus"></i> </a> <a href="#" data-toggle="dispose"> <i class="fa fa-times"></i> </a> </div> </div> <div class="widget-body" style="height:';
$out+=$escape(height);
$out+='px;overflow: hidden;"> <table class="table"></table> </div> </div> </div>';
return new String($out);
});