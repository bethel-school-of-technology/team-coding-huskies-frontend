import { useState, useContext } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";


function PodcastDetail() {
    const [addPodcast, setAddPodcast] = useState(false);

    return ( 
        <div>
          <img src="/images/logo.jpeg" height="200"/>
      <Card>
        <Card.Img variant="top"  />
          <Card.Body>
            <Card.Title>Selected PodCast</Card.Title>
            {/* insert player here */}
            {/*Instert description data */}
            <Card.Subtitle>Description of the the Podcast</Card.Subtitle>
            <Button variant="primary">Play</Button>
            
           
      </Card.Body>
    </Card>
        </div>
     );
}

export default PodcastDetail;