import '../styles/LandingPage.css'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <main className='landing-main'>
    <div className="LandingPage" onClick={handleClick}>
        <div className='landing-images'>
        <img src="src/assets/intro-graphic-left.svg" alt="" />
        <img className='landing-images-right' src="src/assets/intro-graphic-right.svg" alt="" />
      <h1></h1>
      </div>
    </div>
    </main>
  );
}
