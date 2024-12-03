import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div className="pt-20 md:pt-32 mx-5 md:mx-0">
            <h2 className="md:text-5xl text-2xl font-bold text-center text-primary font-sora">Lingo Bingo</h2>
            <p className="text-center text-p font-semibold mb-10 md:pb-14 mt-8">Learn, explore, and grow with Lingo Bingo — your ultimate language learning companion!</p>
            <div className="grid md:grid-cols-3">
                <div className='text-center font-semibold'>
                    <h4 className="text-2xl font-bold py-5">Contact Us</h4>
                    <p>📧 Email: support@lingobingo.com</p>
                    <p>📞 Phone: +1-800-LINGO</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold py-5 text-center">Follow Us</h4>
                    <div className='flex items-center gap-2 justify-center'>
                        <a href="https://www.facebook.com/programmershakibbangladesh" target='_blank'><img className='w-14' src={facebook} alt="" /></a>
                        <a href="https://www.instagram.com/programmershakib/" target='_blank'><img className='w-14' src={instagram} alt="" /></a>
                        <a href="https://x.com/programershakib" target='_blank'><img className='w-14' src={twitter} alt="" /></a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className="text-2xl font-bold py-5">Subscribe</h4>
                    <input type="text" className="border border-black pl-3 py-1 px-10 rounded-sm" placeholder="enter your email"/>
                    <button className="bg-primary py-1 px-4 text-white mt-1 font-semibold rounded-sm">Subscribe</button>
                </div>
            </div>
            <p className="text-center py-16 font-medium">© 2024 Lingo Bingo. All rights Reserved.</p>
        </div>
    );
};

export default Footer;