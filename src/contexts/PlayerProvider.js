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
          .get(`http://localhost:5020/api/Buzz/${id}`);
      return await new Promise((resolve) => resolve(response.data));
  }

  function getAllPodcasts() {
    return axios
      .get(`http://localhost:5020/api/Buzz/`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function deletePodcast(id) {
    axios.delete(`http://localhost:5020/api/Buzz${id}`).then(refreshPodcasts);
  }

  function newPodcast(podcast) {
    return axios
      .post(`http://localhost:5020/api/Buzz/`, podcast)
      .then((response) => {
        refreshPodcasts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function updatePodcast(podcast) {
    return axios
      .put(`http://localhost:5020/api/Buzz/${podcast.id}`, podcast)
      .then((response) => {
        refreshPodcasts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function refreshPodcasts() {
    return axios.get("http://localhost:5020/api/Buzz/").then((response) => {
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
