/*TMODJS:{"version":13,"md5":"e0b47f40273c9586e93a32fed232aaee"}*/
template('template/ngpOffer.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,title=$data.title,category=$data.category,$each=$utils.$each,countryEnum=$data.countryEnum,countryE=$data.countryE,$index=$data.$index,countryArray=$data.countryArray,countryItem=$data.countryItem,countryEquals=$helpers.countryEquals,dpsName=$data.dpsName,dpsTag=$data.dpsTag,fileSize=$data.fileSize,level=$data.level,packageName=$data.packageName,timestamp=$data.timestamp,uniqueKey=$data.uniqueKey,validTime=$data.validTime,weight=$data.weight,stars=$data.stars,downloadUrl=$data.downloadUrl,normalUrl=$data.normalUrl,fullscreenUrl=$data.fullscreenUrl,bannerUrl=$data.bannerUrl,referUrl=$data.referUrl,androidVersion=$data.androidVersion,description=$data.description,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>标题:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="title" value="';
$out+=$escape(title);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>分类:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="category" value="';
$out+=$escape(category);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>国家:</label> <div class="col-sm-5"> <select class="countrys-multiple" name="countrys[]" multiple="multiple"> ';
$each(countryEnum,function(countryE,$index){
$out+=' <option value="';
$out+=$escape(countryE.value);
$out+='"';
$each(countryArray,function(countryItem,$index){
$out+=$escape(countryEquals(countryE.value,countryItem) ? "selected" : "");
});
$out+='>';
$out+=$escape(countryE.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >DSP名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="dpsName" value="';
$out+=$escape(dpsName);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >DSP的tag:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="dpsTag" value="';
$out+=$escape(dpsTag);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>文件大小:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="fileSize" value="';
$out+=$escape(fileSize);
$out+='"> <span class="input-group-addon">MB</span> </div> <div class="error"></div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >等级:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="level" value="';
$out+=$escape(level);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >包名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="packageName" value="';
$out+=$escape(packageName);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >入缓存时间:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="timestamp" value="';
$out+=$escape(timestamp);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >唯一的key:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="uniqueKey" value="';
$out+=$escape(uniqueKey);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>资源有效时间:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="validTime" value="';
$out+=$escape(validTime);
$out+='"> <span class="input-group-addon">秒</span> </div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >权重:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="weight" value="';
$out+=$escape(weight);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" ><span class="red">*</span>星级:</label> <div class="col-sm-3"> <div class="input-group error-warp"> <input class="form-control" type="text" name="stars" value="';
$out+=$escape(stars);
$out+='"> <span class="input-group-addon">星</span> </div> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >下载地址:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="downloadUrl" value="';
$out+=$escape(downloadUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >小图标:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="normalUrl" value="';
$out+=$escape(normalUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >大图:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="fullscreenUrl" value="';
$out+=$escape(fullscreenUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >横幅:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="bannerUrl" value="';
$out+=$escape(bannerUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >refer地址:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="referUrl" value="';
$out+=$escape(referUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >安卓版本号:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="androidVersion" value="';
$out+=$escape(androidVersion);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" >描述:</label> <div class="col-sm-9"> <input class="form-control" type="text" name="description" value="';
$out+=$escape(description);
$out+='"> </div> </div> </div> </div> </form>';
return new String($out);
});