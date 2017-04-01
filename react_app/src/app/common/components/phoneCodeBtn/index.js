import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { config,strUtil,dataUtil } from '../../../.././utils/js/public.js';

//创建图形验证码组件
export default class PhoneCode extends Component{
	//构建函数
	constructor(props){
		super(props);
		this.state={
			phoneText: '获取验证码'
		}
	}
	//组件渲染完成
	componentDidMount(){

	}

	//计时器
	timming=()=>{
		//更新按钮状态为不可以点击
		this.props.updatePhoneState(true);
		let num=60;
		let time=setInterval(()=>{
			if(num>0){
				num--;
				this.setState({phoneText: `${num}s`});
			}else{
				this.setState({phoneText: '重新获取'});
				//更新按钮状态为可以点击
				this.props.updatePhoneState(false);
				clearInterval(time);
			}		
		},1000);
	}	

	//获取数据
	fetchData= ()=>{
		let url=`${config.baseUrl}/mobile/mobilecode/h5/getMobileCode/byMachineNo.json`
    	let param=`clientType=M&sendType=1&mobileNo=${this.props.telephone}&machineNo=${this.props.guid}&pictureCode=${this.props.imgCode}`;
    	let successCall=(data)=>{
    		this.setState({ 
				loading: false
			});
			this.timming();//开始计时器
    	}
    	let errorCall=(data)=>{
    		this.props.updateGuid();//更新guid
		    this.props.updateText(data.resultMessage,true);//更新弹窗
		    //用户已注册
		    if(data.resultCode=='10000011'){
		    	window.location.href='../activity_lover_register_success/activity_lover_register_success.html?success=true';
		    }
    	}
    	let errorCall2=(e)=>{
    		this.props.updateGuid();//更新guid
		    this.props.updateText(e.message,true);//更新弹窗
    	}
    	dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
    }

	render(){
		return(
			<input value={this.state.phoneText} type='button' {...this.props} onClick={this.fetchData} />
		)
	}
}