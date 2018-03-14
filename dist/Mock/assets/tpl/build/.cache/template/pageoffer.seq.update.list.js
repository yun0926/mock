/*TMODJS:{"version":3,"md5":"7ef379b20264b758da72f909a269d620"}*/
template('template/pageoffer.seq.update.list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,dataItem=$data.dataItem,on=$data.on,$escape=$utils.$escape,$out='';$each(data,function(dataItem,on){
$out+=' <div class="seq-el" id="';
$out+=$escape(dataItem.id);
$out+='"> <span class="seq-tb"> ';
$out+=$escape(dataItem.id);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.bannerName);
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.showStyle == 0  && "长条app");
$out+=' ';
$out+=$escape(dataItem.showStyle == 1  && "宫格app");
$out+=' ';
$out+=$escape(dataItem.showStyle == 2  && "长条facebook广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 3  && "宫格facebook广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 4  && "长条admob");
$out+=' ';
$out+=$escape(dataItem.showStyle == 5  && "宫格admob");
$out+=' ';
$out+=$escape(dataItem.showStyle == 9  && "banner显示风格");
$out+=' ';
$out+=$escape(dataItem.showStyle == 7  && "带大图的list");
$out+=' ';
$out+=$escape(dataItem.showStyle == 8  && "用于每日推荐的样式");
$out+=' <!-- ';
$out+=$escape(dataItem.showStyle == 9  && "STYLE_FULL_SCREEN");
$out+='--> ';
$out+=$escape(dataItem.showStyle == 10  && "长条型的CM广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 11  && "宫格型的CM广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 12  && "大图的CM广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 13  && "大图的facebook广告");
$out+=' ';
$out+=$escape(dataItem.showStyle == 14  && "大图的admob广告");
$out+=' </span> <span class="seq-tb"> ';
$out+=$escape(dataItem.source == 1  && "客户资源");
$out+=' ';
$out+=$escape(dataItem.source == 2  && "Bingcoo");
$out+=' <!-- ';
$out+=$escape(dataItem.source == 3  && "page资源");
$out+='--> ';
$out+=$escape(dataItem.source == 4  && "广告资源");
$out+=' </span> <span class="seq-tb"> ';
if(dataItem.source === 1 ){
$out+=' ';
$out+=$escape(dataItem.type == 1  && "客户资源-直下资源");
$out+=' ';
$out+=$escape(dataItem.type == 2  && "客户资源-跳转资源");
$out+=' ';
$out+=$escape(dataItem.type == 3  && "客户资源-H5资源");
$out+=' ';
$out+=$escape(dataItem.type == 4  && "客户资源-web资源");
$out+=' ';
$out+=$escape(dataItem.type == 5  && "客户资源-page资源");
$out+=' ';
$out+=$escape(dataItem.type == 6  && "客户资源-pagehost资源");
$out+=' ';
}
$out+=' ';
if(dataItem.source === 2 ){
$out+=' ';
$out+=$escape(dataItem.type == 1  && "Bingcoo-直下资源");
$out+=' ';
$out+=$escape(dataItem.type == 2  && "Bingcoo-跳转资源");
$out+=' ';
$out+=$escape(dataItem.type == 3  && "Bingcoo-H5资源");
$out+=' ';
$out+=$escape(dataItem.type == 4  && "Bingcoo-web资源");
$out+=' ';
$out+=$escape(dataItem.type == 5  && "Bingcoo-page资源");
$out+=' ';
$out+=$escape(dataItem.type == 6  && "Bingcoo-pagehost资源");
$out+=' ';
$out+=$escape(dataItem.type == 7  && "Bingcoo-NGP资源");
$out+=' ';
}
$out+=' <!-- ';
if(dataItem.source === 3 ){
$out+=' ';
$out+=$escape(dataItem.type == 1  && "pagehost资源");
$out+=' ';
$out+=$escape(dataItem.type == 2  && "page资源");
$out+=' ';
}
$out+=' --> ';
if(dataItem.source === 4 ){
$out+=' ';
$out+=$escape(dataItem.type == 1  && "facebook资源");
$out+=' ';
$out+=$escape(dataItem.type == 2  && "admob资源");
$out+=' ';
$out+=$escape(dataItem.type == 3  && "cm资源");
$out+=' ';
}
$out+=' </span> </div> ';
});
$out+=' ';
return new String($out);
});