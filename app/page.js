import"./home.css"
const Home = () => {
  return (
    <div className="homecontainer">
      <div className="videocontainer">
      <video src={require('../public/TEDx.mp4')} autoPlay muted loop className='loader' />
      </div>
    </div>
  );
};
export default Home;
