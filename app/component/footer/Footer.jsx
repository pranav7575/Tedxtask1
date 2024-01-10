import "./Footer.css";
const Footer = () => {
  return (
    <div className="foot">
      <div className="leftfoot">
        <div className="title1">
          <span id="tedx">TEDx</span>VITPUNE
        </div>
        <div className="basicinfo">
          TEDxVITPune, solely believe in the power of ideas to change attitudes,
          lives, and ultimately, the world at large.
        </div>
        <div className="con-details">
          <h4>Orgranizer</h4>
          <span className="con1">Niharika Rathi +91 (968) 989-8018</span>
          <span className="con2">Asawari Bapat +91 (766) 634-5498 </span>
        </div>
      </div>
      <div className="rightfoot">
        <div className="mailsec">
        <h1>Join our Newsletter</h1>
        <input type="text" name="mailsend"></input>
        <button name='send' >Send</button>
        </div>
       
      </div>
    </div>
  );
};
export default Footer;
