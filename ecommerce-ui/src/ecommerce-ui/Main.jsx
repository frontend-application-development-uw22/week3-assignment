import React from "react";
import VacationRentals from "./VacationRentals";

function Main({ properties, addRental }) {
 
    return (

        <main className="block col-2">
            <h2>Available Properties</h2>
            <div className="row">
                {properties.map((property) => (
                    <VacationRentals 
                        key={property.id} 
                        property={property} 
                        addRental={addRental} />
                ))}

            </div>
        </main>
    )

}

export default Main