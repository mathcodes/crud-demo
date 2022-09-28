import React from 'react'

function TableRow(props) {
  var row = props.row;
  return (
    <tr>
      {row.map(val => <td>{val}</td>)}
    </tr>
  )
}

export default TableRow;