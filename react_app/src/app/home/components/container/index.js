import React,{Component} from 'react';//引入react
import 'es6-promise/dist/es6-promise.min.js';
import './index.scss'//引入样式
import Banner from '../../.././common/components/banner/index.js';//引入banner组件

//创建banner组件
export default class Home extends Component{

	//构建函数
	constructor(props){
		super(props);
		this.state={
			loading: true,
			list: []
		};
	}

	//组件渲染完成
	componentDidMount(){
		this.fetchCityData();
	}
	//获取数据
	fetchCityData (){
    	fetch(this.props.url)
    		.then((res) => { console.log(res.status); return res.json();})
    		.then((data) => { 
    			this.setState({ 
    				loading: false,
    				list: data.data.bannersList
    			});
    		})
    		.catch((e) => {console.log(e.message);});
    }
	render(){
		return(
			< Banner loading={this.state.loading} list={this.state.list} />
		)
	}
}