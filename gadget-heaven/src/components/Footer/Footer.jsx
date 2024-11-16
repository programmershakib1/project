const Footer = () => {
    return (
        <div className="pt-24 pb-28">
            <h2 className="md:text-5xl text-2xl font-bold text-center">Gadget Heaven</h2>
            <p className="text-center text-p font-semibold py-5">Loading the way in cutting-edge technology and Innovation</p>
            <div className="border my-5 mx-3 md:mx-0"></div>
            <div className="flex flex-col md:flex-row justify-between px-10 lg:px-80">
                <div>
                    <h4 className="text-2xl font-bold py-5">Services</h4>
                    <p className="text-p font-medium">Product Support</p>
                    <p className="py-3 text-p font-medium">Order Tracking</p>
                    <p className="text-p font-medium">Shipping & Delivery</p>
                    <p className="pt-3 text-p font-medium">Returns</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold py-5">Company</h4>
                    <p className="text-p font-medium">About Us</p>
                    <p className="py-3 text-p font-medium">Careers</p>
                    <p className="text-p font-medium">Contact</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold py-5">Legal</h4>
                    <p className="text-p font-medium">terms of services</p>
                    <p className="py-3 text-p font-medium">Privacy Policy</p>
                    <p className="text-p font-medium">Cookie Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;