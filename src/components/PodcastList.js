import React, { useEffect, useState, useContext } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";

function PodcastList() {
  console.log("Podcast List rendered");

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
      <Button
                onClick={handlePodcast}
                variant="outline-success"
                style={{ width: '3rem', height: '3rem', position: 'top-right' }}
                className='rounded-circle'
              >
                +
              </Button>
      <Card>
      
        {/* ... (Your Card content here) */}
        <ListGroup>
          {podcasts.map((podcast) => (
            <ListGroup.Item
              key={podcast.id}
              onClick={() => handleSelectPodcast(podcast)}
            >
              {podcast.title}
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

  
