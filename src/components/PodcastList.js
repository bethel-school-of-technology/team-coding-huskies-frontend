import React, { useEffect, useState, useContext } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import UserContext from "../contexts/UserContext";

function PodcastList() {
  console.log("Podcast List rendered");
  const { isAuthenticated } = useContext(UserContext);
  const [podcastData, setPodcastData] = useState({
    id: null, // Initialize with null for new podcasts
    title: "",
    description: "",
    podcastLink: "",
  });

  const { podcasts, newPodcast, updatePodcast } = useContext(PlayerContext);
  const navigate = useNavigate();

  const { id, title, description, podcastLink } = podcastData;
  const [addPodcast, setAddPodcast] = useState(false);

  const handlePodcast = () => setAddPodcast(true);

  function handleChange(event) {
    setPodcastData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  }

  function addOrUpdate() {
    if (id === null) {
      newPodcast(podcastData)
        .then((podcast) => {
          navigate(`/podcast/detail/${podcast.id}`);
          setAddPodcast(false); // Close the modal
        });
    } else {
      updatePodcast(podcastData)
        .then(() => {
          navigate(`/podcast/detail/${id}`);
          setAddPodcast(false); // Close the modal
        });
    }
  }

  const handleSelectPodcast = (podcast) => {
    navigate(`/podcast/detail/${podcast.id}`);
  };
  

  return (
    <div>
      <img src="/images/logo.jpeg" height="200" />
      {isAuthenticated ? (
      <>
       <Button
                onClick={handlePodcast}
                variant="outline-dark"
                style={{ width: '3rem', height: '3rem', position: 'right' }}
                className='rounded-circle'
              >
                +
              </Button>
              </>
      ) : (
        <></>
      )
   }
      <Card>
      
        {/* ... ( Card content goes here) */}
        <ListGroup>
          {podcasts.map((podcast) => (
            <ListGroup.Item >
            <Card>
              <h5>{podcast.title}</h5>
              {podcast.description}
                <Button key={podcast.id}
                onClick={() => handleSelectPodcast(podcast)}
                style={{ width: '10rem', height: '3rem', position: 'right' }} className="button-color"
                >Go to Podcast</Button>
                
                </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <Modal show={addPodcast} onHide={() => setAddPodcast(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Podcast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addOrUpdate}>
            <Form.Group controlId="addingPodcast">
              <Form.Label>Enter Podcast</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Podcast Link Here"
                name="podcastLink"
                value={podcastLink}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                placeholder="Enter Podcast Title Here"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <Form.Control
                type="text"
                placeholder="Enter Podcast Description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAddPodcast(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addOrUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default PodcastList;

  
