const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;

  return <div className={`${className}`}>{name}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div className="box-container">
      <Box name="Small" className="small" />
      <Box name="Medium" className="medium" />
      <Box name="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
