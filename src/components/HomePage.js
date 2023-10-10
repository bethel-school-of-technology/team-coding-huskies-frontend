import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import UserContext from '../contexts/UserContext';
import PlayerContext from '../contexts/PlayerContext';

function HomePage() {
   const { player, addPlayer } = useContext(PlayerContext);
  const { users } = useContext(UserContext);
  const [newPodcast, setNewPodCast] = useState('');
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPodcast.trim() !== '') {
    //   addPlayer({ Podcast: newPodcast });
      setNewPodCast('');
    }
  };

  useEffect(() => {
    setIsUserAuthenticated(users !== null);
  }, [users]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Podcast</Card.Title>
           <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newPodcast">
              <Form.Control
                type="text"
                placeholder="Copy Link Here"
                value={newPodcast}
                onChange={(event) => setNewPodCast(event.target.value)}
              />
            </Form.Group>
            {isUserAuthenticated ? (
              <Button variant="primary" type="submit">
                Post
              </Button>
            ) : null}
          </Form> 
          <div>
            {/* {player.map((player) => {
              const { id, player, podcast, createdAt, userId } = player;
              const currentUser = users.find((u) => u.id === userId);
              const { name, username } = currentUser || {};
              return (
                <Card key={id}>
                  <Card.Body>
                    <Card.Text>
                      {podcast} <br></br>User: {name}<br></br>
                      Username: <Link to={`/users/${userId}`}>{username}</Link>
                      <br></br>created at: {createdAt}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })} */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
