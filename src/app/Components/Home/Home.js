import React from 'react';
import './Home.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Store from '../Store/Store';
import Order from '../Order/Order';
import AddGood from '../AddGood/AddGood';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HomeOutlined,
  createFromIconfontCN,
  PlusOutlined
} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});


const Home = () => {
  return (<div className="home icons-list">
    <Router>
    <ul>
        <li>
          <NavLink exact to='/' className='nav'><HomeOutlined /><span  className='link'>商城</span></NavLink>
        </li>
        <li>
          <NavLink to='/order' className='nav'>
            <IconFont type="icon-shoppingcart" /><span  className='link'>订单</span></NavLink>
        </li>
        <li>
          <NavLink to='/add'className='nav' >          
            <PlusOutlined /><span className='link'>添加商品</span></NavLink>
        </li>
    </ul>
    <div className='wrap'>
    <div className='content'>
    <Switch>            
            <Route exact path='/' component={Store}  />
            <Route path='/order' component={Order}  />
            <Route path='/add' component={AddGood}  />
    </Switch>
    </div>
    <footer>TW Mall @2020 Created by ForCheng</footer>
    </div>
    
    </Router>
  </div>);
};

export default Home;