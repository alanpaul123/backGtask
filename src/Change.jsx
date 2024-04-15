import React from "react";

function Change() {
  const redBg = function () {
    document.body.style.backgroundColor = "red";
  };

  const yellowBg = function () {
    document.body.style.backgroundColor = "yellow";
  };

  const blueBg = function () {
    document.body.style.backgroundColor = "blue";
  };

  const blackBg = function () {
    document.body.style.backgroundColor = "black";
  };

  const greenBg = function () {
    document.body.style.backgroundColor = "green";
  };

  const whiteBg = function () {
    document.body.style.backgroundColor = "white";
  };

  return (
    <div>
      <div className="box">
        <button onClick={() => redBg()} className="Red a">
          Red
        </button>
        <button onClick={() => yellowBg()} className="Yellow a">
          Yellow
        </button>
        <button onClick={() => blueBg()} className="Blue a">
          Blue
        </button>
        <button onClick={() => greenBg()} className="Green a">
          Green
        </button>
        <button onClick={() => blackBg()} className="Black a">
          Black
        </button>

        <button onClick={() => whiteBg()} className="White a">
          White
        </button>
      </div>
    </div>
  );
}

export default Change;
