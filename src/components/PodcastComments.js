import React from "react";
import { Card, Button, ListGroup, Modal, Form, CardTitle } from "react-bootstrap";
import podcasts from "../TestPodcastTable";

function fixRawBuzzLink(dirtyLink) {
  if (typeof dirtyLink !== 'string') {
    dirtyLink = String(dirtyLink);
  }
  let cleanLink = dirtyLink.replace(/"/g, "'");
  return cleanLink;
}

function PodcastComments() {
    return ( 
        <>
        <Card>
            <Card.Title>Weekly Podcast</Card.Title>
            <Card.Body>
                <Card>
                    <Card.Body>
                    <CardTitle>{podcasts[0].title}</CardTitle>
                    {podcasts[0].podLink}
                    </Card.Body>
                </Card>
                <Form>
                <Form.Group controlId="addcomments">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="comment here"
                    //  value={addPodcast}
                    // onChange={e => setAddPodcast(e.target.value)}
                  />
                </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        </>
     );
    }
export default PodcastComments;