import UsersList from "./components/UsersList";
import PaymentsList from "./components/PaymentsList";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Progress Test 2 — Redux Toolkit</h1>

      <UsersList />
      <hr />
      <PaymentsList />
    </div>
  );
}
