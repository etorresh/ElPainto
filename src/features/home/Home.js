import "./Home.css";
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
    </div>
  );
}

export default Home;
