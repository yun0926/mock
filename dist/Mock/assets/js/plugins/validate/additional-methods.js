define(function (require, exports) {
	/*!
	 * jQuery Validation Plugin 1.11.1
	 *
	 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	 * http://docs.jquery.com/Plugins/Validation
	 *
	 * Copyright 2013 Jörn Zaefferer
	 * Released under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 */
	$.validator.regexs_num = {
		stringCheck:/^[\u0391-\uFFE5\w]+$/,				//只能包括中文字、英文字母、数字和下划线
		CheckMobile:/^((\+86)|(86))?(1)\d{10}$/,		//验证手机号码
		CheckHtml:/^\w*\<.|\>.\w*$/,					//验证HTML
		CheckNumber:/^\w{1,20}$/,						//验证1，20的字符数字
		CheckStrNum:/^[a-zA-Z0-9]+$/i,					//验证字符和数字
		Chinese:/^[\u4e00-\u9fa5]+$/,					//验证是否是中文
		CheckAge:/^([1-9]{1})(\d{1,2})$/,				//年龄
		CheckEmail:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,	//邮箱
		minusDate:/(\d{4})[-\/](\d{2})[-\/](\d{2})/,
		digits:/^\d+$/,															//正整数
		number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,						//数字
		numberGt0: /^\d+(\.\d+)?$/,												//大于0的数字
		dateISO:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,	//日期格式
		TimeISO:/^\d{2}:\d{2}$/,
		CheckIp:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
		//身份证
		CheckCard:{
			test:function (personValue) {

				//身份证省的编码
				var vcity = {
					11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
					21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
					33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
					42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
					51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
					63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
				};

				//校验长度，类型
				if (isCardNo(personValue) === false) {
					return false;
				}
				//检查省份
				else if (checkProvince(personValue) === false) {
					return false;
				}
				//校验生日
				else if (checkBirthday(personValue) === false) {
					return false;
				}
				//检验位的检测
				else if (checkParity(personValue) === false) {
					return false;
				} else {
					return true;
				}




				//检查号码是否符合规范，包括长度，类型
				function isCardNo(card) {
					//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
					var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
					if (reg.test(card) === false) {
						return false;
					}
					return true;
				}

				//取身份证前两位,校验省份
				function checkProvince(card) {
					var province = card.substr(0, 2);
					if (vcity[province] == undefined) {
						return false;
					}
					return true;
				}

				//检查生日是否正确
				function checkBirthday(card) {
					var len = card.length;
					//身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
					if (len == '15') {
						var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
						var arr_data = card.match(re_fifteen);
						var year = arr_data[2];
						var month = arr_data[3];
						var day = arr_data[4];
						var birthday = new Date('19' + year + '/' + month + '/' + day);
						return verifyBirthday('19' + year, month, day, birthday);
					}
					//身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
					if (len == '18') {
						var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
						var arr_data = card.match(re_eighteen);
						var year = arr_data[2];
						var month = arr_data[3];
						var day = arr_data[4];
						var birthday = new Date(year + '/' + month + '/' + day);
						return verifyBirthday(year, month, day, birthday);
					}
					return false;
				}

				//校验日期
				function verifyBirthday(year, month, day, birthday) {
					var now = new Date();
					var now_year = now.getFullYear();
					//年月日是否合理
					if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
						//判断年份的范围（3岁到100岁之间)
						var time = now_year - year;
						if (time >= 3 && time <= 100) {
							return true;
						}
						return false;
					}
					return false;
				}

				//校验位的检测
				function checkParity(card) {
					//15位转18位
					card = changeFivteenToEighteen(card);
					var len = card.length;
					if (len == '18') {
						var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
						var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
						var cardTemp = 0, i, valnum;
						for (i = 0; i < 17; i++) {
							cardTemp += card.substr(i, 1) * arrInt[i];
						}
						valnum = arrCh[cardTemp % 11];
						if (valnum == card.substr(17, 1)) {
							return true;
						}
						return false;
					}
					return false;
				}

				//15位转18位身份证号
				function changeFivteenToEighteen(card) {
					if (card.length == '15') {
						var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
						var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
						var cardTemp = 0, i;
						card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
						for (i = 0; i < 17; i++) {
							cardTemp += card.substr(i, 1) * arrInt[i];
						}
						card += arrCh[cardTemp % 11];
						return card;
					}
					return card;
				}

			}
		}


	};
	var res = $.validator.regexs_num;

	$.validator.addMethod("CheckTime", function (value, element) {
		return this.optional(element) || res.TimeISO.test(value);
	});
	//判断 验证日期 必须大于 目标日期
	$.validator.addMethod("dateToLess", function (value, element, toDate) {
		var _toDateVal = $(toDate).val();
		if(value!="" && _toDateVal && _toDateVal.length > 0) {
			//if(_toDateVal && _toDateVal.length > 0) {
			var diff = value.toDateTime().DateDiff('d',_toDateVal);
			return diff > 0;
		}else{
			return true;
		}
	});
	//判断 验证日期 必须小于 目标日期
	$.validator.addMethod("dateToGreater", function (value, element, toDate) {
		var _toDateVal = $(toDate).val();
		if(value!=""&&_toDateVal && _toDateVal.length > 0) {
			var diff = value.toDateTime().DateDiff('d', _toDateVal);
			return diff < 0;
		}else{
			return true;
		}
	});

	$.validator.addMethod("numberGt0", function (value, element) {
		return this.optional(element) || res.numberGt0.test(value);
	});
	$.validator.addMethod("minusDate", function (value, element) {
		return this.optional(element) || res.minusDate.test(value);
	});

	$.validator.addMethod("CheckHtml", function (value, element) {
		return this.optional(element) || !res.CheckHtml.test(value);
	});

	$.validator.addMethod("CheckCard", function (value, element) {
		return this.optional(element) || res.CheckCard.test(value);
	});

	$.validator.addMethod("CheckIp", function (value, element) {
		return this.optional(element) || res.CheckIp.test(value);
	});

	$.validator.addMethod("CheckNumber", function (value, element) {
		return this.optional(element) || res.CheckNumber.test(value);
	});

	$.validator.addMethod("CheckMobile", function (value, element) {
		return this.optional(element) || res.CheckMobile.test(value);
	});

	$.validator.addMethod("stringCheck", function (value, element) {
		return this.optional(element) || res.stringCheck.test(value);
	});

	$.validator.addMethod("chinese", function (value, element) {
		return this.optional(element) || (res.Chinese.test(value));
	});

	$.validator.addMethod("CheckAge", function (value, element) {
		return this.optional(element) || res.CheckAge.test(value);
	});

	$.validator.addMethod("CheckStrNum", function (value, element) {
		return this.optional(element) || res.CheckStrNum.test(value);
	});

	$.validator.addMethod("CheckEmail", function (value, element) {
		return this.optional(element) || res.CheckEmail.test(value);
	});

	$.validator.addMethod("CheckOfficePhone", function (value, element, param) {
		if (value == "")
			return true;
		return /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/.test(value) || /^400-?(([\d]{4}-?[\d]{3})|([\d]{3}-?[\d]{4}))$/g.test(value);
	});
	$.validator.addMethod("ByteMaxLength", function (value, element, param) {
		if(value == "")return true;
		var length  =  value.replace(/[^\x00-\xff]/g, 'xx').length;
		if(length > param){
			return false;
		}
		return true;
	},$.validator.format( "请输入不超过{0}个字节。" ));


	//验证code
	$.validator.addMethod("checkentCode", function (value) {
		var myreg = /^[a-zA-Z]{1}[-_a-zA-Z0-9]+$/;
		if (value != '') {
			if (!myreg.test(value)) {
				return false;
			}
			return true;
		}
		return false;
	});
	$.validator.addMethod("CheckBlank", function (value) {
		var myreg =/^\S+$/g;
		if (value != '') {
			if (!myreg.test(value)) {
				return false;
			}
			return true;
		}
		return false;
	});

	/*
	 * Translated default messages for the jQuery validation plugin.
	 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
	 */
	$.extend($.validator.messages,{
		CheckBlank:"不能包含空格",
		CheckHtml:"不能包含HTML标签",
		checkentCode:"企业代码以字母开头,长度5～20位，有效输入为字母，数字，下划线和减号",
		CheckOfficePhone:"座机格式错误",
		CheckEmail:"邮箱格式错误",
		CheckStrNum:"只能输入英文字符或数字",
		CheckAge:"年龄格式错误",
		chinese:"只能输入中文",
		stringCheck:"只能包括中文字、英文字母、数字和下划线",
		CheckMobile:"手机号码格式不对",
		CheckNumber:"号码格式不正确，请输入1至20字符.",
		CheckIp:"IP地址格式不正确",
		CheckCard:"身份证号码格式不正确",
		minusDate:"日期格式不正确 例：2014-04-30 或 2014/04/30",
		numberGt0:"请输入大于0的数字",
		dateToGreater:"验证日期 必须小于 目标日期",
		dateToLess:"验证日期 必须大于 目标日期",
		CheckTime:"时间格式不正确 例：16:00",
		CheckBlank:"不能包含空格标签",

		required: "必须填写",
		remote: "请修正此栏位",
		email: "请输入有效的电子邮件",
		url: "请输入有效的网址",
		date: "请输入有效的日期",
		dateISO: "请输入有效的日期 (YYYY-MM-DD)",
		number: "请输入正确的数字",
		digits: "只可输入数字",
		creditcard: "请输入有效的信用卡号码",
		equalTo: "你的输入不相同",
		extension: "请输入有效的后缀",
		maxlength: $.validator.format("最多 {0} 个字符"),
		minlength: $.validator.format("最少 {0} 个字符"),
		rangelength: $.validator.format("请输入长度为 {0} 至 {1} 之间的字符"),
		range: $.validator.format("请输入 {0} 至 {1} 之间的数值"),
		max: $.validator.format("请输入不大于 {0} 的数值"),
		min: $.validator.format("请输入不小于 {0} 的数值")
	});
});