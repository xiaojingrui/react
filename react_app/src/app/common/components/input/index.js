import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from '../../../.././utils/js/public.js';
/**
 * 验证为空：required 默认为验证
 * 为空提示：emptyTip
 * 错误提示：errorTip
 * 表单类型：dataType
 * username;只能输入5-20个以字母开头、可带数字、“_”、“.”的字串 
 * password;只能输入6-18个字母与数字的组合,没有特殊字符
 * telephone:手机号码
 * identity: 身份证
 * email：邮件
 * url: 网址
 * imgCode: 图形验证码
 * phoneCode: 手机验证码
 * bankcard: 银行卡
 * money: 金钱
 */
/**
 * 验证规则
 * @type {Object}
 */
var rule={
	'username': '^[\u4e00-\u9fa5]{2,3}$',
	'password': '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$',
	'telephone': '^1[3|4|5|7|8][0-9]{9}$',
	'identity': '^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$',
	'email': "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
	'url': '^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$',
	'imgCode': '^[a-zA-Z0-9]{4}$',
	'phoneCode': '^[a-zA-Z0-9]{4}$',
	'bankcard': '^\d{12,19}$',
	'money': '^[0-9]{1}[\d]*\.?[\d]{0,2}$'
}
/**
 * 为空提示
 * @type {Object}
 */
var emptyTips={
	'username': '姓名不能为空!',
	'password': '密码不能为空!',
	'telephone': '手机号码不能为空!',
	'identity': '身份证不能为空!',
	'email': "邮箱不能为空",
	'url': '网址不能为空!',
	'imgCode': '图形验证码不能为空!',
	'phoneCode': '手机验证码不能为空!',
	'bankcard': '银行卡号不能为空!',
	'money': '金钱不能为空!'
}

/**
 * 错误提示
 * @type {Object}
 */
var errorTips={
	'username': '用户名为5-20个以字母开头、可带数字、_、.',
	'password': '密码为6-18个字母与数字的组合,没有特殊字符',
	'telephone': '手机号码为11位有效号码',
	'identity': '身份证格式错误',
	'email': "邮箱格式错误",
	'url': '网址格式错误',
	'imgCode': '图形验证码错误',
	'phoneCode': '手机验证码错误',
	'bankcard': '银行卡号不符合规则',
	'money': '金钱不符合规则'
}

/**
 * 默认placeholder值
 * @type {Object}
 */
var placeholders={
	'username': '请输入用户名',
	'password': '请输入6-18位字母与数字的组合',
	'telephone': '请输入手机号码',
	'identity': '请输入身份证',
	'email': "请输入邮箱",
	'url': '请输入网址',
	'imgCode': '请输入图形验证码',
	'phoneCode': '请输入手机验证码',
	'bankcard': '请输入银行卡号',
	'money': '请输入金额'
}

var ruleValue;//input验证规则
var emptyTip;//为空提示
var errorTip;//错误提示
var placeholder;//placeholder
/**
 * input 组件
 * 默认为需要验证 required 为空
 * errorTip emptyTip placeholder 默认存在,可以选择性填写
 * rule 验证规则默认存在,可以选择性填写
 * dataType 类型根据input需要类型填写
 */
export default class Input extends Component{
	//设置默认props
	static defaultProps={
		dataType: '',
		placeholder:'',
		rule: '',
		emptyTip: '',
		errorTip: '',
		required: true
	}
	//构建函数
	constructor(props){
		super(props);
	}
	//获取input的验证规则
	initAttr(){
		//验证规则初始化
		if(strUtil.isEmpty(this.props.rule)){
			ruleValue=rule[this.props.dataType];
		}else{
			ruleValue=this.props.rule;//获取input的验证规则
		}	
		//为空提示初始化
		if(strUtil.isEmpty(this.props.emptyTip)){
			emptyTip=emptyTips[this.props.dataType];
		}else{
			emptyTip=this.props.emptyTip;//获取为空提示
		}	
		//错误提示初始化
		if(strUtil.isEmpty(this.props.errorTip)){
			errorTip=errorTips[this.props.dataType];
		}else{
			errorTip=this.props.errorTip;//获取错误提示
		}	
		//placeholder初始化
		if(strUtil.isEmpty(this.props.placeholder)){
			placeholder=placeholders[this.props.dataType];
		}else{
			placeholder=this.props.placeholder;//获取placeholder
		}
	}
	//组件完成更新
	componentDidUpdate(){
		
	}
	//inputChange
	inputChange=(e)=>{
		let type=this.props.index;
		let text=e.target.value;
		//验证用户输入的规则,记录是否正确
		let isTrue;
		//是否需要验证
		if(this.props.required){
			isTrue=this.testValue2(text);//验证用户是否输入正确
		}
		this.props.updateValue(text,type,isTrue);//更新用户输入的内容
	}
	/**
	 * [验证是否符合规则],执行对应的操作,弹窗提示框
	 */
	testValue=(str)=>{
		this.initAttr();
		if(strUtil.isEmpty(str)){
			this.props.updateText(emptyTip,true);
		}else{
			var testRegex=new RegExp(ruleValue);
			//如果匹配
			if(testRegex.test(str)){

			}else{//不匹配
				// this.refs.input.value="";//清空值
				// this.refs.input.focus();//焦点集中
				this.props.updateText(errorTip,true);
			}
			 
		}		
	}
	/**
	 * [验证是否符合规则],执行对应的操作,返回对错,不弹窗
	 */
	testValue2=(str)=>{
		let isTrue=true;
		this.initAttr();
		if(strUtil.isEmpty(str)){
			isTrue=false;
		}else{
			var testRegex=new RegExp(ruleValue);
			//如果匹配
			if(testRegex.test(str)){

			}else{//不匹配
				isTrue=false;
			}
		}	
		return isTrue;	
	}
	//inputBlur
	inputBlur=(e)=>{
		let value=e.target.value;
		//是否需要验证
		if(this.props.required){
			this.testValue(value);
		}
	}
	render(){
		this.initAttr();
		var {...other} = this.props;
		return(
			<input {...other} placeholder={placeholder} onChange={this.inputChange} 
			onBlur={this.inputBlur} ref="input" />
		)
		
	}
}