import "./Home.css";

import Box from "./box/Box";

function Home() {
  return (
    <div className="home">
      <div className="description">
        <h2>
          Match <span style={{ color: "#E84393" }}>colors</span> between
        </h2>
        <h2>paint companies, or find paint colors</h2>
        <h2>by RGB/HEX code.</h2>
      </div>
      <input autoFocus className="search" type="text"></input>
      <div className="box-wrapper">
        <Box hex="#e6d0bd" corner={1}></Box>
        <Box hex="#141b3c"></Box>
        <Box hex="#01ba99" corner={2}></Box>
        <Box hex="#e04396" corner={3}></Box>
        <Box hex="#7444bb"></Box>
        <Box hex="#f9dc13" corner={4}></Box>
      </div>
    </div>
  );
}

export default Home;
