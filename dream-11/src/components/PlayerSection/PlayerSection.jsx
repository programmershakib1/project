import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const PlayerSection = ({handleActive, isActive, handleChoosePlayer, choosePlayer, handleDelete}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);
    return (
        <div className="mb-72 px-5 lg:px-0 md:px-0 lg:mt-20 md:mt-20">
            <div className="text-base font-bold flex justify-end">
                <div className="border rounded-xl">
                    <button onClick={() => handleActive('available')} className={isActive.active?"bg-primary px-8 py-4 rounded-l-xl":"bg-white text-secondary px-8 py-4 rounded-xl"}>Available</button>
                    <button onClick={() => handleActive('selected')} className={isActive.active?"bg-white text-secondary px-8 py-4 rounded-xl":"bg-primary px-8 py-4 rounded-r-xl"}>Selected ({choosePlayer?.length})</button>
                </div>
            </div>
            {
                isActive.active?<AvailablePlayers 
                players={players}
                handleChoosePlayer={handleChoosePlayer}
                ></AvailablePlayers>:<SelectedPlayers
                choosePlayer={choosePlayer}
                handleDelete={handleDelete}
                handleActive={handleActive}
                ></SelectedPlayers>
            }
        </div>
    );
};

PlayerSection.propTypes = {
    handleActive: PropTypes.func,
    isActive: PropTypes.object,
    handleChoosePlayer: PropTypes.func,
    choosePlayer: PropTypes.array,
    handleDelete: PropTypes.func
}

export default PlayerSection;