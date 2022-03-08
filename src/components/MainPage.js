import React from "react";
import mainImage from "../assets/image/mainpage.jpg";

export const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>WELCOME TO INNOVATE MAIN PAGE</h1>

      <img
        style={{ maxWidth: "100vw", maxHeight: "70vh" }}
        src={mainImage}
        alt="main page "
      />
    </div>
  );
};
