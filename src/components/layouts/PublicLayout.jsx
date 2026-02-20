import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

const PublicLayout = () => {
  return (
    <div
      style={{
        background: "var(--bg-main)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
