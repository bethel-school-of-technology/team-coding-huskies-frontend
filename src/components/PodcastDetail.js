import { useState } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";

function PodcastDetail() {
    const [addPodcast, setAddPodcast] = useState(false);

    const handleClose = () => setAddPodcast(false);
    const handlePodcast = () => setAddPodcast(true);
    return ( 
        <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Podcast</Card.Title>
            <div   style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handlePodcast} variant="outline-success" 
            style={{ width: '3rem', height: '3rem', position: 'left'}}
            className='rounded-circle'
            >+</Button>
            </div>

            <Modal show={addPodcast} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Podcast</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="addingPodcast">
                  <Form.Label>Enter PodCast</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Podcast Link Here"
                    //  value={addPodcast}
                    // onChange={e => setAddPodcast(e.target.value)}
                  />
                </Form.Group> 
                </Form>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
            <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
        </div>
     );
}

export default PodcastDetail;