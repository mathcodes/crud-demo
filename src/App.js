import React, { Component } from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  render() {
    var heading = ['Col1', 'Col2', 'Col3'];
    var body =
      [['R1C1', 'R1C2', 'R1C3'],
      ['R2C1', 'R2C2', 'R2C3'],
      ['R3C1', 'R3C2', 'R3C3']
      ];
    return (
      <div>
        <Form />
        <Table heading={heading} body={body} />,
      </div>
    );
  }
}

export default App;
