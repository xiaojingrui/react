/**
 * 配置对象
 * @type {Object}
 */
export var config = {
		baseUrl:'http://120.55.184.234:8080',
		// baseUrl: 'http://192.168.18.194:8080',
		// baseUrl: 'https://www.lingtouniao.com/v3',
		baseHash: '#!',
		clientType: 'M',
		weixinDownUrl: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao',//微信下载地址
		code: {
			'00080537': '亲,您的银行账户余额不足,请您核实后再来交易',
			'10000001': '图形验证码错误',
			'10000002': '手机验证码校验失败',
			'10000001': '图形验证码校验失败',
			'10000002': '手机验证码校验失败',
			'10000003': '手机号码 错误',
			'10000004': '密码不对',
			'10000005': '用户未登陆',
			'10000006': '登录超时，没找到找个人',
			'10000007': '没选择已阅读按钮',
			'10000008': '密码校验有问题',
			'10000009': '手机号码校验有问题',
			'10000010': '发送手机验证码错误',
			'10000011': '该用户已经注册',
			'10000012': '该用户未注册',
			'10000013': '重置密码出错，请重新再试！',
			'10000014': '查询账户信息出错！',
			'10000015': '查询返现券信息出错！',
			'10000016': '更新用户信息失败！',
			'10000017': '身份证号码校验失败！',
			'10000018': '已经实名认证！',
			'10000019': '请先进行实名认证！',
			'10000020': '联动优势验签失败！',
			'10000021': '已经绑定过银行卡！',
			'10000022': '查询账户信息出错！',
			'10000023': '查询账户信息出错！',
			'10000024': '插入账户流水失败！',
			'10000025': '没有找到该用户！',
			'10000026': '余额不足，请充值！',
			'10000027': '该身份证已经绑定',
			'10000028': '请先绑定银行卡！',
			'10000030': '',
			'10000029': '',
			'10000031': '输入版本号不存在',
			'10000032': '最新版本不存在',
			'10000033': '鸟币余额不足',
			'10000034': '推荐人未进行实名认证',
			'10000035': '推荐人不能为本人',
			'10000036': '发送短信失败',
			'10000037': '推荐人不存在',
			'10000038': '推荐人已存在',
			'10000039': '你填写的号码推荐人是本人',
			'10000040': '超出单笔金额',
			'10000041': '手机验证码已失效，请重新获取!',
			'10000042': '超出当日限额',
			'10000043': '请选择银行名称!',
			'10000044': '请输入银行卡号!',
			'10000045': '内部员工',
			'10000046': '线下数据导入出错',
			'20000001': '您已经使用过体验金券了！',
			'20000002': '订单金额大于可用余额!请充值！',
			'20000003': '鸟币不满足1：5的使用规范!',
			'20000004': '下单失败!',
			'20000005': '鸟币处理失败!',
			'20000006': '更新账户可用余额失败!',
			'20000007': '订单金额小于返现券限定金额',
			'20000008': '订单标的时常小于返现券最小时长',
			'20000009': '返现券状态错误',
			'200000010': '订单用户和返现券用户不匹配',
			'20000011': '订单用户和返现券用户不匹配',
			'200000012': '订单标的时常小于标的起投金额！',
			'200000013': '订单金额应该为起投金额的倍数',
			'200000014': '返现券不存在',
			'200000015': '产品状态错误',
			'200000016': '订单金额大于产品剩余可投金额',
			'200000017': '更新产品信息失败',
			'200000018': '产品募集日期已结束',
			'200000019': '余额明细列表查询失败',
			'200000020': '该标的不存在',
			'200000021': '订单金额不能小于10000元',
			'200000022': '产品剩余金额小于订单金额',
			'200000023': '没有找到相应的订单',
			'200000024': '已经购买过新手单了',
			'200000025': '用户不符合新手标要求',
			'200000026': '新手标不允许使用返现券',
			'200000027': '新手标不允许使用鸟币',
			'200000028': '免密支付失败',
			'200000029': '新手标投资金额不能大于10000元',
			'201000000': '更新活期产品账户失败',
			'201000001': '超过今日限额',
			'201000002': '更新用户活期账户失败',
			'201000003': '活期账户余额小于提取金额',
			'201000004': '保存订单失败',
			'201000005': '订单金额错误',
			'201000007': '活期购买，之前没购买过正常标',

			'500000001': '身份证格式不正确',
			'500000002': '超出每日可用实名认证次数',
			'500000003': '超出每日可用绑卡认证次数',
			'500000004': '只能查看自己的订单',
			'500000005': '判断是否为乐巢投和乐巢投系列',


			'30000001': '获取响应数据失败.原因为',
			'30000002': '联动优势返回空的html代码',
			'30000002': '响应码错误',
			'30000003': '',
			'30000004': '已超过当天发送短信总条数！',

			'40000001': '推送连接失败！',
			'40000002': '推送请求失败！',
			'40000003': '用户ID为空！',
			'600000002': '没有抽奖机会了!',
			'9999': '服务器异常'
		}
	}
	/**
	 * 字符串类
	 */
