import React from 'react'

function ItemsList({ items, setItems }) {
  return (
    <div>
      {items.map((item) => (
        <div className="row" key={item.id}>
          <div className="col">{item.id}</div>
          <div className="col">{item.title}</div>
          <div className="col">item.dataSpot3</div>
        </div>
      ))}
    </div>
  )
}

export default ItemsList
