import { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";


function PodcastDetail() {
  const {getPodcast } = useContext(PlayerContext);
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
    </Card>
        </div>
     );
}

export default PodcastDetail;