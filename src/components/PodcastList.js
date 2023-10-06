import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";


function PodcastList() {
    const [podcastData, setPodcastData] = useState(' ');
    const [addPodcast, setAddPodcast] = useState(false);

    useEffect(() => {
        async function getPodcast () {
            const response = await axios.get("http://localhost:3001/podcasts/0")
            setPodcastData(response.podcasts.title)
        }
    })


    const handleClose = () => setAddPodcast(false);
    const handlePodcast = () => setAddPodcast(true);

    const updatePodcastData = (newData) => {
        setPodcastData(newData);
    

    const handleSelectPodcast = (podcasts) => 
        Navigate(`/podcast/${podcasts.id}`);
    return ( 
        <div>
          <img src="/images/logo.jpeg" height="200"/>
      <Card>
        <Card.Img variant="top"  />
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
                  <Form.Control
                    type="text"
                    placeholder="Enter Podcast Title Here"
                    //  value={addPodcast}
                    // onChange={e => setAddPodcast(e.target.value)}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Enter Podcast Description"
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
                {/* The JSON information will need to be entered here and each item needs to be conected 
          by the id for the podcast which will link to the podcast Id. Will update route when
          when getting clarification. */} 
          {podcastData.map((podcast) => (
    <ListGroup.Item
    key={podcast.id}
    onClick={() => handleSelectPodcast(podcast)}
  >
    {podcast.title}
    </ListGroup.Item>
  ))}
          
        </ListGroup>
      </Card.Body>
    </Card>
        </div>
     );
}
}

export default PodcastList;