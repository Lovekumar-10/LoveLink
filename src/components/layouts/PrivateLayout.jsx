import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar";

const PrivateLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        {/* <Navbar /> */}
        <main style={{ padding: "30px" }}>
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};

export default PrivateLayout;
