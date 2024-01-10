import "./contact.css"
const Contact=()=>{
    return <div className="contactcontainer">
    <div className="upper"> 
    <div className="contacthead">Contact Us</div>
    <div className="hinfo">Get in touch with us to know more about TEDxVITPune! Fill your details and queries and a member of our team will get back to you.</div>
    </div>
    <div className="middle">
      <div className="userinfo">
     <div className="first"> 
          <span className="username">What’s your name?</span>
          <input type="text" placeholder="pranav jadhav" id="name"></input>
          </div>
    
      <div className="second"> 
          <span className="usermail">What’s your email?</span>
          <input type="text" placeholder="pranavjadhav432@gmail.com" id="mail"></input>
          </div>

          <div className="third"> 
          <span className="usermsg">What’s your message?</span>
          <input type="text" placeholder="what yould like to know" id="msg"></input>
          </div>
          </div>
      
      <div className="extrainfo">
        <button className="submitb">Submit</button>
      </div>
    </div>
    </div>
  }
  export default Contact;