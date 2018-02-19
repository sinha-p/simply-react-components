import React from 'react';
import { render } from 'react-dom';

import { SButton } from './components';

class App extends React.Component {

  render () {
    return (
      <div>
        <SButton theme="primary"> Primary </SButton>
        <SButton theme="danger"> Danger </SButton>
        <SButton theme="outline"> OUTLINE </SButton>
        <SButton style={ {background:"#60b040", color: "#f0f0f0", borderRadius: "1.5rem"} }> CUSTOM </SButton>
      </div>
    );
  }
}

console.log(document.getElementById( 'sandbox' ));

render(<App/>, document.getElementById( 'sandbox' ));
