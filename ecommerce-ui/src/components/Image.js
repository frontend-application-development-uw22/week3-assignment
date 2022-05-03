import PropTypes from 'prop-types';

const Image = ({ src, classImg}) => {
  return (
    <img src={src} alt='' className={classImg} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired
}

export default Image
