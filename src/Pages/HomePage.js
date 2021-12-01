import React from "react";
import NavBar from "../Components/NavBar";
import MainImage from "../img/mainimage.jpg";

function HomePage() {
  const container = {
    width: "95%",
    margin: "0 auto",
    display: "flex",
  };
  const column1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "1em 0.5em",

    width: "55%",
  };
  const imageSize = {
    maxWidth: "30em",
    width: "90%",
  };

  const column2 = {
    fontSize: "1.25rem",
    padding: "1em",
    width: "35%",
  };

  return (
    <>
      <NavBar home="/" programmingblog="/Programmingblogs" />
      <main style={container}>
        <div style={column1}>
          <h1 style={{ fontSize: "3rem" }}>Welcome to My Blog</h1>
          <img style={imageSize} src={MainImage} alt="typing on computer" />
        </div>
        <div style={column2}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            quis auctor elit sed vulputate mi sit. Tellus orci ac auctor augue
            mauris augue neque gravida. A condimentum vitae sapien pellentesque
            habitant morbi. Orci nulla pellentesque dignissim enim sit amet
            venenatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            justo donec enim diam. Aenean sed adipiscing diam donec adipiscing.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum et sollicitudin ac orci phasellus.
          </p>
        </div>
      </main>
    </>
  );
}

export default HomePage;
