import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function ItemsList({ items, setItems, setEditItem }) {

  const handleDelete = ({id}) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleComplete = (item) => {
    setItems(
      items.map((entry) => {
        if(entry.id === item.id){
          return {...entry, completed: !entry.completed}
        }
        return entry;
      })
    );
  };

  const handleEdit = ({id}) => {
    const findItem = items.find((item) => item.id ===id);
    setEditItem(findItem);
  };

  

  return (
    <Container>
      <Row className="headerRow">
        <Col sm={1}>#</Col>
        <Col>Name</Col>
        <Col sm={3}>Favorite Number</Col>
        <Col sm={1}><i className="fa fa-check-circle" /></Col>
        <Col sm={1}><i className="fa fa-edit" /></Col>
        <Col sm={1}><i className="fa fa-trash" /></Col>
      </Row>
      {items.map((item, index) => (
    
        <Row className={`list ${item.completed ? 'bodyRowComplete': 'bodyRow'}`} key={item.id}>
          <Col sm={1} className={`list ${item.completed ? 'complete': ''}`}>{index + 1}</Col>
          <Col >{item.title}</Col>
          <Col sm={3} className={`list ${item.completed ? 'complete': ''}`}>{item.favoriteNumber}</Col>
          <Col sm={1}><Button className="button" onClick={()=>handleComplete(item)}><i className="fa fa-check-circle" /> </Button></Col>
          <Col sm={1}><Button className="button" onClick={()=>handleEdit(item)}><i className="fa fa-edit" /> </Button></Col>
          <Col sm={1}><Button className="button" onClick={()=>handleDelete(item)}><i className="fa fa-trash" /> </Button></Col>
        </Row>
        
      ))}
      <Row className="headerRow">
        <Col sm={1}>#</Col>
        <Col>Name</Col>
        <Col sm={3}>Favorite Number</Col>
        <Col sm={1}><i className="fa fa-check-circle" /></Col>
        <Col sm={1}><i className="fa fa-edit" /></Col>
        <Col sm={1}><i className="fa fa-trash" /></Col>
      </Row>
    </Container>
  )
}

export default ItemsList
