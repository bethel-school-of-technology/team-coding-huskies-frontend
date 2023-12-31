import axios from "axios";
import { useEffect, useState } from "react";
import PlayerContext from "./PlayerContext";

export const PlayerProvider = (props) => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await refreshPodcasts();
    }
    fetchData();
  }, []);

  async function getPodcast(id) {
    const response = await axios
          .get(`http://localhost:3003/podcasts/${id}`);
      return await new Promise((resolve) => resolve(response.data));
  }

  function getAllPodcasts() {
    return axios
      .get(`http://localhost:3003/podcasts`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function deletePodcast(id) {
    let token = localStorage.getItem('myPodcastToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    axios.delete(`http://localhost:3003/podcasts/${id}`, config).then(refreshPodcasts);
  }

  function newPodcast(podcast) {
    let token = localStorage.getItem('myPodcastToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return axios
      .post("http://localhost:3003/podcasts", podcast, config)
      .then((response) => {
        refreshPodcasts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function updatePodcast(podcast) {
    let token = localStorage.getItem('myPodcastToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    return axios
      .put(`http://localhost:3003/podcasts/${podcast.id}`, podcast, config)
      .then((response) => {
        refreshPodcasts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function refreshPodcasts() {
    return axios.get("http://localhost:3003/podcasts").then((response) => {
      setPodcasts(response.data);
    });
  }

  return (
    <PlayerContext.Provider
      value={{
        podcasts,
        getAllPodcasts,
        getPodcast,
        newPodcast,
        updatePodcast,
        deletePodcast,
        refreshPodcasts,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
