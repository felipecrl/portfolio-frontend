import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/components/admin/LoginPage";
import { AdminPanel } from "@/components/admin/AdminPanel";
import { SiteHome } from "@/components/site/SiteHome";

export default function App() {
  return <AppRoutes />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SiteHome />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}