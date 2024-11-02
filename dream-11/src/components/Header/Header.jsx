import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import coin_logo from '../../assets/images/coin.png';
const Header = ({coin}) => {
    return (
        <div className="container mx-auto flex justify-between items-center px-5 lg:px-0 md:px-0">
            <div>
                <img className='w-20 h-20' src={logo} alt="" />
            </div>
            <div className="flex gap-10">
                <button className="text-base font-medium hidden lg:block">Home</button>
                <button className="text-base text-secondary font-medium hidden lg:block">Fixture</button>
                <button className="text-base text-secondary font-medium hidden lg:block">Teams</button>
                <button className="text-base text-secondary font-medium hidden lg:block">Schedules</button>
                <div className='flex items-center gap-3 border rounded-lg py-2 px-3'>
                    <h2 className="text-base font-bold">{coin} Coin </h2>
                    <img src={coin_logo} alt="" />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    coin: PropTypes.number
}

export default Header;