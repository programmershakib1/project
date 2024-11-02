import PropTypes from "prop-types";
import PlayersContainer from "../PlayersContainer/PlayersContainer";

const AvailablePlayers = ({players, handleChoosePlayer}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mt-5">Available Players</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
                {
                    players.map((player, idx) => <PlayersContainer 
                    key={idx} 
                    player={player}
                    handleChoosePlayer={handleChoosePlayer}
                    ></PlayersContainer>)
                }
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    players: PropTypes.array,
    handleChoosePlayer: PropTypes.func
}

export default AvailablePlayers;