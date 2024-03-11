import React from 'react'
import Card from 'react-bootstrap/Card';


export default function ProductItem(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.data.image} />
    <Card.Body>
      <Card.Title>{props.data.title}</Card.Title>
      <Card.Text>
      {props.data.description}
      </Card.Text>
    </Card.Body>
   
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
    
  )
}
