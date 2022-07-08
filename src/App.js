import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
import List from "./components/List";
import PrivateRoute from "./routes/PublciRoutes";
import Layout from "./components/common/layout/Layout";
import DetailsProducts from "./components/products/DetailsProducts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/lists" element={<PrivateRoute Component={List} />} />
        <Route
          path="/products/:id"
          element={<PrivateRoute Component={DetailsProducts} />}
        />
        <Route path="/" element={<Navigate to="/lists" />} />
      </Routes>
    </Layout>
  );
}

export default App;
