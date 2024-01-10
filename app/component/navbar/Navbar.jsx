import Link from 'next/link';
import './Navbar.css'
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-icon">
        <div className='insta'><FaInstagram size='28px'/></div>
        <div className='insta'><FaTwitter size='28px'/></div>
        <div className='insta'><FaFacebook size='28px'/></div>
        <div className='insta'><FaLinkedin size='28px'/></div>
        <div className='insta'><FaYoutube size='28px'/></div>
    
      </div>
      <Link href="/" className='homedir'><div className="title"><span id='tedx'>TEDx</span>VITPUNE</div></Link>
      <div className="nav">
         <Link className="about1" href="/about">About</Link>
         <Link className="lookbook1"href="/lookbook">lookbook</Link>
         <Link href="/contact" className='contact1'>Contact Us</Link>
       
  
      </div>
    </div>

  );
};
export default Navbar;
