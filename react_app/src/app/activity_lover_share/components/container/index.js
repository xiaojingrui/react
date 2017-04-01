import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { avigatorUtil,config } from '../../../.././utils/js/public.js';
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
		this.state={
			share: false //是否显示分享
		}
	}
	//组件完成加载
	componentDidMount(){

	} 

	/**
	 * 定制告白点击事件
	 * @return {[type]} [description]
	 */
	btnRegister=()=>{
		let url=`../activity_lover_register/activity_lover_register.html`;
		window.location.href=url;
	}

	/**
	 * 分享按钮点击事件
	 */
	btnShare=()=>{
		this.setState({share: true});
	}

	/**
	 * 关闭分享层
	 * @return {[type]} [description]
	 */
	closeShare= () =>{
		this.setState({share: false});
	}

	render(){	
		let share;
		let isShow=()=>{
			if(this.state.share){
				share=<div><div className="share-img show"></div>
					<div className="share-wrap show" onClick={this.closeShare}></div>
					<div className="share-text show"></div></div>;
			}else{
				share=<div><div className="share-img"></div>
					<div className="share-wrap" onClick={this.closeShare}></div>
					<div className="share-text"></div></div>;	
			}
		}
		isShow();
		return(	
			<div className='container'>
				<img src="../image/icon/icon-share.jpg" className="weixin-share-icon" />
				<div className="activity-title"></div>
				<div className="activity-code"></div>
				<div className="btn-register" onClick={this.btnRegister}></div>
				<div className="btn-share" onClick={this.btnShare} ></div>
				{ share }
			</div>
		)
	}
}