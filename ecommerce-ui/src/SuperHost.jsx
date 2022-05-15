import React from 'react';
import shost from './suphost.png';

export default function SuperHost(prop) {
  // if (prop) {
  //   return <img src={shost} alt="This host is a superhost" className="SupHost-pic" />;
  // }
  return (prop ? <p>Regular Host</p> : <p>Superhost!</p>);
}
