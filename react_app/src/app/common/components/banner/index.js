import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { swiper } from 'swiper';


//创建banner组件
export default class Banner extends Component{
	//构建函数
	constructor(props){
		super(props);
	}

	//接收新的prop
	componentWillReceiveProps(props){
		console.log(props);
	}
	//组件完成更新
	componentDidUpdate(){
		this.initSwiper();
	}
	/**
	 * 初始化滚动
	 * @return {[type]} [description]
	 */
	initSwiper(){
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true
		});
	}
	render(){
		let tempList=[];
		//获取图片列表
		this.props.list.map(function(elem, index) {
			tempList.push(<div className='swiper-slide' key={elem.bannerId}>
						<a href={elem.linkUrl}><img src={elem.bannerUrl} /></a>
						</div>
					);	
				
		})
		//根据状态渲染页面
		let banner;
		if (this.props.loading){
			banner=<div>正在加载...</div>
		}else{			
			banner=
			<div className='swiper-container'>
				<div className='swiper-wrapper'>	
					{ tempList }
				</div>	
				<div className='swiper-pagination'></div>	
			</div>
		}
		return(
			<div>
				{ banner }
			</div>
		)
	}
}