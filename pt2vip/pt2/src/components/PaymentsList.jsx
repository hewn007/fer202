
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../features/payments/paymentsSlice";
import { selectSuccessfulPayments } from "../features/payments/selectors";

export default function PaymentsList() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state) => state.payments);
  const successPayments = useSelector(selectSuccessfulPayments);

  const handleNewPayment = () => {
    dispatch(createPayment({ amount: 200, status: "SUCCESS" }));
  };

  return (
    <div>
      <h2>Payments Management</h2>
      <button onClick={handleNewPayment}>Tạo Payment</button>

      {isLoading && <p>Đang xử lý...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Tất cả Payments</h3>
      {list.map((p, idx) => (
        <div key={idx}>{p.status} — {p.amount}</div>
      ))}

      <h3>Payments Thành Công</h3>
      {successPayments.map((p, idx) => (
        <div key={idx}>{p.amount}</div>
      ))}
    </div>
  );
}
