import Layout from "./Component/Layout";
import Dashboard from "./pages/Dashbaord";
import Login from "./pages/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import AuthRoute from "./Component/AuthRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./website/Contact";
import WebsitePhoto from "./website/WebsitePhoto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/photo" element={<WebsitePhoto/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
