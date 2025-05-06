import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';


const AddMovies = ({movies,setmovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState ('')
    const [description , setDescription] = useState ('')
    const [image , setImage ] = useState ('')
    const [rating , setRating] = useState (0)
const handleAddmovie = () => setmovie ([...movies , {title , description , image , rating}])


    return (
        <>
            <Button variant="success" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control  onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter Title" />

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control  onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter Description" />

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Image</Form.Label>
                            <Form.Control  onChange={(e)=> setImage(e.target.value)} type="text" placeholder="Enter Image" />

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Rating</Form.Label>
                            <br>
                            </br>
                            <Rating  onChange={(e)=> setRating(e.target.value)} />

                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleAddmovie () ; handleClose()}}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AddMovies 