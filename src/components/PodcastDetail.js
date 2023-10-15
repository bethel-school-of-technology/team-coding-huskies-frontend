import { useState, useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import UserContext from "../contexts/UserContext";


function PodcastDetail() {
  const {getPodcast, deletePodcast} = useContext(PlayerContext);
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);
  const [podcast, setPodcast] = useState({});
  let params = useParams();
  let id = params.id


  useEffect(() => {

    async function fetch() {
      await getPodcast(params.id)
        .then((data) => setPodcast(data))
    }
    fetch();
  }, [id]);
  function handleDeletePodcast(id) {
    deletePodcast(id)
    navigate('/podcast')
  };

    return ( 
        <div>
          <img src="/images/logo.jpeg" height="200"/>
      <Card>
        <Card.Img variant="top"  />
          <Card.Body>
            <Card.Title>{podcast.title}</Card.Title>
          
            <iframe src={podcast.podcastLink} loading='lazy' width='100%' height='200' frameborder='0' scrolling='no' title=''></iframe>

            {/*Instert description data */}
            <Card.Subtitle>{podcast.description}</Card.Subtitle>
            
           
      </Card.Body>
      {isAuthenticated ? (
                    <Button onClick={() => handleDeletePodcast(podcast.id)}
                    style={{ width: '10rem', height: '3rem', position: 'right' }} className="delete-button-color"
                    variant="danger"

                    >Delete</Button>
                ):(
                  <>
                  </>
                )}
    </Card>
        </div>
     );
}

export default PodcastDetail;