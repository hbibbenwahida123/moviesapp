import { Card } from "react-bootstrap"

import Rating from '@mui/material/Rating';


const CardMovies = ({el})=> {
    return (
        
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
         {el.description }
        </Card.Text>
        <Card.Text>
        <Rating name="read-only" value={el.rating} readOnly />
        
        </Card.Text>
        
      </Card.Body>
    </Card>
        
    )
}

export default CardMovies