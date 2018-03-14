/*TMODJS:{"version":2,"md5":"314ef10b8282c440af54e64ea25fd1fc"}*/
template('template/user.add.update.dialog',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,username=$data.username,password=$data.password,nickname=$data.nickname,email=$data.email,phone=$data.phone,photo=$data.photo,sex=$data.sex,status=$data.status,address=$data.address,$out='';$out+='<form class="form-horizontal dialog-form" role="form"> <input type="hidden" name="id" value="';
$out+=$escape(id);
$out+='"> <div class="row"> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>用户名:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="username" value="';
$out+=$escape(username);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>密码:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="password" value="';
$out+=$escape(password);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;"><span class="red">*</span>昵称:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="nickname" value="';
$out+=$escape(nickname);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">email:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="email" value="';
$out+=$escape(email);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">phone:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="phone" value="';
$out+=$escape(phone);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">photo:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="photo" value="';
$out+=$escape(photo);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">sex:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="sex" value="';
$out+=$escape(sex);
$out+='"> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">状态:</label> <div class="col-sm-5"> <select name="status" class="form-select"> <option value="1" ';
$out+=$escape(status == 1 ? "selected" : "");
$out+='>禁用</option> <option value="2" ';
$out+=$escape(status == 2 ? "selected" : "");
$out+='>启用</option> </select> </div> </div> </div> <div class="col-sm-12"> <div class="form-group"> <label class="col-sm-2 control-label" style="width: 110px;">address:</label> <div class="col-sm-5"> <input class="form-control" type="text" name="address" value="';
$out+=$escape(address);
$out+='"> </div> </div> </div> </div> </form>';
return new String($out);
});