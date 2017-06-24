import React, { Component } from 'react';
// import {Button} from '@shopify/polaris';
import {Page, Card, Button} from '@shopify/polaris';
// import {Alert} from '@shopify/polaris/embedded'
// import * as Polaris from '@shopify/polaris';
// import Logo from './assets/images/logo.png';

class App extends Component {
  // return (<Page
  //   icon={'./assets/images/logo.png'}
  //   title="Home">
  //   <Card sectioned>
  //     <Button onClick={() => alert('Button clicked!')}>Example button</Button>
  //   </Card>
  // </Page>);
  render() {

    return (
<Page

  title="Home"
    icon={'./assets/images/logo.png'}
  primaryAction={{
    content: 'Save',
    disabled: true,
  }}
  secondaryActions={[
    {content: 'Duplicate'},
    {content: 'View on your store'},
  ]}
  pagination={{
    hasPrevious: true,
    hasNext: true,
  }}
  fullWidth={false}
>
  <p>Page rr</p>
</Page>
);
  }
}

export default App;
