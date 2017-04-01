import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import { urlUtil } from '../../../.././utils/js/public.js';

var phone=urlUtil.getSearch('telephone');//手机号
var loveName=urlUtil.getSearch('loveName');//告白对象
var loveUser=urlUtil.getSearch('loveUser');//告白人
var loveInfo=urlUtil.getSearch('loveInfo');//告白内容
var dept=urlUtil.getSearch('dept');//渠道标识
//根据br拆分成数组
var loveInfoList=loveInfo.split('<br>');
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
	}
	//组件完成加载
	componentDidMount(){
		
	}

	/**
	 * 定制告白点击事件
	 * @return {[type]} [description]
	 */
	btnClick=()=>{
		let url=`../activity_lover_register/activity_lover_register.html?dept=${dept}`;
		window.location.href=url;
	}

	render(){	
		let loveItem=[];
			loveInfoList.map(function(ele, index) {
				loveItem.push(<div className='love-item' key={index}>{ele}</div>);
		})
		return(	
			<div className='container'>
				<div className='love-info'>
					<p className='love-name'>{loveName}</p>
					{ loveItem }
					<p className='love-user'>{loveUser}</p>
				</div>
				<div className='love-btn' onClick={this.btnClick}></div>
			</div>
		)
	}
}