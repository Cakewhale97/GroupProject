import Parent from "./Parent";

const GrandParents = () => {
  console.log("Rendering Grandparent component");

  return <Parent message="Hej barnbarnet!" />;
};

export default GrandParents;
