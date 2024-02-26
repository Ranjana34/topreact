import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import PaymentSummary from "./pages/paymentsummary";
import './App.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="paymentsummary" element={<PaymentSummary />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);