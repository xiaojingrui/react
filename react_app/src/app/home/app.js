import ReactDom from 'react-dom';
import React from 'react';
import Home from './components/container/index.js';
import { config } from '../.././utils/js/public.js';
import '../.././utils/scss/public.scss';
//获取url地址
let url=config.baseUrl+"/homepage/recommend?clientType=M&&sessionKey=8f35beef5f0054d57d8aadb88d50d436";
ReactDom.render(<Home url={url} />, document.getElementById('root'));