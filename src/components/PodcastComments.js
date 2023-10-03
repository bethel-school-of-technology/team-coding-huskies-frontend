import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
function PodcastComments() {
    return ( 
        <>
        <Card>
            <Card.Title>Weekly Podcast</Card.Title>
            <Card.Body>
                <Card>
                    <Card.Body>
                        insert podcast info here. 
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