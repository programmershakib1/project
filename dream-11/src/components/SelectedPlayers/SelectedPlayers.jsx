import PropTypes from "prop-types";
const SelectedPlayers = ({ choosePlayer, handleDelete, handleActive }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-5">
        Selected Players ({choosePlayer?.length}/6)
      </h2>
      <div>
        {choosePlayer.map((player, idx) => (
          <div
            key={idx}
            className="grid grid-cols-10 mt-5 border p-5 rounded-xl"
          >
            <div className="col-span-9 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div className="flex items-center gap-5">
                <div>
                  <img
                    className="w-20 h-20 rounded-xl"
                    src={player?.image}
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl lg:text-2xl md:text-2xl font-bold">
                    {player?.name}
                  </h2>
                  <p className="text-base text-secondary font-semibold">
                    {player?.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center ml-10">
                <div className=" hidden lg:block md:block">
                  <p className="text-lg font-semibold">${player?.price}</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-end">
              <button onClick={() => handleDelete(player?.id)}>
                <i className="fa-regular fa-trash-can text-red-500"></i>
              </button>
            </div>
          </div>
        ))}
        <div
          onClick={() => handleActive("available")}
          className="w-52 border border-blue-800 mt-16 p-1 rounded-xl"
        >
          <button className="w-full bg-primary px-6 py-4 rounded-xl text-base font-bold">
            Add More Player
          </button>
        </div>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  choosePlayer: PropTypes.array,
  handleDelete: PropTypes.func,
  handleActive: PropTypes.func,
};

export default SelectedPlayers;
