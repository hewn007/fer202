import React from "react";

export default function Bai2() {
  return (
    <div>
      <div className="bg-light text-center p-4">
        <h2>My First Bootstrap Page</h2>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              width="150"
              alt="HTML"
            />
          </div>
          <div className="col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              width="150"
              alt="CSS"
            />
          </div>
          <div className="col">
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              width="150"
              alt="Bootstrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
