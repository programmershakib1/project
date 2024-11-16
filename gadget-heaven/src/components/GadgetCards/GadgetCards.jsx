import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import NoDataPage from "../NoDataPage/NoDataPage";

const GadgetCards = () => {
    const {pathname} = useLocation();
    const data = useLoaderData();
    const {category} = useParams();
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if(category){
            const filteredByCategory = [...data].filter(gadget => gadget.category === category);
            setGadgets(filteredByCategory);
        }
        else{
            setGadgets(data.slice(0, 9));
        }

        if(category == "All Product"){
            setGadgets(data);
        }

    }, [data, category]);
    
    return (
        <div>
            {
                gadgets.length == 0 ? <div><NoDataPage></NoDataPage></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 md:mx-0">
                {
                    gadgets.map((gadget, idx) => <Card key={idx} gadget={gadget}></Card>)
                }
                </div>
            }
            <button className={pathname == '/'? 'bg-primary my-10 py-2 px-20 rounded-full font-bold text-white ml-2 md:ml-0' : 'hidden'} onClick={() => setGadgets(data)} hidden={gadgets.length > 9}>View All</button>
        </div>
    );
};

export default GadgetCards;