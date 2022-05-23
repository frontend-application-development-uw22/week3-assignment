import React from 'react';
import PropTypes from 'prop-types';

function Section({ sectionName })
{
  return (
    <div >
      <h3>{sectionName}</h3>
    </div>
  )
}

Section.propTypes =
  {
    sectionName: PropTypes.string.isRequired
  }

export default Section;
