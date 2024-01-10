import"./home.css"
const Home = () => {
  return (
    <div className="homecontainer">
      <div className="videocontainer">
      <video src={require('https://res.cloudinary.com/dpa1bnqm3/video/upload/f_auto:video,q_auto/kdnajgnzmqic7ugnvus8')} autoPlay muted loop className='loader' />
      </div>
    </div>
  );
};
export default Home;
