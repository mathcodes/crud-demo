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
      <Row>
        <Col>ID</Col>
        <Col>#</Col>
        <Col>Name</Col>
        <Col>Favorite Number</Col>
        <Col sm={1}><i className="fa fa-check-circle" /></Col>
        <Col sm={1}><i className="fa fa-edit" /></Col>
        <Col sm={1}><i className="fa fa-trash" /></Col>
      </Row>
      {items.map((item, index) => (
    
        <Row key={item.id}>
          <Col className={`list ${item.completed ? 'complete': ''}`}>{item.id}</Col>
          <Col className={`list ${item.completed ? 'complete': ''}`}>{index + 1}</Col>
          <Col className={`list ${item.completed ? 'complete': ''}`}>{item.title}</Col>
          <Col className={`list ${item.completed ? 'complete': ''}`}>{item.favoriteNumber}</Col>
          <Col sm={1}><Button onClick={()=>handleComplete(item)}><i className="fa fa-check-circle" /> </Button></Col>
          <Col sm={1}><Button onClick={()=>handleEdit(item)}><i className="fa fa-edit" /> </Button></Col>
          <Col sm={1}><Button onClick={()=>handleDelete(item)}><i className="fa fa-trash" /> </Button></Col>
        </Row>
        
      ))}
      <Row>
        <Col>ID</Col>
        <Col>#</Col>
        <Col>Name</Col>
        <Col>Favorite Number</Col>
        <Col sm={1}><i className="fa fa-check-circle" /></Col>
        <Col sm={1}><i className="fa fa-edit" /></Col>
        <Col sm={1}><i className="fa fa-trash" /></Col>
      </Row>
    </Container>
  )
}

export default ItemsList
