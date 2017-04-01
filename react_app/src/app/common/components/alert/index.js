import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
export default class Alert extends Component{
	//构建函数
	constructor(props){
		super(props);
	}

	//组件完成更新
	componentDidUpdate(){
	}
	
	render(){
		var alertClass="alert-type1 "+(this.props.show?'show':'hide');
		return(
			<div>
				<div className={alertClass} key={this.props.text}>{this.props.text}</div>
			</div>
		)
	}
}