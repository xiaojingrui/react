import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { avigatorUtil,config,urlUtil } from '../../../.././utils/js/public.js';
var success=urlUtil.getSearch('success');//是否是已经注册的用户
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
	//组件完成加载
	componentDidMount(){
		
	}

	/**
	 * 下载点击 
	 */
	 downloadClick=()=>{
	 	if(avigatorUtil.isWeixin()){
	 		window.location.href=config.weixinDownUrl;
	 	}else{
	 		let iosDownUrl='https://lnk0.com/4w5Qd4';
	 		let androidDownUrl='https://www.lingtouniao.com/app/sina_mama/lingtouniao.apk';
	 		//判断是否为ios
	 		if(avigatorUtil.isIOS()){
	 			window.location.href=iosDownUrl;
	 		}else{
	 			window.location.href=androidDownUrl;
	 		}
	 	}
	 }

	render(){
		let title;	
		let isSuccess=()=>{
			//已经注册过的用户
			if(success=='true'){
				title=<p className='title'>您已经是领投鸟用户</p>
			}else{
				title=<p className='title'>注册成功！</p>
			}
		}
		isSuccess();
		return(	
			<div className='container'>
				<div className='container-show'>
					{ title }
					<p className="activity-tip1">扫码关注微信公众号“领投鸟”,</p>
					<p className="activity-tip2">回复手机号+告白内容，</p>
					<p className="activity-tip2">即可获取你的专属玫瑰二维码！</p>
					<div className="activity-code">
						<img src="../image/activity_love/activity_lover_code1.png" />
					</div>
					<div className="download-btn" onClick={this.downloadClick}></div>
					<div className="activity-logo"></div>
				</div>
				
			</div>
		)
	}
}