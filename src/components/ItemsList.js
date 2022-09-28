import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

function ItemsList({ items, setItems }) {

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
  
  return (
    <Container>
      <Row>
        <Col>ID</Col>
        <Col>Name</Col>
        <Col>Favorite Number</Col>
        <Col sm={1}><i className="fa fa-check-circle" /></Col>
        <Col sm={1}><i className="fa fa-edit" /></Col>
        <Col sm={1}><i className="fa fa-trash" /></Col>
      </Row>
      {items.map((item) => (
        
        <Row key={item.id}>
          <Col>{item.id}</Col>
          <Col>{item.title}</Col>
          <Col>{item.favoriteNumber}</Col>
          <Col sm={1}><Button onClick={()=>handleComplete(item)}><i className="fa fa-check-circle" /> </Button></Col>
          <Col sm={1}><Button><i className="fa fa-edit" /> </Button></Col>
          <Col sm={1}><Button onClick={()=>handleDelete(item)}><i className="fa fa-trash" /> </Button></Col>
        </Row>
       
      ))}
    </Container>
  )
}

export default ItemsList
