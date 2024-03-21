import Child from "./Child";

const Parent = (props) => {
  console.log("Rendering Parent component with props:", props);

  return <Child message={props.message} />;
};

export default Parent;
