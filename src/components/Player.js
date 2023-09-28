import React from 'react';
import PlayerContext from '../contexts/PlayerContext';
import { Link } from 'react-router-dom';

const Player = () => {
    return (
        <PlayerContext.Consumer>
            {({ player }) => (
                <div>
                    <h1>PodCast</h1>
                    <Link to="/player/new">Add New Podcast</Link> {/* Changed the link path to "/podcast/new" */}
                    <div>
                        {player.map((p) => (
                            <div key={p.id}>
                                <h2>{p.name} | ${p.price}</h2>
                                <p>{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </PlayerContext.Consumer>
    );
};

export default Player;
