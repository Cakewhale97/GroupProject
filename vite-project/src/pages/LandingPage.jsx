import '../styles/LandingPage.css'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="LandingPage" onClick={handleClick}>
      <h1>AIRBEAN</h1>
      <p>DRONEDELIVERY</p>
    </div>
  );
}
