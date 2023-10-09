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
          .get(`http://localhost:3003/podcast/${id}`);
      return await new Promise((resolve) => resolve(response.data));
  }

  function getAllPodcasts() {
    return axios
      .get(`http://localhost:3003/podcast`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function deletePodcast(id) {
    axios.delete(`http://localhost:3003/podcasts/${id}`).then(refreshPodcasts);
  }

  function newPodcast(podcast) {
    return axios
      .post("http://localhost:3003/podcasts", podcast)
      .then((response) => {
        refreshPodcasts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function updatePodcast(podcast) {
    return axios
      .put(`http://localhost:3003/podcasts/${podcast.id}`, podcast)
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
