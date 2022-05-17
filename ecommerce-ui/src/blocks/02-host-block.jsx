import React from 'react'

import Information from './03-information'
import bnbs from '../bnbs.json'

function HostBlock() {
    return(
        <div className='host-block'>
            {bnbs.map(bnb =>
                <div className='exhibit'>
                <Information
                    title={bnb.title}
                    houseType={bnb.houseType}
                    location={`${bnb.location.city}, ${bnb.location.country}`}
                    hostName={bnb.host.name}
                    priceInfo={`$${bnb.payment.cost} per night`}
                    picturePath={bnb.image}
                />
                </div>
            )}
        </div>
    );
}

export default HostBlock
