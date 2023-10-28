import styles from './ImageWrapper.module.scss'
import PropTypes from 'prop-types'

function ImageWrapper ({ children, width, height, ...restProps }) {
  const containerStyle = {
    width, // width: width
    height // height: height
  }

  return (
    <div
      {...restProps}
      style={containerStyle}
      className={styles.imageContainer}
    >
      {children}
    </div>
  )
}

ImageWrapper.defaultProps = {
  width: '300px',
  height: '300px'
}

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

export default ImageWrapper
