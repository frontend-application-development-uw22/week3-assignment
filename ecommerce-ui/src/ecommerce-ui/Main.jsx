import React from "react";
import VacationRentals from "./VacationRentals";

function Main(props) {
    const { properties } = props;

    return (

        <main className="block col-2">
            <h2>Available Properties</h2>
            <div className="row">
                {properties.map((property) => (
                    <VacationRentals key={property.id} property={property} />
                ))}

            </div>
        </main>
    )

}

export default Main