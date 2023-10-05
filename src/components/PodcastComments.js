import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import podcasts from "../TestPodcastTable";

function PodcastComments() {
    let podcast = podcasts[0]( () => {
    return ( 
        <>
        <Card>
            <Card.Title>Weekly Podcast</Card.Title>
            <Card.Body>
                <Card>
                    <Card.Body>
                    {podcast.podLink}
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
     )});
}

export default PodcastComments;