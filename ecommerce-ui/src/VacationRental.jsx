import React from "react";

function VacationRental({data}) {
    return (
        <div>
            <div className="card">
                <div className="left-side">
                    <img src={data.image}></img>
                    <p>{data.title}</p>
                    <p>{data.location.city}, {data.location.country}</p>
                </div>
                <div className="right-side">
                    <p>Cost : {data.payment.cost}</p>
                    <p>Description : {data.payment.description}</p>
                    <p>HouseType : {data.houseType}</p>
                    <p>Name : {data.host.name}</p>
                    <p>Rating : {data.rating.stars}</p>
                    <p>Reviews : {data.rating.reviews}</p>
                </div>
            </div>
        </div>
    );
}

export default VacationRental;