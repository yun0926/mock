/*TMODJS:{"version":2,"md5":"61f58da5ccfe3e610706a365523f159a"}*/
template('template/role.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,name=$data.name,type=$data.type,pid=$data.pid,uri=$data.uri,staticUrl=$data.staticUrl,className=$data.className,icon=$data.icon,seq=$data.seq,description=$data.description,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>名称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="name" value="';
$out+=$escape(name);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>类型:</label> <div class="col-sm-5"> <select name="type" class="form-select"> <option value="0"';
$out+=$escape(type == 0 ? "selected" : "");
$out+=' >功能</option> <option value="1"';
$out+=$escape(type == 1 ? "selected" : "");
$out+=' >一级菜单</option> <option value="2"';
$out+=$escape(type == 2 ? "selected" : "");
$out+=' >二级菜单</option> <option value="3"';
$out+=$escape(type == 3 ? "selected" : "");
$out+=' >三级菜单</option> <option value="4"';
$out+=$escape(type == 4 ? "selected" : "");
$out+=' >四级菜单</option> </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>父节点:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="pid" value="';
$out+=$escape(pid);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>访问路径:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="uri" value="';
$out+=$escape(uri);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>静态地址:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="staticUrl" value="';
$out+=$escape(staticUrl);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>className:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="className" value="';
$out+=$escape(className);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>图标:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="icon" value="';
$out+=$escape(icon);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>排序方式:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="seq" value="';
$out+=$escape(seq);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">描述</label> <div class="col-sm-9"> <textarea class="form-control" rows="5" name="description">';
$out+=$escape(description);
$out+='</textarea> </div> </div> </div> </div> </form>';
return new String($out);
});