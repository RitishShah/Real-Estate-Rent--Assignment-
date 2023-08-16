import React, { useState } from 'react';
import "./Home.css";
import jsonData from "../Houses/housesData.json";
import HouseCard from '../Houses/HouseCard';

const Home = () => {
    const totalHouses = jsonData;
    
    const [houses, setHouses] = useState(totalHouses);
    const [location, setLocation] = useState("");
    const [beds, setBeds] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] =  useState("");

    const submitHandler = () => {
        const isLocation = location === "" ? false : true;
        const isBeds = beds === "" ? false : true;
        const isPrice = price === "" ? false : true;
        const isType = type === "" ? false : true;

        let filteredHouses = totalHouses;
        
        
        if(isLocation) {
            console.log("location");
            filteredHouses = filteredHouses.filter((house) => house.country === location);
        }

        if(isBeds) {
            console.log("beds");
            const values = beds.split("-");
            const initialBeds = parseInt(values[0]);
            const finalBeds = parseInt(values[1]);

            filteredHouses = filteredHouses.filter((house) => initialBeds<= house.bedrooms && house.bedrooms <= finalBeds);
        }

        if(isPrice) {
            console.log(price);
            const values = price.split("-");
            const initialPrice = parseInt(values[0]);
            const finalPrice = parseInt(values[1]);

            filteredHouses = filteredHouses.filter((house) => initialPrice <= house.rent && house.rent <= finalPrice);
        }

        if(isType) {
            filteredHouses = filteredHouses.filter((house) => house.type === type);
        }

        const result = filteredHouses.length > 0 ? filteredHouses : [];
        setHouses(result);
    }

    return (
        <>   
            <div className="topParent">
                <h1>Search Properties To Rent</h1>
                <div className="filterBox">
                    <div className="filter">
                        <h6>Location</h6>
                        <select className='selectFilter' name="Select" id="" onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Select</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>
                    <div className="filter">
                        <h6>No. Of Beds</h6>
                        <select className='selectFilter' name="Select" id="" onChange={(e) => {setBeds(e.target.value); console.log(e.target.value)}}>
                            <option value="">Select</option>
                            <option value="1-5">1-5</option>
                            <option value="6-10">6-10</option>
                            <option value="11-15">11-15</option>
                        </select>
                    </div>
                    <div className="filter">
                        <h6>Price</h6>
                        <select className='selectFilter' name="Select" id="" onChange={(e) => setPrice(e.target.value)}>
                            <option value="">Select</option>
                            <option value="1000-5000">1000-5000</option>
                            <option value="5001-10000">5001-10000</option>
                            <option value="10001-15000">10001-15000</option>
                        </select>
                    </div>
                    <div className="filter">
                        <h6>Property-Type</h6>
                        <select className='selectFilter' name="Select" id="" onChange={(e) => setType(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Villa">Villa</option>
                            <option value="Duplex">Duplex</option>
                        </select>
                    </div>
                    <div className="search">
                        <button onClick={submitHandler}>Search</button>
                    </div>
                </div>

                <div className="allHouses">
                    {houses.map((item, index) => {
                        return <HouseCard key={index} house={item}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;
