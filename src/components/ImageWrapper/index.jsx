import styles from './ImageWrapper.module.scss'

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

export default ImageWrapper