export class strUtil {
	/*
	 * 判断字符串是否为空
	 * @param str 传入的字符串
	 * @returns {Boolean}
	 */
	static isEmpty = (str) => {
		if (str == null || typeof(str) == 'undefined' || str == '') {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * 判断两个字符串子否相同
	 * @param str1
	 * @param str2
	 * @returns {Boolean}
	 */
	static isEquals = (str1, str2) => {
		if (str1 == str2) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * 忽略大小写判断字符串是否相同
	 * @param str1
	 * @param str2
	 * @returns {Boolean}
	 */
	static isEqualsIgnorecase = (str1, str2) => {
		if (str1.toUpperCase() == str2.toUpperCase()) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是数字
	 * @param value
	 * @returns {Boolean}
	 */
	static isNum = (str) => {
		if (str != null && str.length > 0 && isNaN(str) == false) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是中文
	 * @param str
	 * @returns {Boolean}
	 */
	static isChina = (str) => {
		var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
		if (reg.test(str)) {
			return false;
		}
		return true;
	}

	/**
	 * 转换成数组
	 * @param str
	 * @returns {array}
	 */
	static toCharArray = (str) => {
		return str.split("");
	}

	/**
	 * 字符串反转
	 * @param str
	 * @returns {str}
	 */
	static reverse = (str) => {
		return str.split("").reverse().join("");
	}

	/**
	 * 测试是否是整数 
	 * @param str
	 * @returns {str}
	 */
	static isInt = (str) => {
		if (str == "NaN")
			return false;
		return str == parseInt(str).toString();
	}

	/**
	 * 除去左边空白  
	 * @param str
	 * @returns {str}
	 */
	static lTrim = (str) => {
		return str.replace(/(^\s*)/g, "");
	}


	/**
	 * 除去右边空白  
	 * @param str
	 * @returns {str}
	 */
	static rTrim = (str) => {
		return str.replace(/(\s*$)/g, "");
	}


	/**
	 * 除去两边空白  
	 * @param str
	 * @returns {str}
	 */
	static trim = (str) => {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	}

	/**
	 * Json转换成字符串  
	 * @param json
	 * @returns {str}
	 */
	static json2str = (jsonObj) => {
		return JSON.stringify(jsonObj);
	}


	/**
	 * 字符串转换成Json  
	 * @param str
	 * @returns {json}
	 */
	static str2json = (str) => {
		if (strUtil.isEmpty(str)) return JSON.parse(str);
	}


	/**
	 * 字符串-获取以ASCII编码字节数 英文占1字节 中文占2字节  
	 * @param str
	 * @returns {json}
	 */
	static lenASCII = (str) => {
		return str.replace(/[^\x00-\xff]/g, 'xx').length; //将所有非\x00-\xff字符换为xx两个字符,再计算字符串
	}

	/**
	 * 格式化百分比
	 * @param str
	 * @returns {str}
	 */
	static formatPercent = (str) => {
		return parseFloat(str).toString();
	}

	/**
	 * 格式化千分位
	 * @param str
	 * @returns {str}
	 */
	static formatKilo = (str) => {
		str = str.toString();
		if (/[^0-9\.]/.test(str)) return "invalid value";
		str = str.replace(/^(\d*)$/, "$1.");
		str = str.replace(/(\d*\.\d\d)\d*/, "$1");
		str = str.replace(".", ",");
		var re = /(\d)(\d{3},)/;
		while (re.test(str))
			str = str.replace(re, "$1,$2");
		str = str.replace(/.(\d*)$/, ".$1");
		str = str.substr(str.length - 1, 1) == '.' ? str.substring(0, str.length - 1) : str;
		return str.replace(/^\./, "0.");
	}


	//获取唯一机器码
	static getGuid = () => {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}


	/**
	 * 格式化字符串
	 * @param  {[type]} str         [description]
	 * @param  {[type]} punctuation [用来格式化的符号]
	 * @param  {[type]} type        [格式化的类型 name telephone identity]
	 * @return {[type]}             [description]
	 */
	static formatStr = (str, punctuation, type) => {
		punctuation = punctuation || '*';
		str = str.split('');
		var newStr = [];
		for (var i = 0; i < str.length; i++) {
			if (type == 'name') {
				if (i == 0) {
					newStr.push(str[i]);
				} else {
					newStr.push(punctuation);
				}
			} else if (type == 'telephone') {
				if (i > 2 && i < 7) {
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			} else if (type == 'identity') {
				if (i > 5 && i < 14) {
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			}

		}
		return newStr.join('');
	}

	//清除Html标签文本
	static clearHtml = (str) => {
		var reg = /<[^<>]+>/g;
		return str.replace(reg, '');
	}


	/*
	 * author toni
	 * 金钱取万
	 */
	static formatMiriade = (money) => {
		var m = (parseFloat(money) / 10000).toFixed();
		return m;
	}
}

export class urlUtil {

	/**
	 * 获取对应的url
	 * @return {[type]} [description]
	 */
	static getUrl = () => {
		return decodeURI(window.location.pathname + window.location.search + window.location.hash);
	}

	/**
	 * 获取浏览器hash
	 * @return {[type]} [description]
	 */
	static getHash = () => {
		return window.location.hash;
	}

	/**
	 * 获取对应下标的hash值
	 * @param  {[type]} index [description]
	 * @return {[type]}       [description]
	 */
	static getHashParts = (index) => {
		var hash = urlUtil.getHash().split("/");
		hash.shift();
		return index !== undefined ? hash[index] : hash;
	}

	/**
	 * 设置hash
	 * @param  {[type]} hashList [description]
	 * @return {[type]}          [description]
	 */
	static setHash = (hashList) => {
		hashList.unshift(config.baseHash);
		window.location.hash = hashList.join('/');
	}

	/**
	 * 根据option获取对应的值
	 */
	static getSearch = (option) => {
		var paraStr, paras,
			url = urlUtil.getUrl();
		if (url) {
			paraStr = url.split("?")[1];
			if (paraStr) {
				paras = {};
				paraStr = paraStr.split("&");
				for (var n in paraStr) {
					var name = paraStr[n].split("=")[0];
					var value = paraStr[n].split("=")[1];
					paras[name] = value;
				}
			} else {
				return '';
			}
			if (!option) {
				return paras;
			} else {
				return paras[option] ? paras[option] : "";
			}
		}
	}


	/**
	 * 重设url参数取值，若无此参数则进行创建,若参数赋值为null则进行删除
	 */
	static setSearch = (option) => {
		let paras = urlUtil.getSearch();
		var i, name, val;
		if (arguments.length == 2) {
			name = arguments[0];
			val = arguments[1];
			option = {
				name: val
			};
		}
		if ("string" === typeof option) {
			paras[option] = "";
		} else if ("object" === typeof option) {
			for (i in option) {
				if (option[i] === null) {
					delete paras[i];
				} else {
					paras[i] = option[i];
				}
			}
		} else {

		}
		return urlUtil.build(paras);
	}

	/**
	 * 删除url中指定参数返回新url
	 */
	static removeSearch = (option) => {
		let paras = urlUtil.getSearch();
		var i;
		if ("string" === typeof option) {
			option = option.split(",");
			for (i in option) {
				delete paras[option[i]]
			}

		}
		return urlUtil.build(paras);
	}


	/**
	 * 根据url和处理过的paras重新构件url
	 * @return {[type]} [description]
	 */
	static build = (paras) => {
		let url = urlUtil.getUrl();
		let str = url.split("?");
		let pathname = str.length > 0 ? str[0] : '';
		var i,
			newUrl = pathname + "?";

		for (i in paras) {
			newUrl += (i + "=" + paras[i] + "&");
		}

		return newUrl.substr(0, newUrl.length - 1);
	}

}


export class dateUtil{
	/**
	 * 获取当前时间
	 * @return {[type]} [description]
	 */
	static getTime=()=>{
		return new Date();
	}	

	/**
	 * 获取年份 如2015
	 * @return {[type]} [description]
	 */
	static getFullYear=()=>{
			return dateUtil.getTime().getFullYear();
	}

	/**
	 * 获取年份 如115
	 * @return {[type]} [description]
	 */
	static 	getYear=()=> {
		return dateUtil.getTime().getYear();
	}

	/**
	 * 获取月份 返回0-11 0表示一月 11表示十二月
	 */
	static getMonth=()=> {
		return dateUtil.getTime().getMonth();
	}

	/**
	 * 获取星期几  返回的是0-6的数字，0 表示星期天
	 * @return {[type]} [description]
	 */
	static 	getWeek=()=> {
		return dateUtil.getTime().getDay();
	}

	/**
	 * 获取当天日期
	 * @return {[type]} [description]
	 */
	static getDate=()=> {
		return dateUtil.getTime().getDate();
	}

	/**
	 * 获取小时数
	 */
	static getHours=()=> {
		return dateUtil.getTime().getHours();
	}

	/**
	 * 获取分钟数
	 */
	static getMinutes=()=> {
		return dateUtil.getTime().getMinutes();
	}

	/**
	 * 获取秒数
	 */
	static getSeconds=()=> {
		return dateUtil.getTime().getSeconds(); //获取秒数
	}

	/**
	 * 日期格式化：
	 * formatStr：可选，格式字符串，默认格式：yyyy-MM-dd hh:mm:ss
	 * 约定如下格式：
	 * （1）YYYY/yyyy/YY/yy 表示年份
	 * （2）MM/M 月份
	 * （3）W/w 星期
	 * （4）dd/DD/d/D 日期
	 * （5）hh/HH/h/H 时间
	 * （6）mm/m 分钟
	 * （7）ss/SS/s/S 秒
	 * （8）iii 毫秒
	 */

	static formatDate=(formatStr)=> {
		var str = formatStr;
		if (!formatStr) {
			str = "yyyy-MM-dd hh:mm:ss"; //默认格式
		}
		var Week = ['日', '一', '二', '三', '四', '五', '六'];
		str = str.replace(/yyyy|YYYY/, dateUtil.getFullYear());
		str = str.replace(/yy|YY/, (dateUtil.getYear() % 100) > 9 ? (dateUtil.getYear() % 100).toString() : '0' + (dateUtil.getYear() % 100));
		str = str.replace(/MM/, dateUtil.getMonth() >= 9 ? (parseInt(dateUtil.getMonth()) + 1).toString() : '0' + (parseInt(dateUtil.getMonth()) + 1));
		str = str.replace(/M/g, (parseInt(dateUtil.getMonth()) + 1));
		str = str.replace(/w|W/g, Week[dateUtil.getWeek()]);
		str = str.replace(/dd|DD/, dateUtil.getDate() > 9 ? dateUtil.getDate().toString() : '0' + dateUtil.getDate());
		str = str.replace(/d|D/g, dateUtil.getDate());
		str = str.replace(/hh|HH/, dateUtil.getHours() > 9 ? dateUtil.getHours().toString() : '0' + dateUtil.getHours());
		str = str.replace(/h|H/g, dateUtil.getHours());
		str = str.replace(/mm/, dateUtil.getMinutes() > 9 ? dateUtil.getMinutes().toString() : '0' + dateUtil.getMinutes());
		str = str.replace(/m/g, dateUtil.getMinutes());
		str = str.replace(/ss|SS/, dateUtil.getSeconds() > 9 ? dateUtil.getSeconds().toString() : '0' + dateUtil.getSeconds());
		str = str.replace(/s|S/g, dateUtil.getSeconds());
		str = str.replace(/iii/g, dateUtil.millSecond < 10 ? '00' + dateUtil.millSecond : (dateUtil.millSecond < 100 ? '0' + dateUtil.millSecond : dateUtil.millSecond));
		return str;
	}

	/**
	 * 判断闰年 ：一般规律为：四年一闰，百年不闰，四百年再闰。
	 */
	static isLeapYear=(str)=> {
		return (str % 4 == 0 && ((str != 0) || (str % 400 == 0)));
	}
}

export class sessionUtil{
	/**
	 * session前缀
	 * @return {[type]} [description]
	 */
	static _key=(key)=>{
		return "ltn_" + key;
	}

	/**
	 * 根据key获取session
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static get=(key)=> {
		return sessionStorage.getItem(sessionUtil._key(key));
	}

	/**
	 * 设置session
	 * @param  {[type]} key [description]
	 * @param  {[type]} val [description]
	 * @return {[type]}     [description]
	 */
	static set=(key,val)=> {
		return sessionStorage.setItem(sessionUtil._key(key),val);
	}

	/**
	 * 删除指定的session
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static del=(key)=> {
		return sessionStorage.removeItem(sessionUtil._key(key));
	}

	/**
	 * 清空session
	 * @return {[type]} [description]
	 */
	static clear=()=> {
		return sessionStorage.clear();
	}
}


/**
 * avigator帮助类
 */
export class avigatorUtil{
	/**
	 * 头部信息
	 * @type {[type]}
	 */
	static userAgent=navigator.userAgent;

	/**
	 * 是否为ipad
	 */
	static isIPad= () => {
    	return (avigatorUtil.userAgent.indexOf("iPad") > -1);
	}

	/**
	 * 是否为iphone
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */
	static isIPhone = ()=> {
    	return (avigatorUtil.userAgent.indexOf("iPhone") > -1);
	}

	/**
	 * 是否为ios系统
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */
	
	static isIOS = ()=> {
	    return avigatorUtil.isIPad(avigatorUtil.userAgent) || avigatorUtil.isIPhone(avigatorUtil.userAgent);
	}

	/**
	 * 是否为Android系统
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */
	static isAndroid = ()=> {
	    return (avigatorUtil.userAgent.indexOf("Android") > -1) ||
	        (avigatorUtil.userAgent.indexOf("Linux") > -1);
	}

	/**
	 * 判断是否为微信
	 */
	static isWeixin= () =>{
		return (avigatorUtil.userAgent.indexOf("MicroMessenger") > -1);
	}
}


export class dataUtil{
	/**
	 * [获取数据方法]
	 * @param  {[type]} url         [访问接口地址]
	 * @param  {[type]} method      [get post]
	 * @param  {[type]} param       [传递过去的参数 字符串格式 如 "clientType='M'&userName='小钱'"]
	 * @param  {[type]} successCall [成功回调函数]
	 * @param  {[type]} errorCall   [resultCode不等于0回调函数]
	 * @param  {[type]} errorCall2   [访问出错的回调函数]
	 * @return {[type]}             [description]
	 */
	static getData=(url,method,param,successCall,errorCall,errorCall2)=>{
    	fetch(url,{
    		method: method,
    		 headers: {
        		"Content-Type": "application/x-www-form-urlencoded"
   			},
    		body: param
    	})
    	.then((res) => { 
    		if (res.ok) {
		        res.json().then((data)=> {
		        	if(data.resultCode=='0'){
		        		successCall(data);
		        	}else{
		        		errorCall(data);
		        	}
		        })
		    }
    	})
		.catch((e) => {
			errorCall2(e);
		});	
	}
}	
		