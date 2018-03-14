/*TMODJS:{"version":2,"md5":"69bc4ef51bd961cae8b98c4a464e0abc"}*/
template('template/PageOffer.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,seq=$data.seq,pageId=$data.pageId,tag=$data.tag,$each=$utils.$each,bannerEnum=$data.bannerEnum,item=$data.item,$index=$data.$index,bannerId=$data.bannerId,style=$data.style,showStyle=$data.showStyle,source=$data.source,advert=$data.advert,remark=$data.remark,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <input type="hidden" name="seq" value="';
$out+=$escape(seq);
$out+='"> <input type="hidden" name="pageId" value="';
$out+=$escape(pageId);
$out+='"> <div class="row"> ';
if(tag){
$out+=' <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">单页名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="tag" value="';
$out+=$escape(tag);
$out+='" disabled="disabled"> </div> </div> </div> ';
}
$out+=' <!-- <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red" id="bannerIdTip">*</span>导航条:</label> <div class="col-sm-5"> <select name="bannerId" class="form-select"> <option value=""></option> ';
$each(bannerEnum,function(item,$index){
$out+=' <option value="';
$out+=$escape(item.id);
$out+='" ';
$out+=$escape(bannerId == item.id ? "selected" : "");
$out+=' >';
$out+=$escape(item.name);
$out+='</option> ';
});
$out+=' </select> </div> </div> </div>--> ';
if(style != 3){
$out+=' <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>展示风格:</label> <div class="col-sm-5"> <select name="showStyle" class="form-select"> ';
if(style == 0){
$out+=' <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >banner显示风格</option> <!-- <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >STYLE_FULL_SCREEN</option>--> <option value="0" ';
$out+=$escape(showStyle == 0 ? "selected" : "");
$out+=' >长条app</option> <option value="2" ';
$out+=$escape(showStyle == 2 ? "selected" : "");
$out+=' >长条facebook广告</option> <option value="4" ';
$out+=$escape(showStyle == 4 ? "selected" : "");
$out+=' >长条admob</option> <option value="10" ';
$out+=$escape(showStyle == 10 ? "selected" : "");
$out+=' >长条型的CM广告</option> <option value="7" ';
$out+=$escape(showStyle == 7 ? "selected" : "");
$out+=' >带大图的list</option> ';
}
$out+=' ';
if(style == 1){
$out+=' <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >banner显示风格</option> <!-- <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >STYLE_FULL_SCREEN</option>--> <option value="1" ';
$out+=$escape(showStyle == 1 ? "selected" : "");
$out+=' >宫格app</option> <option value="3" ';
$out+=$escape(showStyle == 3 ? "selected" : "");
$out+=' >宫格facebook广告</option> <option value="5" ';
$out+=$escape(showStyle == 5 ? "selected" : "");
$out+=' >宫格admob</option> <option value="11" ';
$out+=$escape(showStyle == 11 ? "selected" : "");
$out+=' >宫格型的CM广告</option> ';
}
$out+=' ';
if(style == 2){
$out+=' <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >banner显示风格</option> <!-- <option value="9" ';
$out+=$escape(showStyle == 9 ? "selected" : "");
$out+=' >STYLE_FULL_SCREEN</option>--> <option value="8" ';
$out+=$escape(showStyle == 8 ? "selected" : "");
$out+=' >用于每日推荐的样式</option> <option value="12" ';
$out+=$escape(showStyle == 12 ? "selected" : "");
$out+=' >大图的CM广告</option> <option value="13" ';
$out+=$escape(showStyle == 13 ? "selected" : "");
$out+=' >大图的facebook广告</option> <option value="14" ';
$out+=$escape(showStyle == 14 ? "selected" : "");
$out+=' >大图的admob广告</option> ';
}
$out+=' </select> </div> </div> </div> ';
}
$out+=' <div class="col-sm-6"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>来源:</label> <div class="col-sm-5"> <select name="source" class="form-select"> <option selected="selected"></option> <option value="1" ';
$out+=$escape(source == 1 ? "selected" : "");
$out+=' >客户资源</option> <option value="2" ';
$out+=$escape(source == 2 ? "selected" : "");
$out+=' >Bingcoo</option> <!-- <option value="3" ';
$out+=$escape(source == 3 ? "selected" : "");
$out+=' >page资源</option>--> <option value="4" ';
$out+=$escape(source == 4 ? "selected" : "");
$out+=' >广告资源</option> </select> </div> </div> </div> <div class="col-sm-6"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">资源类型:</label> <div class="col-sm-5"> <select name="type" class="form-select"></select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>广告:</label> <div class="col-sm-5"> <select name="advertId" id="advertId" disabled> ';
if(advert){
$out+=' <option value="';
$out+=$escape(advert.id);
$out+='" selected >';
$out+=$escape(advert.remark);
$out+='</option> ';
}
$out+=' </select> </div> </div> </div> <!-- <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">备注</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="remark">';
$out+=$escape(remark);
$out+='</textarea> </div> </div> </div>--> </div> </form>';
return new String($out);
});