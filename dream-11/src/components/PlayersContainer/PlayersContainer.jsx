import PropTypes from "prop-types";
const PlayersContainer = ({player, handleChoosePlayer}) => {
    const {name, image, nationality, role, bat, ball, price} = player;
    return (
        <div className="border p-5 rounded-xl">
            <img className="rounded-xl" src={image} alt="" />
            <div className="flex items-center gap-3 py-5">
                <i className="fa-solid fa-user text-2xl"></i>
                <h2 className="font-bold text-xl">{name}</h2>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-4 text-secondary">
                    <i className="fa-solid fa-flag text-xl"></i>
                    <p className="text-base font-medium">{nationality}</p>
                </div>
                <div>
                    <h4 className="bg-gray-100 px-4 py-1 rounded-lg">{role}</h4>
                </div>
            </div>
            <div className="border-b pt-6"></div>
            <h2 className="text-base font-bold py-4">Rating</h2>
            <div className="flex justify-between">
                <p className="font-semibold">{bat}</p>
                <p className="text-secondary">{ball}</p>
            </div>
            <div className="flex justify-between pt-4">
                <p className="font-semibold">Price: ${price}</p>
                <button onClick={() => handleChoosePlayer(player)} className="border px-4 py-2 rounded-lg hover:bg-primary font-medium">Choose Player</button>
            </div>
        </div>
    );
};

PlayersContainer.propTypes = {
    player: PropTypes.object,
    handleChoosePlayer: PropTypes.func
}

export default PlayersContainer;