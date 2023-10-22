import ImageWrapper from './components/ImageWrapper';

function App() {
  return (
    <ImageWrapper
      width="50px"
      height="50px"
      title="Its a cat"
      hidden={false}
      style={{ border: '2px solid red' }}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*"
        alt="cat"
      />
    </ImageWrapper>
  );
}

export default App;
