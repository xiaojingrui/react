import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from '../../../common/components/alert/index.js';//引入alert组件
import Input from '../../../common/components/input/index.js';//引入input组件
import ImgCode from '../../../common/components/imgCode/index.js';//引入图形验证码组件
import PhoneCode from '../../../common/components/phoneCodeBtn/index.js';//引入手机验证码组件
import Loading from '../../../common/components/loading/index.js';//引入loading组件
/**
 * 引入fetch
 */
import 'es6-promise/dist/es6-promise.min.js';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,urlUtil } from '../../../.././utils/js/public.js';
var dept=urlUtil.getSearch('dept');//渠道标识
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
		this.state={
			text: '',
			show: false,//默认不显示
			telephone: '',
			imgCode: '',
			phoneCode: '',
			password: '',
			loading: true,
			disabled: true,//获取验证码按钮是否禁用
			phoneIsTrue: false,//手机号码是否正确
			imgIsTrue: false, //图形验证码是否正确
			isLoading: false,//是否加载中
			guid: strUtil.getGuid() //机器码
		}
	}


	//修改提示框内容
	updateText=(text,show)=>{
		this.setState({text: text,show: show});
		//如果show为true
		if(show){
			setTimeout(()=>{this.setState({show: false});},1000);
		}
	}

	//同步用户更新的内容
	updateValue=(text,type,isTrue)=>{
		switch(type){
			case '1':
				//判断手机号码和图片验证码是否正确
				if(isTrue&&this.state.imgIsTrue){
					this.setState({telephone: text,phoneIsTrue: isTrue,disabled: false});	
				}else{
					this.setState({telephone: text,phoneIsTrue: isTrue,disabled: true});	
				}
	
			break;
			case '2':
				//判断手机号码和图片验证码是否正确
				if(isTrue&&this.state.phoneIsTrue){
					this.setState({imgCode: text,imgIsTrue: isTrue,disabled: false});	
				}else{
					this.setState({imgCode: text,imgIsTrue: isTrue,disabled: true});
				}
			break;
			case '3':
				this.setState({phoneCode: text});
			break;
			case '4':
				this.setState({password: text});
			break;
		}
	}

	//更新获取验证码的disabled状态
	updatePhoneState=(state)=>{
		this.setState({disabled: state});
	}

	//更新图形验证码 guid
	updateGuid=()=>{
		this.setState({guid: strUtil.getGuid()});
	}

	//提交注册
	submit = () =>{
		this.setState({isLoading: true});//设置为加载中...
		let url=`${config.baseUrl}/user/register/registerUser.json`;
    	let param=`clientType=HTML5&readAndAgree=1&dept=${dept}&mobileNo=${this.state.telephone}&password=${this.state.password}&mobileCode=${this.state.phoneCode}`;
    	let successCall=(data)=>{
    		this.setState({isLoading: false});
    		window.location.href='../activity_lover_register_success/activity_lover_register_success.html?success=false';
    	}
    	let errorCall=(data)=>{
    		this.setState({isLoading: false});
    		this.updateGuid();//更新guid
		    this.updateText(data.resultMessage,true);//更新弹窗
    	}
    	let errorCall2=(e)=>{
    		this.setState({isLoading: false});
    		this.updateGuid();//更新guid
		    this.updateText(e.message,true);//更新弹窗
    	}
    	dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
	}

	render(){	
		var phone;
		let getPhone=()=>{
			if(this.state.disabled){
				phone=<PhoneCode className='phone-code disabled'
				 disabled guid={this.state.guid} telephone={this.state.telephone} 
				 updateGuid={this.updateGuid} updateText={this.updateText}
				  imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState} />
			}else{
				phone=<PhoneCode className='phone-code' 
				 guid={this.state.guid} telephone={this.state.telephone}  
				 updateGuid={this.updateGuid}  updateText={this.updateText}
				 imgCode={this.state.imgCode} updatePhoneState={this.updatePhoneState} />
			}
		}
		getPhone();
		return(	
			<div className="container">
				<div className="activity-love-title"></div>
				<div className="wrap-register">
					<div className="wrap-input">
						<Input type="tel" className='input' 
						dataType='telephone' updateText={this.updateText} 
						index='1' updateValue={this.updateValue} />
					</div>
					<div className="wrap-input">
						<Input type="tel" className='code-input'
						dataType='imgCode' updateText={this.updateText} 
						index='2' updateValue={this.updateValue} />
						<ImgCode className='img-code' guid={this.state.guid} updateGuid={this.updateGuid} />
					</div>
					<div className="wrap-input">
						<Input type="tel" className='code-input' 
						dataType='phoneCode' updateText={this.updateText} 
						index='3' updateValue={this.updateValue} />
						{ phone}
					</div>
					<div className="wrap-input">
						<Input type="password" className='input' 
						dataType='password' updateText={this.updateText} 
						index='4' updateValue={this.updateValue} />
					</div>
					<div className="love-btn" onClick={this.submit}></div>
				</div>
				<Alert text={this.state.text} show={this.state.show} />
				<Loading loading={this.state.isLoading} />
			</div>
		)
	}
}