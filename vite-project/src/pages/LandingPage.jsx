import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="LandingPage" onClick={handleClick}>
      <h1>AIRBEAN</h1>
      <P>DRONEDELIVERY</P>
    </div>
  );
}

export default LandingPage;
