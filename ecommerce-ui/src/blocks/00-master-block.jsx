import React from 'react';

import TopNavigation from './01-top-navigation';
import HostBlock from './02-host-block'

function MasterBlock(){
    return(
        <div className='master-block'>
            <TopNavigation />
            <HostBlock />
        </div>
    );
}

export default MasterBlock;