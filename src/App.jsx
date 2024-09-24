import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Markets from "./pages/Markets";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import Tutorials from "./pages/Tutorials.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/";

  return (
    <div>
      {!isAuthPage && <Sidebar />}
      {!isAuthPage && (
        <div className={`md:ml-[19.2rem] bg-[#F0F8FF] dark:bg-[#12131A] px-[34px] min-h-[calc(100vh-98px)]`}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/help" element={<Help />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      )}
      {isAuthPage && <Auth />}
    </div>
  );
}

export default App;
