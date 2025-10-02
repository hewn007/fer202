import React from "react";

export default function Bai1() {
  return (
    <div>
      <div className="bg-light p-4">
        <h2>Let's test the grid!</h2>
      </div>

      <div className="container mt-3">
        <div className="row bg-secondary text-white text-center">
          <div className="col border">First col</div>
          <div className="col border">Second col</div>
        </div>

        <div className="row bg-secondary text-white text-center">
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
        </div>

        <div className="row bg-secondary text-white text-center">
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
        </div>
      </div>

      <div className="bg-light text-center p-3 mt-3">
        <h4 className="fw-bold">Created by ABC!</h4>
      </div>
    </div>
  );
}
