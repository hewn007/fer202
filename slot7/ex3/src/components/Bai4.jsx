import React from "react";

export default function Bai4() {
  return (
    <div>
      <header className="bg-warning text-center p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/FPT_Education_logo.png"
          alt="FPT Logo"
          width="250"
        />
        <nav className="mt-2">
          <a href="#" className="mx-3 text-dark fw-bold">Home</a>
          <a href="#" className="mx-3 text-dark fw-bold">About</a>
          <a href="#" className="mx-3 text-dark fw-bold">Contact</a>
        </nav>
      </header>

      <div className="container text-center my-5">
        <section>
          <h3>About</h3>
          <p>This is the about section of the website.</p>
        </section>

        <section className="mt-4">
          <h3>Contact</h3>
          <p>For any inquiries, please contact us at example@example.com</p>
        </section>
      </div>

      <footer className="bg-warning text-center p-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}
