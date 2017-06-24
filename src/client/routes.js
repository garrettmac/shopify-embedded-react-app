import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {EmbeddedApp, ResourcePicker} from '@shopify/polaris/embedded'
import App from './app'
import Products from './Pages/Products'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter >
        <EmbeddedApp {...window.shopSession} forceRedirect>
          <div>
            <Route exact path='/' component={App} />
            <Route path='/products' component={Products} />
          </div>
        </EmbeddedApp>
      </BrowserRouter>
    );
  }
}

export default Routes;
