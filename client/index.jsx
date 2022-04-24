import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Route/index.jsx';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)