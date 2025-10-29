import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Chi tiết sản phẩm: {productId}</h2>
      <p>Đây là thông tin chi tiết cho sản phẩm có ID: {productId}.</p>
      <button onClick={() => navigate("/san-pham")}>
        ⬅ Quay lại trang sản phẩm
      </button>
    </div>
  );
};

export default ProductDetail;
