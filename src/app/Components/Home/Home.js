import React from 'react';
import './Home.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Store from '../Store/Store';
import Order from '../Order/Order';
import AddGood from '../AddGood/AddGood';

const Home = () => {
  return (<div className="home">
    <Router>
    <ul>
        <li>
          <NavLink to='/' className='link' style={{color:'white'}}>商城</NavLink>
        </li>
        <li>
          <NavLink to='/order' className='link' style={{color:'white'}}>订单</NavLink>
        </li>
        <li>
          <NavLink to='/add' className='link'style={{color:'white'}}>添加商品</NavLink>
        </li>
    </ul>
    <Switch>            
            <Route exact path='/' component={Store}  />
            <Route path='/order' component={Order}  />
            <Route path='/add' component={AddGood}  />
    </Switch>
    </Router>
  </div>);
};

export default Home;