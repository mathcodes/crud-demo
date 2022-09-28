import React from 'react';
import TableRow from './TableRow';

function Table(props) {
  var heading = props.heading;
  var body = props.body;
  return (
    <>
      <table style={{ width: 500 }}>
        <thead>
          <tr>
            {heading.map(head => <th>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map(row => <TableRow row={row} />)}
        </tbody>
      </table>
    </>
  )
}

export default Table;
