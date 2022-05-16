import React from "react";
import PropTypes from 'prop-types';

function Cost({cost, description}){


    let costDiv = <div className="cost">${cost} a night</div> ;


    if(description === "Free cancellation"){
        costDiv = <div className="cost">${cost} a night &#8226; <span className="description">{description}</span></div>
      };
  
    return <div className="cost-div-main">{costDiv}</div>
  }
  
  Cost.propTypes ={
    cost: PropTypes.number.isRequired,
    description: PropTypes.string
  }

export default Cost;