import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../client/container/home/index.jsx';
import School from '../client/container/school/index.jsx'

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/school' exact component={School}></Route>
  </div>
)