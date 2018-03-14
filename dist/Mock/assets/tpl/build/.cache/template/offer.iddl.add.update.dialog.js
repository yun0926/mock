/*TMODJS:{"version":6,"md5":"48fc00ec8421a422d22507ebbbe50b13"}*/
template('template/offer.iddl.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,seq=$data.seq,type=$data.type,remark=$data.remark,packageName=$data.packageName,className=$data.className,$each=$utils.$each,CustomerEnum=$data.CustomerEnum,customerE=$data.customerE,$index=$data.$index,cid=$data.cid,tagsEnum=$data.tagsEnum,tagE=$data.tagE,tagsArray=$data.tagsArray,tagItem=$data.tagItem,countryEnum=$data.countryEnum,countryE=$data.countryE,countrysArray=$data.countrysArray,countryItem=$data.countryItem,size=$data.size,downloadNumber=$data.downloadNumber,stars=$data.stars,actionUrl=$data.actionUrl,onlineState=$data.onlineState,detailUrl=$data.detailUrl,iconImg=$data.iconImg,largeImg=$data.largeImg,bannerImg=$data.bannerImg,author=$data.author,$out='';$out+='<form class="form-horizontal dialog-form" role="form" > <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="seq" value="';
$out+=$escape(seq);
$out+='"> <input type="hidden" name="type" value="';
$out+=$escape(type);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="remark" value="';
$out+=$escape(remark);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>包名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="packageName" value="';
$out+=$escape(packageName);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >类名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="className" value="';
$out+=$escape(className);
$out+='"> </div> </div> </div> ';
if(type <= 5 ){
$out+=' <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>客户:</label> <div class="col-sm-5"> <select name="cid" class="form-select"> <option></option> ';
$each(CustomerEnum,function(customerE,$index){
$out+=' <option value="';
$out+=$escape(customerE.cid);
$out+='" ';
$out+=$escape(customerE.cid == cid ? "selected" : "");
$out+='>';
$out+=$escape(customerE.remark);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> ';
}
$out+=' <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>分类:</label> <div class="col-sm-5"> <select name="tags[]" class="form-select" multiple> ';
$each(tagsEnum,function(tagE,$index){
$out+=' <option value="';
$out+=$escape(tagE.name);
$out+='"';
$each(tagsArray,function(tagItem,$index){
$out+=$escape(tagE.name == tagItem ? "selected" : "");
});
$out+='>';
$out+=$escape(tagE.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>国家:</label> <div class="col-sm-5"> <select class="countrys-multiple" name="countrys[]" multiple="multiple"> ';
$each(countryEnum,function(countryE,$index){
$out+=' <option value="';
$out+=$escape(countryE.value);
$out+='"';
$each(countrysArray,function(countryItem,$index){
$out+=$escape(countryE.value == countryItem ? "selected" : "");
});
$out+='>';
$out+=$escape(countryE.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>文件大小:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="size" value="';
$out+=$escape(size);
$out+='"> <span class="input-group-addon">MB</span> </div> <div class="error"></div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>下载次数:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="downloadNumber" value="';
$out+=$escape(downloadNumber);
$out+='"> <span class="input-group-addon">次</span> </div> <div class="error"></div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>星级:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="stars" value="';
$out+=$escape(stars);
$out+='"> <span class="input-group-addon">星</span> </div> <div class="error"></div> </div> </div> </div> <div class="col-sm-6"> <div class="form-group"> <label class="col-sm-4 control-label" >响应方式:</label> <div class="col-sm-8"> <select name="action" class="form-select"> <option value="preload" selected="selected" >preload</option> </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>URL地址:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="actionUrl" value="';
$out+=$escape(actionUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>上下线状态:</label> <div class="col-sm-5"> <select name="onlineState" class="form-select"> <option value="0" ';
$out+=$escape(onlineState === 0  ? "selected" : "");
$out+='>上线状态</option> <option value="1" ';
$out+=$escape(onlineState === 1  ? "selected" : "");
$out+='>下线状态</option> </select> </div> </div> </div> <!-- <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >详情地址:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="detailUrl" value="';
$out+=$escape(detailUrl);
$out+='"> </div> </div> </div>--> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >小图标:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="iconImg" value="';
$out+=$escape(iconImg);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >大图标:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="largeImg" value="';
$out+=$escape(largeImg);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >横幅:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="bannerImg" value="';
$out+=$escape(bannerImg);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >备注:</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="author">';
$out+=$escape(author);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});