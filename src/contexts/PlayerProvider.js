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

    function getAllPlayers() {
        return axios.get(baseUrl).then(response => setPlayer(response.data));
    }

    function getPlayer(id) {
        
    }

    function addPlayer(player) {        

    }

    function editPlayer(player) {

    }

    function deletePlayer(id) {

    }

    return (
        <PlayerContext.Provider value={{
            player,
            getAllPlayers,
            getPlayer,
            addPlayer,
            editPlayer,
            deletePlayer
        }}>
            { props.children }
        </PlayerContext.Provider>
    )
};