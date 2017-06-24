import React, { Component } from 'react';
import {Button,Page} from '@shopify/polaris';
import {Alert} from '@shopify/polaris/embedded'
import * as Polaris from '@shopify/polaris';
console.log(" Polaris: ",Polaris);
class Products extends Component {
  render() {
    return (<div>product</div>)

      // return (
    //   <Page
    //   breadcrumbs={[
    //     {content: 'Products'}
    //   ]}
    //   title="Jar With Lock-Lid"
    //   primaryAction={{content: 'Save', disabled: true}}
    //   secondaryActions={[
    //     {content: 'Duplicate'},
    //     {content: 'View on your store'},
    //   ]}
    //   pagination={{
    //     hasPrevious: true,
    //     hasNext: true,
    //   }}
    // >
    //   <p>Page content</p>
    // </Page>
    // );
  }
}

export default Products;
