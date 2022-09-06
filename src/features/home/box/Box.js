function Box(props) {
  const corner = () => {
    switch (props.corner) {
      case 1:
        return "5% 0 0 0";
      case 2:
        return "0 5% 0 0";
      case 3:
        return "0 0 0 5%";
      case 4:
        return "0 0 5% 0";
    }
  };
  return (
    <div
      className="box"
      style={{
        backgroundColor: props.hex,
        borderRadius: corner(),
      }}
    ></div>
  );
}

export default Box;
