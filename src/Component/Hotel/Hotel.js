import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import HotelFakeData from '../HotelFakeData/HotelFakeData';


const Hotel = () => {
    const [Hotel] = useState(HotelFakeData);
    const { traData } = useContext(UserContext);

    return (
        <div className="row">
            <div className="col-sm">
                <small>252 stays Apr 13-17 3guests</small><br />
                <b>Stay in {traData.TravelTitle}</b>
                {Hotel.map(hotel =>

                    <div className="card mb-3" style={{ maxWidth: "1300px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={hotel.HotelImg} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"> {hotel.HotelName}</h5>
                                    <p className="card-text">{hotel.HotelBody}</p>
                                    <p className="card-text">Price: $<small className="text-muted">{hotel.price}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="col-sm">
                <img style={{width:'95%', marginTop:'45px'}} src="https://i.imgur.com/3JmTpbh.png" alt="" />
                {/* <GoogleMap></GoogleMap> */}
                {/* <Grid item xs={12} md={6}>
                <GoogleMap></GoogleMap>
                <GoogleMap></GoogleMap>
               </Grid> */}
            </div>
        </div>
    );
};

export default Hotel;