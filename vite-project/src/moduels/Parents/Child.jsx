const Child = (props) => {
  console.log("Rendering Child component with props:", props);

  const energyStatus = props.eneryLevel > 9000 ? "It's over 9000" : "low";

  return <div>Energy: {energyStatus}</div>;
};

export default Child;
