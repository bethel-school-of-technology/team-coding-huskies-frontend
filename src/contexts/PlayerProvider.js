import axios from "axios";
import { useEffect, useState } from "react";
import PlayerContext from "./PlayerContext";

export const PlayerProvider = (props) => {

    const [ player, setPlayer ] = useState([]);
    const baseUrl = "http://localhost:3000/api/player/";
    useEffect(() => {
        async function fetchData() {
            await getAllPlayers();
        }
        fetchData();
    }, []);

    function getPodcast(id){
        return axios.get(`http://localhost:3002/podcast/${id}`)
        .then(response =>
            new Promise((resolve) => resolve(response.data))
        )
    }
    function getAllPodcasts(){
        return axios.get(`http://localhost:3002/podcast`)
        .then(response =>
            new Promise((resolve) => resolve(response.data))
        )
    }
    function deletePodcast(id){
        axios.delete(`http://localhost:3002/podcasts/${id}`)
        .then(refreshPodcats)
    }
    function addPodcast(podcast){
        return axios.post("http://localhost:3002/podcasts", podcast)
        .then(response => {
            refreshPodcasts()
            return new Promise((resolve) => resolve(response.data))
        })
    }
    function updatePodcast(podcast) {
        return axios.put(`http://localhost:3002/podcasts/${podcast.id}`, podcast)
        .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))   
        })
    }
    function refreshPodcasts(){
        return axios.get("http://localhost:3002/podcasts")
        .then(response => {
            setProducts(response.data) 
        })
    }

    return (
        <PlayerContext.Provider value={{
            player,
            getAllPodcasts,
            getPodcast,
            addPodcast,
            updatePodcast,
            deletePodcast,
            refreshPodcasts
        }}>
            { props.children }
        </PlayerContext.Provider>
    )
};