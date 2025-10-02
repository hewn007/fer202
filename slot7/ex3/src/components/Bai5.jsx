import React from "react";

export default function Bai5() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light d-flex justify-content-between align-items-center px-4 py-2 border-bottom">
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/FPT_Education_logo.png"
            alt="FPT Logo"
            height="50"
          />
          <nav className="ms-4">
            <a href="#" className="mx-2 text-dark fw-bold">
              Trang chủ
            </a>
            <a href="#" className="mx-2 text-dark fw-bold">
              Ngành học
            </a>
            <a href="#" className="mx-2 text-dark fw-bold">
              Tuyển sinh
            </a>
            <a href="#" className="mx-2 text-dark fw-bold">
              Sinh viên
            </a>
          </nav>
        </div>
        <div>
          <input type="text" placeholder="Search..." className="form-control" />
        </div>
      </header>

      {/* Banner */}
      <div>
        <img
          src="https://cdnphoto.dantri.com.vn/awNZZ7H_QiWCDaMt_0uShFDRGdY=/zoom/1200_630/2022/09/05/sinh-vien-fpt-dn-1662341575354.jpg"
          alt="Students Banner"
          className="img-fluid w-100"
        />
      </div>

      {/* Breadcrumb */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Students
            </li>
          </ol>
        </nav>
      </div>

      {/* Students Detail */}
      <div className="container mt-4">
        <h3 className="mb-4 text-center">Students Detail</h3>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://i.ibb.co/fnSPvpz/sv1.jpg"
                className="card-img-top"
                alt="student1"
              />
              <div className="card-body text-center">
                <h6>Nguyễn Hữu Quốc Khánh</h6>
                <p>DE160182 - Đà Nẵng</p>
                <div>
                  <input type="radio" name="s1" /> Absent
                  <input type="radio" name="s1" className="ms-2" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://i.ibb.co/bdLfrZW/sv2.jpg"
                className="card-img-top"
                alt="student2"
              />
              <div className="card-body text-center">
                <h6>Choy Vinh Thiện</h6>
                <p>DE160377 - Quảng Nam</p>
                <div>
                  <input type="radio" name="s2" /> Absent
                  <input type="radio" name="s2" className="ms-2" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://i.ibb.co/txwjJ5S/sv3.jpg"
                className="card-img-top"
                alt="student3"
              />
              <div className="card-body text-center">
                <h6>Đỗ Nguyễn Phúc</h6>
                <p>DE160547 - Quảng Nam</p>
                <div>
                  <input type="radio" name="s3" /> Absent
                  <input type="radio" name="s3" className="ms-2" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <img
                src="https://i.ibb.co/vcnj7XZ/sv4.jpg"
                className="card-img-top"
                alt="student4"
              />
              <div className="card-body text-center">
                <h6>Lê Hoàng Minh</h6>
                <p>DE170049 - Đà Nẵng</p>
                <div>
                  <input type="radio" name="s4" /> Absent
                  <input type="radio" name="s4" className="ms-2" /> Present
                </div>
                <button className="btn btn-warning btn-sm mt-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warning text-center p-4 mt-4">
        <div className="container">
          <p className="fw-bold">Our Address</p>
          <p>Khu đô thị FPT Đà Nẵng</p>
          <p>+84 02363711111 | +852 6765 4121</p>
          <p>info@fpt.edu.vn</p>
          <div>
            <i className="bi bi-google mx-2"></i>
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-linkedin mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-youtube mx-2"></i>
          </div>
          <p className="mt-3">© Copyright 2023</p>
        </div>
      </footer>
    </div>
  );
}
    